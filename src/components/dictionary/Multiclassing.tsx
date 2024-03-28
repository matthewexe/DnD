import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useGetMulticlassingQuery} from '../../services/api';
import {ClassIndexRequest} from '../../types/requests';
import {PrimaryText} from '../ui/texts/PrimaryText';
import {DescriptionText} from '../ui/texts/DescriptionText';
import {MulticlassProficiencyChoices} from './MulticlassProficiencyChoices';

type Props = {
  input: ClassIndexRequest;
};
export default function Multiclassing({input}: Props) {
  const {data, error, isLoading, isFetching} = useGetMulticlassingQuery({
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
      <PrimaryText>To be able to multiclass you must have:</PrimaryText>
      <View style={styles.spece} />
      {data &&
        data.prerequisites &&
        data.prerequisites.map(choice => (
          <PrimaryText>
            minimum score:{'\t\t'} {choice.ability_score.name}
            {'\t\t'}
            {choice.minimum_score}
          </PrimaryText>
        ))}
      <View style={styles.spece} />
      <PrimaryText>Proficiencies</PrimaryText>
      {data &&
        data.proficiencies &&
        data.proficiencies.map(choice => (
          <DescriptionText>- {choice.name}</DescriptionText>
        ))}

      {data && data.proficiency_choices && (
        <View>
          {data.proficiency_choices.map(choice => (
            <MulticlassProficiencyChoices choice={choice} />
            // {/* VERIFICA SE IL BRDO HA LE CHOICE ANCHE SUGLI STRUMENTI */}
          ))}
        </View>
      )}
    </>
  );
}
const styles = StyleSheet.create({
  spece: {
    padding: 20,
  },
});
