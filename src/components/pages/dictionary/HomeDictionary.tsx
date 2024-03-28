import React from 'react';
import {View, StyleSheet} from 'react-native';
import {DictionaryStackScreenProps} from '../../../routes/DictionaryStack';
import {DictionaryButton} from '../../ui/buttons/DictionaryButton';
import StyledTitle from '../../ui/texts/StyledTitle';
import {PrimaryText} from '../../ui/texts/PrimaryText';
import {ScrollView} from 'react-native-gesture-handler';

type Props = DictionaryStackScreenProps<'Dictionary'>;

export const HomeDictionary = ({navigation}: Props) => {
  return (
    <>
      <ScrollView>
        <StyledTitle>Dictionary</StyledTitle>
        <PrimaryText>Select your topic:</PrimaryText>
        <View style={styles.container}>
          <DictionaryButton
            text="Ability Scores"
            icon={require('@assets/Ability.png')}
            style={{marginVertical: 5}}
            onPress={() => {
              navigation.navigate('AbilityScoresD');
            }}
          />
          <DictionaryButton
            text="Alignaments"
            icon={require('@assets/Alignament.png')}
            style={{marginVertical: 5}}
            onPress={() => {
              navigation.navigate('AlignamentD');
            }}
          />
          <DictionaryButton
            text="Class"
            icon={require('@assets/Class.png')}
            onPress={() => {
              navigation.navigate('ClassD');
            }}
          />
          <DictionaryButton
            text="Class Levels"
            onPress={() => {
              navigation.navigate('ClassLevelsD');
            }}
          />
          <DictionaryButton
            text="Conditions"
            icon={require('@assets/Conditions.png')}
            onPress={() => {
              navigation.navigate('ConditionD');
            }}
          />
          <DictionaryButton
            text="Damage Types"
            icon={require('@assets/DamageTypes.png')}
            onPress={() => {
              navigation.navigate('DamegeTypeD');
            }}
          />
          <DictionaryButton
            text="Features"
            icon={require('@assets/Features.png')}
            onPress={() => {
              navigation.navigate('FeaturesD');
            }}
          />

          <DictionaryButton
            text="Languages"
            icon={require('@assets/Languages.png')}
            onPress={() => {
              navigation.navigate('LanguagesD');
            }}
          />

          <DictionaryButton
            text="Magic Schools"
            icon={require('@assets/MagicSchool.png')}
            onPress={() => {
              navigation.navigate('MagicSchoolD');
            }}
          />

          <DictionaryButton
            text="Monsters"
            icon={require('@assets/Monsters.png')}
            onPress={() => {
              navigation.navigate('MonstersD');
            }}
          />

          <DictionaryButton
            text="Multiclassing"
            // icon={require('../../assets/Languages.png')}
            onPress={() => {
              navigation.navigate('MulticlassingD');
            }}
          />
        </View>
      </ScrollView>
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
});
