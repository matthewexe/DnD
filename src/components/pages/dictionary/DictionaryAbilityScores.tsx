import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {SelectMenu} from '../../SelectMenu';
import {useGetEndpointResourceQuery} from '../../../services/api';
import {AbilityScoreRequest} from '../../../types/requests';
import StyledTitle from '../../ui/texts/StyledTitle';
import AbilityScoresComponent from '../../dictionary/AbilityScores';
import {ScrollView} from 'react-native-gesture-handler';

export const DictionaryAbilityScores = () => {
  const {data: classData, isLoading: isLoadingClass} =
    useGetEndpointResourceQuery('ability-scores');

  const [abilityScoresState, setAbilityScores] =
    useState<AbilityScoreRequest>('cha');

  if (isLoadingClass) {
    return <Text>Loading...</Text>;
  }
  return (
    <>
      <StyledTitle>{'Ability Scores'}</StyledTitle>
      <View style={styles.container}>
        <SelectMenu
          label=""
          onSelect={item => {
            setAbilityScores(item.index);
          }}
          data={classData?.results ?? []}
        />
      </View>
      <ScrollView>
        <AbilityScoresComponent input={abilityScoresState} />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  rowStyle: {
    flexDirection: 'row',
  },
  container: {
    alignSelf: 'center',
    padding: 30,
    flexDirection: 'column', // o 'column' per bottoni verticali
    justifyContent: 'space-between', // Distribuisce uniformemente lo spazio
  },
  button: {
    margin: 10, // Distanzia i bottoni l'uno dall'altro
  },
});
