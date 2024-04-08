import React, {useState} from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {useGetEndpointResourceQuery} from '../../../services/api';
import {Subclasstypes} from '../../../types/requests';
import StyledTitle from '../../ui/texts/StyledTitle';
import {SelectMenu} from '../../ui/SelectMenu';
import Subclass from '../../../components/dictionary/SubClass/Subclass';

export const DictionarySubclass = () => {
  const {data: classData, isLoading: isLoadingClass} =
    useGetEndpointResourceQuery('subclasses');

  const [subclassState, setSubclass] = useState<Subclasstypes>('berserker');

  if (isLoadingClass) {
    return <Text>Loading...</Text>;
  }
  return (
    <SafeAreaView style={styles.safeview}>
      <ScrollView>
        <StyledTitle>Subclasses</StyledTitle>
        <View style={styles.container}>
          <View
            style={{
              width: 200,
              height: 200,
              borderRadius: 1000,
            }}>
            <Image
              source={require('@assets/subclass.png')} // Sostituisci con il percorso corretto
              style={{width: '100%', height: '100%', borderRadius: 1000}} // Stili per l'immagine per farla adattare alla View
            />
          </View>
          <SelectMenu
            label=""
            onSelect={item => {
              setSubclass(item.index);
            }}
            data={classData?.results ?? []}
          />
        </View>

        <View style={styles.main}>
          <Subclass input={subclassState} />
        </View>
      </ScrollView>
    </SafeAreaView>
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
  main: {
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
