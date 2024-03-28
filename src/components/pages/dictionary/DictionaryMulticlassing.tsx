import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {SelectMenu} from '../../ui/SelectMenu';
import {useGetEndpointResourceQuery} from '../../../services/api';
import {ClassIndexRequest} from '../../../types/requests';
import StyledTitle from '../../ui/texts/StyledTitle';
import {ScrollView} from 'react-native-gesture-handler';
import Multiclassing from '../../dictionary/Multiclassing';

export const DictionaryMulticlassing = () => {
  const {data: classData, isLoading: isLoadingClass} =
    useGetEndpointResourceQuery('classes');

  const [classState, setClass] = useState<ClassIndexRequest>('barbarian');

  if (isLoadingClass) {
    return <Text>Loading...</Text>;
  }
  return (
    <>
      <StyledTitle>{'Multiclassing'}</StyledTitle>
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
        <Multiclassing input={classState} />
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
    padding: 30,
    flexDirection: 'column', // o 'column' per bottoni verticali
    justifyContent: 'space-between', // Distribuisce uniformemente lo spazio
  },
  button: {
    margin: 10, // Distanzia i bottoni l'uno dall'altro
  },
});
