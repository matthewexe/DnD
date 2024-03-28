import React, {useState} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {SelectMenu} from '../../ui/SelectMenu';
import {useGetEndpointResourceQuery} from '../../../services/api';
import {MagicSchoolRequest} from '../../../types/requests';
import StyledTitle from '../../ui/texts/StyledTitle';
import {ScrollView} from 'react-native-gesture-handler';
import MagicSchoolComponent from '../../dictionary/MagicSchool';

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
        <View
          style={{
            width: 200,
            height: 200,
            borderRadius: 1000,
          }}>
          <Image
            source={require('@assets/MagicSchool.png')} // Sostituisci con il percorso corretto
            style={{width: '100%', height: '100%', borderRadius: 1000}} // Stili per l'immagine per farla adattare alla View
          />
        </View>
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
    alignItems: 'center',
    padding: 30,
    flexDirection: 'column', // o 'column' per bottoni verticali
    justifyContent: 'space-between', // Distribuisce uniformemente lo spazio
  },
  button: {
    margin: 10, // Distanzia i bottoni l'uno dall'altro
  },
});
