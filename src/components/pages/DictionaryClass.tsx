import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {SelectMenu} from '../SelectMenu';
import {useGetEndpointResourceQuery} from '../../services/api';
import {ClassIndexRequest} from '../../types/requests';
import ClassComponent from '../class/ClassByIndex';

export const DictionaryClass = () => {
  const {data: classData, isLoading: isLoadingClass} =
    useGetEndpointResourceQuery('classes');

  const [classState, setClass] = useState<ClassIndexRequest>('barbarian');

  if (isLoadingClass) {
    return <Text>Loading...</Text>;
  }
  return (
    <>
      <SelectMenu
        label="Character Class"
        onSelect={item => {
          setClass(item.index);
        }}
        data={classData?.results ?? []}
      />
      <View style={styles.container}>
        <ClassComponent input={classState} />
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
