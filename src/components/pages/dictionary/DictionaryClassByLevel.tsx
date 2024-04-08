import React, {useState} from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import {SelectMenu} from '../../ui/SelectMenu';
import {useGetEndpointResourceQuery} from '../../../services/api';
import {ClassIndexRequest} from '../../../types/requests';
import StyledTitle from '../../ui/texts/StyledTitle';
import {SafeAreaView} from 'react-native-safe-area-context';
import ResourseClassLevel from '../../../components/dictionary/class/ResourseClassLevel';
import {MonsterLevelButton} from '../../../components/ui/buttons/MonsterLevelButton';
import {DescriptionText} from '../../../components/ui/texts/DescriptionText';

export const DictionaryClassByLevel = () => {
  const {data: classData, isLoading: isLoadingClass} =
    useGetEndpointResourceQuery('classes');

  const [classState, setClass] = useState<ClassIndexRequest>('barbarian');

  const values = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];
  const [levelState, setLevelState] = useState(1);

  const handlePlus = () => {
    // Incrementa il valore di start, assicurandosi di non superare la lunghezza di 'values'.
    levelState + 1 < values.length
      ? setLevelState(prevCount => prevCount + 1)
      : setLevelState(prevCount => prevCount);
  };
  const handleSubtract = () => {
    // Incrementa il valore di start, assicurandosi di non superare la lunghezza di 'values'.
    levelState === 1
      ? setLevelState(prevCount => prevCount)
      : setLevelState(prevCount => prevCount - 1);
  };

  if (isLoadingClass) {
    return <Text>Loading...</Text>;
  }
  return (
    <>
      <SafeAreaView style={styles.safeview}>
        <ScrollView>
          <StyledTitle>Classes By Levels</StyledTitle>
          <View style={styles.container}>
            <View
              style={{
                width: 200,
                height: 200,
              }}>
              <Image
                source={require('@assets/class_logo.png')}
                style={{width: '100%', height: '100%', borderRadius: 1000}}
              />
            </View>
            <View style={styles.buttonbox}>
              <DescriptionText>
                Level: {values[levelState]}
                {'\t\t'}
              </DescriptionText>

              <MonsterLevelButton
                text="-"
                // icon={require('/home/mattia/documenti/dnd/src/assets/class_logo.png')}
                onPress={handleSubtract}
              />

              <MonsterLevelButton
                text="+"
                // icon={require('/home/mattia/documenti/dnd/src/assets/class_logo.png')}
                onPress={handlePlus}
              />
            </View>
            <SelectMenu
              label=""
              onSelect={item => {
                setClass(item.index);
              }}
              data={classData?.results ?? []}
            />
          </View>
          <View style={styles.total}>
            <ResourseClassLevel input={classState} level={levelState} />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    alignItems: 'center',
    padding: 30,
    flexDirection: 'column', // o 'column' per bottoni verticali
    justifyContent: 'space-between', // Distribuisce uniformemente lo spazio
  },
  total: {
    padding: 30,
    flexDirection: 'column', // o 'column' per bottoni verticali
    justifyContent: 'space-between', // Distribuisce uniformemente lo spazio
  },
  safeview: {
    bottom: 10,
  },
  buttonbox: {
    alignSelf: 'center',
    padding: 20,
    flexDirection: 'row', // o 'column' per bottoni verticali
    justifyContent: 'space-between', // Distribuisce uniformemente lo spazio
  },
});
