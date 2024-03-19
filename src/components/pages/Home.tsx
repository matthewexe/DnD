/* eslint-disable react/self-closing-comp */
// import {useTheme} from '@react-navigation/native';
import React from 'react';
import {SafeAreaView, Text} from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome6';
import {GameCard} from '../GameCard';
import {HomeStackScreenProps} from '../../routes/HomeParamList';

import {StyledButton} from '../ui/buttons/StyledButton';
import {StyledButton2} from '../ui/buttons/StyledButton2';
import {StyledText} from '../ui/texts/StyledText';
import {StyledCheckBox} from '../ui/StyledCheckBox';
import {StyledTextInput} from '../ui/StyledTextInput';
import {StyledTitle} from '../ui/texts/StyledTitle';
import {StyledLabeledValue} from '../ui/texts/StyledLabeledValue';
import {useState} from 'react';

type Props = HomeStackScreenProps<'ListGame'>;

export const Home = (props: Props) => {
  const [choice, setChoice] = useState(false);
  return (
    <SafeAreaView>
      <StyledTitle children={'Home'} />
      <Text />
      <StyledCheckBox
        text="test"
        onChange={selection => setChoice(!selection)}
      />
      <Text />
      <GameCard gameId="1" {...props} />
      <Text />
      <StyledLabeledValue
        label={'  Nome figo di qualcosa'}
        value={
          'ciaociao Questa è una descrizione fatta apposta perchè non so che cazzo devo scrivere e quando avremo trovato cosa scrivere sarà tolta. Nel mentre considerata come schiavetto per capire quanto cazzo può occupare una descrizione tipo, tra tutti quei papiri che sto gioco ci propone molto caltamente '
        }
      />
      <Text />
      <StyledButton2
        text={
          //mi da errore però scrive lo stesso
          <StyledText
            children={'Inizia a creare il tuo personaggio >>'}></StyledText>
        }
        onPress={() => {
          {
            props.navigation.navigate('');
          }
        }}
      />
      <Text />
      <StyledCheckBox text="ciao" />
      <Text />
    </SafeAreaView>
  );
};
