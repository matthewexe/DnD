import React, {PropsWithChildren} from 'react';
import {Text, TextInputProps, View} from 'react-native';
import {StyledTextInput} from './ui/StyledTextInput';
import {useState} from 'react';
import {fontFamilies} from '../constants/fonts';
import {customTheme2} from '../constants/theme';

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
      <Text
        disabled={props.disabled}
        style={{
          fontFamily: 'Becasime Antique',
        }}>
        {props.label}
      </Text>
      <StyledTextInput
        placeholder={props.placeholder}
        aria-disabled={props.disabled}
        onChangeText={props.onChangeText}
        {...props}
      />
    </View>
  );
};
