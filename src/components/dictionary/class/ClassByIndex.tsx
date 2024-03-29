import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import FeaturesByClassComponent from './FeaturesByClass';
import ProficiencyByClassComponent from './ProficiencyD';
import {useGetClassByIndexQuery} from '../../../services/api';
import {ClassIndexRequest} from '../../../types/requests';
import {StyledSubtitle} from '../../ui/texts/StyledSubtitle';
import {StyledText} from '../../ui/texts/StyledText';
import {StyledLabeledValue} from '../../ui/texts/StyledLabeledValue';
import {Proficiency} from './Proficiency';

type Props = {
  input: ClassIndexRequest;
};

export default function ClassByIndex({input}: Props) {
  const {data, error, isLoading, isFetching} = useGetClassByIndexQuery({
    index: input,
  });

  if (error) return <Text>error in fetching</Text>;
  if (isLoading) return <Text>loading...</Text>;
  if (isFetching) <Text>attendi risposta dal server</Text>;
  return (
    <>
      <View>
        <StyledLabeledValue
          label="Name"
          value={data?.name ?? 'classe non disponibile'}
        />
        <StyledLabeledValue
          label={'Hit Die'}
          value={'D' + data?.hit_die.toString() ?? 'mancante'}
        />
        <View style={styles.space} />
        <StyledSubtitle>Base Abilities</StyledSubtitle>
        {data?.proficiencies?.map((choice, index) => (
          <StyledText key={index}>- {choice.name}</StyledText>
        ))}
        <View style={styles.space} />
        <StyledSubtitle>Abilities</StyledSubtitle>

        {data?.proficiency_choices?.map(choice => (
          <View>
            <View style={styles.space} />
            <StyledText>You can choose {choice.choose} abilities:</StyledText>
            <View style={styles.space} />
            {/* <StyledText>{choice.desc}</StyledText> */}
            {choice.from.options.map(option => (
              <Proficiency input={option} />
            ))}
          </View>
        ))}
        <View style={styles.space} />
        <StyledSubtitle>Saving throws</StyledSubtitle>
        {data?.saving_throws?.map((choice, index) => (
          <StyledText key={index}>{choice.name}</StyledText>
        ))}

        <View style={styles.space} />
        <FeaturesByClassComponent input={input} />
        <View style={styles.space} />
        <ProficiencyByClassComponent input={input} />
        <View style={styles.space} />

        <StyledSubtitle>Starting equipment</StyledSubtitle>
        {data?.starting_equipment?.map((choice, index) => (
          <StyledText key={index}>
            - {choice.equipment.name} {'('}
            {choice.quantity}
            {')'}
          </StyledText>
        ))}
        {/*<Text>Scegli ulteriore equipaggiamento:</Text>
  {data?.starting_equipment_options?.map((choice, index) => (
    <EquipmentOptionComponent choice={choice} />
  ))} */}
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    alignItems: 'center',
    padding: 30,
    flexDirection: 'column', // o 'column' per bottoni verticali
    justifyContent: 'space-between', // Distribuisce uniformemente lo spazio
  },
  space: {
    padding: 20, // Distanzia i bottoni l'uno dall'altro
  },
  safeview: {
    bottom: 10,
  },
});
