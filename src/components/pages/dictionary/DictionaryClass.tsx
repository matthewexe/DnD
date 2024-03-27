import React, {useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {SelectMenu} from '../../SelectMenu';
import {useGetEndpointResourceQuery} from '../../../services/api';
import {ClassIndexRequest} from '../../../types/requests';
import ClassComponent from '../../class/ClassByIndex';
import StyledTitle from '../../ui/texts/StyledTitle';
import {SafeAreaView} from 'react-native-safe-area-context';

export const DictionaryClass = () => {
  const {data: classData, isLoading: isLoadingClass} =
    useGetEndpointResourceQuery('classes');

  const [classState, setClass] = useState<ClassIndexRequest>('barbarian');

  if (isLoadingClass) {
    return <Text>Loading...</Text>;
  }
  return (
    <>
      <SafeAreaView style={styles.safeview}>
        <StyledTitle>Character Class</StyledTitle>
        <View style={styles.container}>
          <SelectMenu
            label=""
            onSelect={item => {
              setClass(item.index);
            }}
            data={classData?.results ?? []}
          />
        </View>
        <ScrollView>
          <View style={styles.container}>
            <ClassComponent input={classState} />
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
