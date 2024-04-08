import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {DictionaryButton} from '../../ui/buttons/DictionaryButton';
import {DictionaryStackScreenProps} from '../../../routes/DictionaryStack';
import StyledTitle from '../../ui/texts/StyledTitle';

type Props = DictionaryStackScreenProps<'MonstersD'>;

export const DictionaryHomeMonsters = ({navigation}: Props) => {
  return (
    <>
      <StyledTitle>Monsters</StyledTitle>
      <View style={styles.container}>
        <View
          style={{
            width: 200,
            height: 200,
            borderRadius: 1000,
          }}>
          <Image
            source={require('@assets/Monsters.png')} // Sostituisci con il percorso corretto
            style={{width: '100%', height: '100%', borderRadius: 1000}} // Stili per l'immagine per farla adattare alla View
          />
        </View>
        <DictionaryButton
          text="Monster by name"
          icon={require('@assets/Monsters.png')}
          onPress={() => {
            navigation.navigate('MonsterDByName');
          }}
        />
        <DictionaryButton
          text="Monster by levels"
          icon={require('@assets/Monsters.png')}
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
    alignItems: 'center',
    padding: 25,
    flexDirection: 'column', // o 'column' per bottoni verticali
    justifyContent: 'center', // Distribuisce uniformemente lo spazio
    flex: 1,
  },
});
