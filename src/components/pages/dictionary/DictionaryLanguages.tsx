import React, {useState} from 'react';
import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {SelectMenu} from '../../ui/SelectMenu';
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
      <SafeAreaView style={styles.safeview}>
        <ScrollView>
          <StyledTitle>{'Languages'}</StyledTitle>
          <View style={styles.container}>
            <View
              style={{
                width: 200,
                height: 200,
                borderRadius: 1000,
              }}>
              <Image
                source={require('@assets/languages.png')} // Sostituisci con il percorso corretto
                style={{width: '100%', height: '100%', borderRadius: 1000}} // Stili per l'immagine per farla adattare alla View
              />
            </View>
            <SelectMenu
              label=""
              onSelect={item => {
                setLanguages(item.index);
              }}
              data={classData?.results ?? []}
            />
          </View>

          <LanguagesComponent input={languagesState} />
        </ScrollView>
      </SafeAreaView>
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
  safeview: {
    bottom: 10,
  },
});
