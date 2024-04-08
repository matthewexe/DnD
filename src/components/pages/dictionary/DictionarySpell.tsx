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
import {SpellRequest} from '../../../types/requests';
import StyledTitle from '../../ui/texts/StyledTitle';
import {SelectMenu} from '../../ui/SelectMenu';
import Spell from '../../../components/dictionary/equipment/Spell';

export const DictionarySpell = () => {
  const {data: classData, isLoading: isLoadingClass} =
    useGetEndpointResourceQuery('spells');

  const [spellState, setSpell] = useState<SpellRequest>('acid-arrow');

  if (isLoadingClass) {
    return <Text>Loading...</Text>;
  }
  return (
    <SafeAreaView style={styles.safeview}>
      <ScrollView>
        <StyledTitle>Spells</StyledTitle>
        <View style={styles.container}>
          <View
            style={{
              width: 200,
              height: 200,
              borderRadius: 1000,
            }}>
            <Image
              source={require('@assets/spells.png')} // Sostituisci con il percorso corretto
              style={{width: '100%', height: '100%', borderRadius: 1000}} // Stili per l'immagine per farla adattare alla View
            />
          </View>
          <SelectMenu
            label=""
            onSelect={item => {
              setSpell(item.index);
            }}
            data={classData?.results ?? []}
          />
        </View>

        <View style={styles.main}>
          <Spell input={spellState} />
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
