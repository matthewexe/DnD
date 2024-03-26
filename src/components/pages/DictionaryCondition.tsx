import React, {useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {SelectMenu} from '../SelectMenu';
import {useGetEndpointResourceQuery} from '../../services/api';
import {ConditionRequest} from '../../types/requests';
import StyledTitle from '../ui/texts/StyledTitle';
import {SafeAreaView} from 'react-native-safe-area-context';
import ConditionComponent from '../dictionary/Condition';

export const DictionaryCondition = () => {
  const {data: classData, isLoading: isLoadingClass} =
    useGetEndpointResourceQuery('conditions');

  const [conditionState, setCondition] = useState<ConditionRequest>('blinded');

  if (isLoadingClass) {
    return <Text>Loading...</Text>;
  }
  return (
    <>
      <SafeAreaView style={styles.safeview}>
        <StyledTitle>Conditions</StyledTitle>
        <View style={styles.container}>
          <SelectMenu
            label=""
            onSelect={item => {
              setCondition(item.index);
            }}
            data={classData?.results ?? []}
          />
        </View>
        <ScrollView>
          <View style={styles.container}>
            <ConditionComponent input={conditionState} />
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