import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useGetEndpointResourceQuery} from '../../services/api';
import {DictionaryButton} from '../ui/buttons/DictionaryButton';
import {DictionaryStackScreenProps} from '../../routes/DictionaryStack';
import StyledTitle from '../ui/texts/StyledTitle';

type Props = DictionaryStackScreenProps<'MonstersD'>;

export const DictionaryHomeMonsters = ({navigation}: Props) => {
  return (
    <>
      <StyledTitle>Monsters</StyledTitle>
      <View style={styles.container}>
        <DictionaryButton
          text="Monster by name"
          icon={require('/home/mattia/Documenti/DnD/src/assets/Class.png')}
          onPress={() => {
            navigation.navigate('MonsterDByName');
          }}
        />
        <DictionaryButton
          text="Monster by levels"
          icon={require('/home/mattia/Documenti/DnD/src/assets/Class.png')}
          onPress={() => {
            navigation.navigate('MonsterDByRange');
          }}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    padding: 250,
    flexDirection: 'column', // o 'column' per bottoni verticali
    justifyContent: 'space-between', // Distribuisce uniformemente lo spazio
  },
});
