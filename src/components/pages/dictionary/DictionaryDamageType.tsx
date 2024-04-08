import React, {useState} from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import {SelectMenu} from '../../ui/SelectMenu';
import {useGetEndpointResourceQuery} from '../../../services/api';
import {DamageTypeRequest} from '../../../types/requests';
import StyledTitle from '../../ui/texts/StyledTitle';
import {SafeAreaView} from 'react-native-safe-area-context';
import DamageTypeComponent from '../../dictionary/DamageType';

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
        <ScrollView>
          <StyledTitle>Damage Types</StyledTitle>
          <View style={styles.container}>
            <View
              style={{
                width: 200,
                height: 200,
              }}>
              <Image
                source={require('@assets/DamageTypes.png')} // Sostituisci con il percorso corretto
                style={{width: '100%', height: '100%', borderRadius: 1000}} // Stili per l'immagine per farla adattare alla View
              />
            </View>
            <SelectMenu
              label=""
              onSelect={item => {
                setDamageType(item.index);
              }}
              data={classData?.results ?? []}
            />
          </View>
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
    alignItems: 'center',
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
