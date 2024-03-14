import {useTheme} from '@react-navigation/native';
import React from 'react';
import {SafeAreaView, Text, Button} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';
import {GameCard} from './GameCard';
import {HomeStackScreenProps} from '../routes/HomeParamList';

import {StyledButton} from './ui/StyledButton';
import {StyledText} from './ui/StyledText';
import {StyledCheckBox} from './ui/StyledCheckBox';
import {StyledTextInput} from './ui/StyledTextInput';

type Props = HomeStackScreenProps<'ListGame'>;

export const Home = (props: Props) => {
  const {colors} = useTheme();
  return (
    <SafeAreaView>
      <Text>Home</Text>
      <Button title="Go to Details" onPress={() => {}} color={colors.primary} />
      <Text />
      <Text />
      <StyledTextInput>input</StyledTextInput>

      <StyledText>text</StyledText>
      <StyledCheckBox text="test" />
      <StyledButton text="Prosegui" />

      <Icon name="house" size={35} color={colors.text} />
      <GameCard gameId="1" {...props} />
    </SafeAreaView>
  );
};
