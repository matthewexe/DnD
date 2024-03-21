/* eslint-disable prettier/prettier */
/* eslint-disable react/self-closing-comp */
// import {useTheme} from '@react-navigation/native';
import React from 'react';
import { SafeAreaView, Text } from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome6';
import { GameCard } from '../GameCard';
import { HomeStackScreenProps } from '../../routes/HomeParamList';

import { StyledButton } from '../ui/StyledButton';
import { StyledText } from '../ui/texts/StyledText';
import { StyledCheckBox } from '../ui/StyledCheckBox';
import { StyledTitle } from '../ui/texts/StyledTitle';
import { StyledLabeledValue } from '../ui/texts/StyledLabeledValue';
import { useState } from 'react';
import { StyledAccordion } from '../ui/StyledAccordion';
import { StyledModal } from '../ui/StyledModal';
import Modal from 'react-native-modal';
import { Loading } from './Loading';

type Props = HomeStackScreenProps<'ListGame'>;

export const Home = (props: Props) => {
  const [choice, setChoice] = useState(false);
  const [showModal, setShowModal] = useState(false);
  return (
    <SafeAreaView>
      <StyledTitle children={'Home'} />
      <StyledCheckBox


        onChange={() => setChoice(current => !current)} text={''} />

      <GameCard gameId="1" {...props} />
      <Text />
      <StyledLabeledValue
        label={'  Nome figo di qualcosa'}
        value={
          'ciaociao Questa è una descrizione fatta apposta perchè non so che cazzo devo scrivere e quando avremo trovato cosa scrivere sarà tolta. Nel mentre considerata come schiavetto per capire quanto cazzo può occupare una descrizione tipo, tra tutti quei papiri che sto gioco ci propone molto caltamente '
        }
      />
      <Text />
      <StyledText>Testo prova font</StyledText>
      <StyledButton
        text={
          //mi da errore però scrive lo stesso
          'Inizia'
          // <StyledText children={'Inizia a creare >>'}></StyledText>
        }
        onPress={() => {
          setShowModal(!showModal)
        }}

      />
      <StyledModal isVisible={showModal}><Loading /></StyledModal>
      {/* <StyledAccordion /> */}
    </SafeAreaView>
  );
};
