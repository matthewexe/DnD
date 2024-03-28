import React, {useState} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {SelectMenu} from '../../ui/SelectMenu';
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
      <ScrollView>
        <View style={styles.container}>
          <View
            style={{
              width: 200,
              height: 200,
            }}>
            <Image
              source={require('@assets/Ability.png')} // Sostituisci con il percorso corretto
              style={{width: '100%', height: '100%', borderRadius: 1000}} // Stili per l'immagine per farla adattare alla View
            />
            <SelectMenu
              label=""
              onSelect={item => {
                setAbilityScores(item.index);
              }}
              data={classData?.results ?? []}
            />
          </View>
          <SelectMenu
            label=""
            onSelect={item => {
              setAbilityScores(item.index);
            }}
            data={classData?.results ?? []}
          />
        </View>
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
    alignItems: 'center',
    padding: 30,
    flexDirection: 'column', // o 'column' per bottoni verticali
    justifyContent: 'space-between', // Distribuisce uniformemente lo spazio
  },
  button: {
    margin: 10, // Distanzia i bottoni l'uno dall'altro
  },
});
