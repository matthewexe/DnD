import React, {useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {SelectMenu} from '../SelectMenu';
import StyledTitle from '../ui/texts/StyledTitle';
import {SafeAreaView} from 'react-native-safe-area-context';
import FeaturesComponent from '../dictionary/Features';
import MonsterByLevel from '../dictionary/MonsterByLevel';

export const DictionaryFeatures = () => {
  const array: number[] = new Array<number>(24);
  const selection: string[] = new Array<string>(24);

  array[0] = 0;
  selection[0] = '0';
  array[1] = 1 / 8;
  selection[1] = '1/8';
  array[2] = 1 / 4;
  selection[2] = '1/4';
  array[3] = 1 / 2;
  selection[3] = '1/2';
  for (let i = 4; i < 24; i++) {
    array[i] = i - 3;
    selection[i] = array[i].toString();
  }
  const [startState, setStart] = useState<string>('');
  const [endState, setEnd] = useState<string>('');

  return (
    <>
      <SafeAreaView style={styles.safeview}>
        <StyledTitle>Monsters By Levels</StyledTitle>
        <View style={styles.container}>
          <SelectMenu
            label=""
            onSelect={item => {
              setStart(item);
            }}
            data={selection}
          />
        </View>
        <ScrollView>
          <View style={styles.container}>
            <MonsterByLevel input={[]} />
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
