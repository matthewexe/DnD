import {View, Text, StyleSheet, Button} from 'react-native';
import {DictionaryStackScreenProps} from '../../routes/DictionaryStack';
import {InputText} from '../InputText';
import {SelectMenu} from '../SelectMenu';
import {StyledButton} from '../ui/buttons/StyledButton';
import {StyledSubtitle} from '../ui/texts/StyledSubtitle';
import {StyledText} from '../ui/texts/StyledText';
import {DictionaryButton} from '../ui/buttons/DictionaryButton';
import CustomButton from '../ui/buttons/CustomBotton';
import StyledTitle from '../ui/texts/StyledTitle';

type Props = DictionaryStackScreenProps<'Dictionary'>;

export const HomeDictionary = ({navigation, route}: Props) => {
  const params = route.params;

  return (
    <>
      <StyledTitle>Dictionary</StyledTitle>

      <Text>Select your topic:</Text>
      <View style={styles.container}>
        <DictionaryButton
          text="Alignaments"
          style={{marginVertical: 5}}
          onPress={() => {
            navigation.navigate('AlignamentD');
          }}
        />
        <DictionaryButton
          text="Class"
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
          text="DamageTypes"
          onPress={() => {
            navigation.navigate('DamegeTypeD');
          }}
        />
      </View>
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
