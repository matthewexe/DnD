import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {SelectMenu} from '../SelectMenu';
import {useGetEndpointResourceQuery} from '../../services/api';
import {
  AbilityScoreRequest,
  AlignmentRequest,
  LanguageRequest,
  MagicSchoolRequest,
} from '../../types/requests';
import StyledTitle from '../ui/texts/StyledTitle';
import AbilityScoresComponent from '../dictionary/AbilityScores';
import {ScrollView} from 'react-native-gesture-handler';
import LanguagesComponent from '../dictionary/Languages';
import MagicSchoolComponent from '../dictionary/MagicSchool';

export const DictionaryMagicSchool = () => {
  const {data: classData, isLoading: isLoadingClass} =
    useGetEndpointResourceQuery('magic-schools');

  const [magicSchoolState, setMagicSchool] =
    useState<MagicSchoolRequest>('abjuration');

  if (isLoadingClass) {
    return <Text>Loading...</Text>;
  }
  return (
    <>
      <StyledTitle>{'MagicSchools'}</StyledTitle>
      <View style={styles.container}>
        <SelectMenu
          label=""
          onSelect={item => {
            setMagicSchool(item.index);
          }}
          data={classData?.results ?? []}
        />
      </View>
      <ScrollView>
        <MagicSchoolComponent input={magicSchoolState} />
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
