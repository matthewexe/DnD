import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {SelectMenu} from '../SelectMenu';
import {useGetEndpointResourceQuery} from '../../services/api';
import {AlignmentRequest} from '../../types/requests';

import SpellAvailableByClassComponent from '../firstPage/Alignament';

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
      <SelectMenu
        label="Alignament"
        onSelect={item => {
          setAlignament(item.index);
        }}
        data={classData?.results ?? []}
      />
      <View style={styles.container}>
        <SpellAvailableByClassComponent input={alignamentState} />
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
    padding: 30,
    flexDirection: 'column', // o 'column' per bottoni verticali
    justifyContent: 'space-between', // Distribuisce uniformemente lo spazio
  },
  button: {
    margin: 10, // Distanzia i bottoni l'uno dall'altro
  },
});
