import React, {useState} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {SelectMenu} from '../../ui/SelectMenu';
import {useGetEndpointResourceQuery} from '../../../services/api';
import {AlignmentRequest} from '../../../types/requests';
import Alignament from '../firstPage/Alignament';
import StyledTitle from '../../ui/texts/StyledTitle';

export const DictionaryAlignament = () => {
  const {data: classData, isLoading: isLoadingClass} =
    useGetEndpointResourceQuery('alignments');

  const [alignamentState, setAlignament] =
    useState<AlignmentRequest>('neutral');

  if (isLoadingClass) {
    return <Text>Loading...</Text>;
  }
  return (
    <>
      <StyledTitle>{'Alignament'}</StyledTitle>
      <View style={styles.container}>
        <View
          style={{
            width: 200,
            height: 200,
          }}>
          <Image
            source={require('@assets/Alignament.png')} // Sostituisci con il percorso corretto
            style={{width: '100%', height: '100%', borderRadius: 1000}} // Stili per l'immagine per farla adattare alla View
          />
        </View>
        <SelectMenu
          label=""
          onSelect={item => {
            setAlignament(item.index);
          }}
          data={classData?.results ?? []}
        />
      </View>
      <View style={styles.container}>
        <Alignament input={alignamentState} />
      </View>
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
