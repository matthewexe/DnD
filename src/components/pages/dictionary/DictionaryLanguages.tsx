import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {SelectMenu} from '../../SelectMenu';
import {useGetEndpointResourceQuery} from '../../../services/api';
import {LanguageRequest} from '../../../types/requests';
import StyledTitle from '../../ui/texts/StyledTitle';
import {ScrollView} from 'react-native-gesture-handler';
import LanguagesComponent from '../../dictionary/Languages';

export const DictionaryLanguages = () => {
  const {data: classData, isLoading: isLoadingClass} =
    useGetEndpointResourceQuery('languages');

  const [languagesState, setLanguages] = useState<LanguageRequest>('common');

  if (isLoadingClass) {
    return <Text>Loading...</Text>;
  }
  return (
    <>
      <StyledTitle>{'Languages'}</StyledTitle>
      <View style={styles.container}>
        <SelectMenu
          label=""
          onSelect={item => {
            setLanguages(item.index);
          }}
          data={classData?.results ?? []}
        />
      </View>
      <ScrollView>
        <LanguagesComponent input={languagesState} />
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
