import React, {PropsWithChildren} from 'react';
import {Text, View} from 'react-native';
import {StyledTextInput} from './ui/StyledTextInput';

type Props = PropsWithChildren<{
  /**
   * The text to display
   */
  label: string;
  placeholder: string;
  /**
   * The color of the text
   */
  disabled?: boolean;
}>;

export const InputText = ({label, placeholder, disabled = false}: Props) => {
  return (
    <View>
      <Text disabled={disabled}>{label}</Text>
      <StyledTextInput placeholder={placeholder} aria-disabled={disabled} />
    </View>
  );
};
