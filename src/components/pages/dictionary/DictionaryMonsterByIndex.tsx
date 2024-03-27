import React, {useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {SelectMenu} from '../../ui/SelectMenu';
import StyledTitle from '../../ui/texts/StyledTitle';
import {SafeAreaView} from 'react-native-safe-area-context';
import {MonsterRequest} from '../../../types/requests';
import {useGetEndpointResourceQuery} from '../../../services/api';
import MonsterComponent from '../../dictionary/Monsters';

export const DictionaryMonsterByIndex = () => {
  const {data: classData} = useGetEndpointResourceQuery('monsters');
  const [indexState, setIndex] = useState<MonsterRequest>('aboleth');

  return (
    <>
      <SafeAreaView style={styles.safeview}>
        <ScrollView>
          <StyledTitle>Monsters By Names</StyledTitle>
          <View style={styles.container}>
            <SelectMenu
              label=""
              onSelect={item => {
                setIndex(item.index);
              }}
              data={classData?.results ?? []}
            />
          </View>

          <View style={styles.container}>
            <MonsterComponent input={indexState} />
          </View>
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
