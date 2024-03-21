import React, {useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {SelectMenu} from '../SelectMenu';
import {useGetEndpointResourceQuery} from '../../services/api';
import {ConditionRequest, DamageTypeRequest} from '../../types/requests';
import StyledTitle from '../ui/texts/StyledTitle';
import {SafeAreaView} from 'react-native-safe-area-context';
import DamageTypeComponent from '../dictionary/DamageType';

export const DictionaryDamageType = () => {
  const {data: classData, isLoading: isLoadingClass} =
    useGetEndpointResourceQuery('damage-types');

  const [damageTypeState, setDamageType] = useState<DamageTypeRequest>('acid');

  if (isLoadingClass) {
    return <Text>Loading...</Text>;
  }
  return (
    <>
      <SafeAreaView style={styles.safeview}>
        <StyledTitle>Damage Types</StyledTitle>
        <View style={styles.container}>
          <SelectMenu
            label=""
            onSelect={item => {
              setDamageType(item.index);
            }}
            data={classData?.results ?? []}
          />
        </View>
        <ScrollView>
          <View style={styles.container}>
            <DamageTypeComponent input={damageTypeState} />
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
