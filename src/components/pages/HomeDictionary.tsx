import {View, Text, StyleSheet, Button} from 'react-native';
import {DictionaryStackScreenProps} from '../../routes/DictionaryStack';
import {DictionaryButton} from '../ui/buttons/DictionaryButton';
import StyledTitle from '../ui/texts/StyledTitle';
import {PrimaryText} from '../ui/texts/PrimaryText';
import {ScrollView} from 'react-native-gesture-handler';

const AlignImage = require('../../assets');

type Props = DictionaryStackScreenProps<'Dictionary'>;

export const HomeDictionary = ({navigation, route}: Props) => {
  const params = route.params;

  return (
    <>
      <ScrollView>
        <StyledTitle>Dictionary</StyledTitle>
        <PrimaryText>Select your topic:</PrimaryText>
        <View style={styles.container}>
          <DictionaryButton
            text="Ability Scores"
            style={{marginVertical: 5}}
            onPress={() => {
              navigation.navigate('AbilityScoresD');
            }}
          />
          <DictionaryButton
            text="Alignaments"
            icon={require('../../assets/Alignament.png')}
            style={{marginVertical: 5}}
            onPress={() => {
              navigation.navigate('AlignamentD');
            }}
          />
          <DictionaryButton
            text="Class"
            icon={require('../../assets/Class.png')}
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
            onPress={() => {
              navigation.navigate('ConditionD');
            }}
          />
          <DictionaryButton
            text="Damage Types"
            icon={require('/home/mattia/Documenti/DnD/src/assets/DamageTypes.png')}
            onPress={() => {
              navigation.navigate('DamegeTypeD');
            }}
          />
          <DictionaryButton
            text="Features"
            onPress={() => {
              navigation.navigate('FeaturesD');
            }}
          />
          <DictionaryButton
            text="Magic Schools"
            onPress={() => {
              navigation.navigate('MagicSchoolD');
            }}
          />
          <DictionaryButton
            text="Languages"
            onPress={() => {
              navigation.navigate('LanguagesD');
            }}
          />
          <DictionaryButton
            text="Monsters"
            onPress={() => {
              navigation.navigate('MonstersD');
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
