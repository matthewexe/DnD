/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, View} from 'react-native';
import StyledTitle from '../ui/texts/StyledTitle';
import {StyledSubtitle} from '../ui/texts/StyledSubtitle';
import {StyledTextInput} from '../ui/StyledTextInput';
import {InputText} from '../ui/InputText';
import {HomeScreenProps} from '../../routes/HomeProps';

type Props = HomeScreenProps<'NewGame'>;

export const NewGame = ({props}: Props) => {
  return (
    <>
      <View>
        <StyledTitle>New Game</StyledTitle>
        <Text />
        <StyledSubtitle>Create a new game</StyledSubtitle>
        <Text />
        <InputText label={'Game Name'}></InputText>
        <InputText label={'Descrizione'}></InputText>
      </View>
    </>
  );
};
