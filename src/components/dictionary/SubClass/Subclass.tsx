import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useGetSubclassQuery} from '../../../services/api';
import {SpellRequest, Subclasstypes} from '../../../types/requests';
import {StyledText} from '../../ui/texts/StyledText';
import {StyledSubtitle} from '../../ui/texts/StyledSubtitle';
import {StyledLabeledValue} from '../../../components/ui/texts/StyledLabeledValue';
import Spell from '../equipment/Spell';
import SubclassResources from './SubclassResources';

type Props = {
  input: Subclasstypes;
};
export default function Subclass({input}: Props) {
  const {data, error, isLoading, isFetching} = useGetSubclassQuery({
    index: input,
  });

  if (error) {
    return <Text>error in fetching</Text>;
  }
  if (isLoading) {
    return <Text>loading...</Text>;
  }
  if (isFetching) {
    return <Text>wait for response from the server</Text>;
  }
  return (
    <>
      <View>
        {data && <StyledSubtitle>{data.name}</StyledSubtitle>}
        <View style={styles.littlespace} />
        {data && <StyledSubtitle>Subclass of {data.class.name}</StyledSubtitle>}
        <View style={styles.littlespace} />
        {data && (
          <StyledText>Subclass Flavor: {data.subclass_flavor}</StyledText>
        )}
        <View style={styles.littlespace} />
        {data && data.desc.length > 0 && (
          <StyledLabeledValue
            label={'Description'}
            value={`-${data.desc.join('\n-')}`}
          />
        )}
        {data &&
          data.spells &&
          data.spells.length > 0 &&
          data.spells.map(choice => (
            <>
              {choice &&
                choice.prerequisites &&
                choice.prerequisites.map(prerequisite => (
                  <StyledLabeledValue
                    label={'Prerequisites'}
                    value={prerequisite.index}
                  />
                ))}
              <Spell input={choice.spell.index as SpellRequest} />
            </>
          ))}
        <StyledSubtitle>Resources</StyledSubtitle>
        <SubclassResources input={input} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  bit: {
    padding: 5,
  },
  littlespace: {
    margin: 10, // Distanzia i bottoni l'uno dall'altro
  },
});
