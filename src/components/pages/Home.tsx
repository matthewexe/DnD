/* eslint-disable react/jsx-no-undef */
/* eslint-disable prettier/prettier */
/* eslint-disable react/self-closing-comp */
// import {useTheme} from '@react-navigation/native';
import React from 'react';
import {SafeAreaView, Text} from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome6';
import {GameCard} from '../GameCard';

import {StyledButton} from '../ui/StyledButton';
import {StyledCheckBox} from '../ui/StyledCheckBox';
import {StyledTitle} from '../ui/texts/StyledTitle';
import {StyledLabeledValue} from '../ui/texts/StyledLabeledValue';
import {useState} from 'react';
import {StyledModal} from '../ui/StyledModal';
import {Loading} from './Loading';
import {Error} from './Error';
import {Success} from './Success';
import {HomeScreenProps} from '../../routes/HomeProps';

type Props = HomeScreenProps<'ListGame'>;

export const Home = (props: Props) => {
  const [choice, setChoice] = useState(false);
  const [showModal, setShowModal] = useState(false);
  return (
    <SafeAreaView>
      <StyledTitle children={'Home'} />
      <StyledCheckBox
        onChange={() => setChoice(current => !current)}
        text={''}
      />

      <GameCard gameId="1" {...props} />
      <Text />
      <StyledLabeledValue
        label={'Nome figo di qualcosa'}
        value={
          'ciaociao Questa è una descrizione fatta apposta perchè non so che cazzo devo scrivere e quando avremo trovato cosa scrivere sarà tolta. Nel mentre considerata come schiavetto per capire quanto cazzo può occupare una descrizione tipo, tra tutti quei papiri che sto gioco ci propone molto caltamente '
        }
      />
      <Text />
      {/* <StyledText>Testo prova font</StyledText> */}
      <StyledButton
        text={'Inizia'}
        onPress={() => {
          props.navigation.navigate('NewGame');
          // setShowModal(!showModal);
        }}
      />
      <Text />
      <StyledModal isVisible={showModal}>
        <Success
          message={'Game Created successfully!'}
          onPress={() => {
            setShowModal(false);
          }}
        />
      </StyledModal>
    </SafeAreaView>
  );
};
