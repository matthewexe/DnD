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
            icon={require('@assets/ability.png')}
            style={{marginVertical: 5}}
            onPress={() => {
              navigation.navigate('AbilityScoresD');
            }}
          />
          <DictionaryButton
            text="Alignaments"
            icon={require('@assets/alignament.png')}
            style={{marginVertical: 5}}
            onPress={() => {
              navigation.navigate('AlignamentD');
            }}
          />
          <DictionaryButton
            text="Armors"
            icon={require('@assets/armors.png')}
            onPress={() => {
              navigation.navigate('ArmorD');
            }}
          />
          <DictionaryButton
            text="Class"
            icon={require('@assets/class_logo.png')}
            onPress={() => {
              navigation.navigate('ClassD');
            }}
          />
          <DictionaryButton
            text="Class Levels"
            icon={require('@assets/class_logo.png')}
            onPress={() => {
              navigation.navigate('ClassLevelsD');
            }}
          />
          <DictionaryButton
            text="Conditions"
            icon={require('@assets/conditions.png')}
            onPress={() => {
              navigation.navigate('ConditionD');
            }}
          />
          <DictionaryButton
            text="Damage Types"
            icon={require('@assets/damage_types.png')}
            onPress={() => {
              navigation.navigate('DamegeTypeD');
            }}
          />
          <DictionaryButton
            text="Features"
            icon={require('@assets/features.png')}
            onPress={() => {
              navigation.navigate('FeaturesD');
            }}
          />

          <DictionaryButton
            text="Languages"
            icon={require('@assets/languages.png')}
            onPress={() => {
              navigation.navigate('LanguagesD');
            }}
          />

          <DictionaryButton
            text="Magic Schools"
            icon={require('@assets/magic_school.png')}
            onPress={() => {
              navigation.navigate('MagicSchoolD');
            }}
          />

          <DictionaryButton
            text="Monsters"
            icon={require('@assets/monsters.png')}
            onPress={() => {
              navigation.navigate('MonstersD');
            }}
          />

          <DictionaryButton
            text="Multiclassing"
            icon={require('@assets/multiclassing.png')}
            onPress={() => {
              navigation.navigate('MulticlassingD');
            }}
          />

          <DictionaryButton
            text="Races"
            icon={require('@assets/races.png')}
            onPress={() => {
              navigation.navigate('RaceD');
            }}
          />

          <DictionaryButton
            text="Spells"
            icon={require('@assets/spells.png')}
            onPress={() => {
              navigation.navigate('SpellD');
            }}
          />

          <DictionaryButton
            text="Subclasses"
            icon={require('@assets/subclass.png')}
            onPress={() => {
              navigation.navigate('SubclassD');
            }}
          />

          <DictionaryButton
            text="Subraces"
            icon={require('@assets/subraces.png')}
            onPress={() => {
              navigation.navigate('SubraceD');
            }}
          />

          <DictionaryButton
            text="Weapons"
            icon={require('@assets/weapons.png')}
            onPress={() => {
              navigation.navigate('WeaponD');
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
