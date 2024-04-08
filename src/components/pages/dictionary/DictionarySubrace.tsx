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
import {SubraceIndexRequest} from '../../../types/requests';
import StyledTitle from '../../ui/texts/StyledTitle';
import {SelectMenu} from '../../ui/SelectMenu';
import Subrace from '../../dictionary/race/Subrace';

export const DictionarySubrace = () => {
  const {data: classData, isLoading: isLoadingClass} =
    useGetEndpointResourceQuery('subraces');

  const [subraceState, setSubrace] = useState<SubraceIndexRequest>('high-elf');

  if (isLoadingClass) {
    return <Text>Loading...</Text>;
  }
  return (
    <SafeAreaView style={styles.safeview}>
      <ScrollView>
        <StyledTitle>Subraces</StyledTitle>
        <View style={styles.container}>
          <View
            style={{
              width: 200,
              height: 200,
              borderRadius: 1000,
            }}>
            <Image
              source={require('@assets/Subraces.png')}
              style={{width: '100%', height: '100%', borderRadius: 1000}}
            />
          </View>
          <SelectMenu
            label=""
            onSelect={item => {
              setSubrace(item.index);
            }}
            data={classData?.results ?? []}
          />
        </View>

        <View style={styles.main}>
          <Subrace input={subraceState} />
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
