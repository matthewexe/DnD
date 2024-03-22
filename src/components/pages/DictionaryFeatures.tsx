import React, {useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {SelectMenu} from '../SelectMenu';
import {useGetEndpointResourceQuery} from '../../services/api';
import {FeaturesRequest} from '../../types/requests';
import StyledTitle from '../ui/texts/StyledTitle';
import {SafeAreaView} from 'react-native-safe-area-context';
import FeaturesComponent from '../dictionary/Features';

export const DictionaryFeatures = () => {
  const {data: classData, isLoading: isLoadingClass} =
    useGetEndpointResourceQuery('features');

  const [featureState, setFeature] =
    useState<FeaturesRequest>('action-surge-1-use');

  if (isLoadingClass) {
    return <Text>Loading...</Text>;
  }
  return (
    <>
      <SafeAreaView style={styles.safeview}>
        <StyledTitle>Features</StyledTitle>
        <View style={styles.container}>
          <SelectMenu
            label=""
            onSelect={item => {
              setFeature(item.index);
            }}
            data={classData?.results ?? []}
          />
        </View>
        <ScrollView>
          <View style={styles.container}>
            <FeaturesComponent input={featureState} />
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
