import React from 'react';
import {Text, TextInput, TextInputProps, View} from 'react-native';

type Props = TextInputProps & {
  /**
   * The text to display
   */
  label: string;
  /**
   * The color of the text
   */
  disabled?: boolean;
};

export const InputText = (props: Props) => {
  return (
    <View>
      <Text disabled={props.disabled ?? false}>{props.label}</Text>
      <TextInput
        placeholder={props.placeholder}
        aria-disabled={props.disabled ?? false}
        {...props}
      />
    </View>
  );
};
