import React, {useState} from 'react';
import {StyleSheet, Text, View, Image, SafeAreaView} from 'react-native';
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
      <SafeAreaView style={styles.safeview}>
        <ScrollView>
          <StyledTitle>{'Multiclassing'}</StyledTitle>
          <View style={styles.container}>
            <View
              style={{
                width: 200,
                height: 200,
              }}>
              <Image
                source={require('@assets/multiclassing.png')} // Sostituisci con il percorso corretto
                style={{width: '100%', height: '100%', borderRadius: 60}} // Stili per l'immagine per farla adattare alla View
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

          <Multiclassing input={classState} />
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
