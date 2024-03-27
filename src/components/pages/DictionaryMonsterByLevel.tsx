import React, {useState} from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import {DictionaryButton} from '../ui/buttons/DictionaryButton';
import StyledTitle from '../ui/texts/StyledTitle';
import {DescriptionText} from '../ui/texts/DescriptionText';
import {MonsterLevelButton} from '../ui/buttons/MonsterLevelButton';
import MonsterByLevel from '../dictionary/MonsterByLevel';

export const DictionaryMonsterByLevel = () => {
  // I valori disponibili per lo slider.
  const values = [
    '0',
    '(1 / 8)',
    '(1 / 4)',
    '(1 / 2)',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    '11',
    '12',
    '13',
    '14',
    '15',
    '16',
    '17',
    '18',
    '19',
    '20',
  ];
  const output = [
    0,
    1 / 8,
    1 / 4,
    1 / 2,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
  ];

  // Stati per start ed end.

  // Indice attuale per navigare nell'array 'values'.
  const [range, setRange] = useState<number[]>();
  const [currentIndexStart, setStartIndex] = useState(0);
  const [currentIndexEnd, setEndIndex] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const handleStart = () => {
    setSubmitted(false);
    // Incrementa il valore di start, assicurandosi di non superare la lunghezza di 'values'.
    const nextIndex =
      currentIndexStart + 1 < values.length
        ? currentIndexStart + 1
        : currentIndexStart;

    setStartIndex(nextIndex);

    // Aggiorna end se necessario.
    if (currentIndexEnd <= currentIndexStart) {
      setEndIndex(nextIndex);
    }
  };

  const handleSubtractStart = () => {
    // Incrementa il valore di start, assicurandosi di non superare la lunghezza di 'values'.
    setSubmitted(false);
    const nextIndex =
      currentIndexStart - 1 < 0 ? currentIndexStart : currentIndexStart - 1;
    setStartIndex(nextIndex);
  };

  const handleEnd = () => {
    setSubmitted(false);
    const nextIndex =
      currentIndexEnd + 1 < values.length
        ? currentIndexEnd + 1
        : currentIndexEnd;
    setEndIndex(nextIndex);
  };

  const handleSubtractEnd = () => {
    // Incrementa il valore di start, assicurandosi di non superare la lunghezza di 'values'.
    setSubmitted(false);
    const nextIndex =
      currentIndexEnd - 1 < 0 ? currentIndexEnd : currentIndexEnd - 1;
    setEndIndex(nextIndex);

    // Aggiorna end se necessario.
    if (currentIndexEnd <= currentIndexStart) {
      setStartIndex(nextIndex);
    }
  };
  const handleSubmit = () => {
    // Creazione di un array da start a end e preparazione per la query.
    const startIndex = currentIndexStart;
    const endIndex = currentIndexEnd;
    setRange(output.slice(startIndex, endIndex + 1));
    setSubmitted(true);
    // Qui inserire la logica per la query con l'array 'range'.
  };

  return (
    <SafeAreaView style={styles.safeview}>
      <ScrollView>
        <StyledTitle>Monsters by Levels</StyledTitle>

        <View style={styles.container}>
          <View style={styles.buttonbox}>
            <DescriptionText>
              Start lv: {values[currentIndexStart]}
              {'\t\t'}
            </DescriptionText>

            <MonsterLevelButton
              text="+"
              // icon={require('/home/mattia/Documenti/DnD/src/assets/Class.png')}
              onPress={handleStart}
            />
            <MonsterLevelButton
              text="-"
              // icon={require('/home/mattia/Documenti/DnD/src/assets/Class.png')}
              onPress={handleSubtractStart}
            />
          </View>
          <View style={styles.buttonbox}>
            <DescriptionText>
              End lv: {values[currentIndexEnd]}
              {'\t\t'}
            </DescriptionText>
            <MonsterLevelButton
              text="+"
              // icon={require('/home/mattia/Documenti/DnD/src/assets/Class.png')}
              onPress={handleEnd}
            />
            <MonsterLevelButton
              text="-"
              // icon={require('/home/mattia/Documenti/DnD/src/assets/Class.png')}
              onPress={handleSubtractEnd}
            />
          </View>
          <View style={styles.buttonbox}>
            <DictionaryButton
              text="Submit"
              // icon={require('/home/mattia/Documenti/DnD/src/assets/Class.png')}
              onPress={handleSubmit}
            />
          </View>
          {submitted && <MonsterByLevel input={range ?? []} />}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    padding: 20,
    flexDirection: 'column', // o 'column' per bottoni verticali
    justifyContent: 'space-between', // Distribuisce uniformemente lo spazio
  },
  buttonbox: {
    alignSelf: 'center',
    padding: 20,
    flexDirection: 'row', // o 'column' per bottoni verticali
    justifyContent: 'space-between', // Distribuisce uniformemente lo spazio
  },
  safeview: {
    bottom: 10,
  },
  spece: {
    padding: 20,
  },
});
