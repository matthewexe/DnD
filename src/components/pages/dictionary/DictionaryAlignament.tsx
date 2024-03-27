import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {SelectMenu} from '../../SelectMenu';
import {useGetEndpointResourceQuery} from '../../../services/api';
import {AlignmentRequest} from '../../../types/requests';

import SpellAvailableByClassComponent from '../../firstPage/Alignament';
import Alignament from '../../firstPage/Alignament';
import {StyledSubtitle} from '../../ui/texts/StyledSubtitle';
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
    padding: 30,
    flexDirection: 'column', // o 'column' per bottoni verticali
    justifyContent: 'space-between', // Distribuisce uniformemente lo spazio
  },
  button: {
    margin: 10, // Distanzia i bottoni l'uno dall'altro
  },
});
