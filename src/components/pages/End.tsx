import React, {useState} from 'react';
import {Text, View} from 'react-native';
import StyledTitle from '../ui/texts/StyledTitle';
import {StyledSubtitle} from '../ui/texts/StyledSubtitle';
import {StyledButton} from '../ui/StyledButton';

export const End = ({navigation}) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <View>
        <StyledTitle>Summary</StyledTitle>
        <StyledSubtitle>Prima pagina compilata</StyledSubtitle>
        <Text>bla bla bla</Text>
        <StyledSubtitle>Seconda pagina compilata</StyledSubtitle>

        <StyledSubtitle>Terza pagina compilata</StyledSubtitle>

        <StyledSubtitle>Quarta pagina compilata</StyledSubtitle>
      </View>
      <View>
        <StyledButton
          text={'Annulla'}
          onPress={() => {
            /*torna alla basic info */ setShowModal(!showModal);
          }}
        />
      </View>
    </>
  );
};
