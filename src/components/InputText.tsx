import React, {PropsWithChildren} from 'react';
import {Text, TextInput, View} from 'react-native';

type Props = PropsWithChildren<{
  /**
   * The text to display
   */
  label: string;
  /**
   * The color of the text
   */
  disabled?: boolean;
}>;

export const InputText = ({label, disabled = false}: Props) => {
  return (
    <View>
      <Text disabled={disabled}>{label}</Text>
      <TextInput placeholder="Enter your name" aria-disabled={disabled} />
    </View>
  );
};
