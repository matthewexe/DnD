import React, {PropsWithChildren} from 'react';
import {Text, TextInput, View} from 'react-native';

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
      <TextInput placeholder={placeholder} aria-disabled={disabled} />
    </View>
  );
};
