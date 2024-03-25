import React, {PropsWithChildren} from 'react';
import {Text, TextInputProps, View} from 'react-native';
import {StyledTextInput} from './StyledTextInput';
import {useState} from 'react';
import {customTheme2} from '../../constants/theme';
import {StyledText} from './texts/StyledText';

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
      <View style={{padding: 4}}>
        <StyledText
          disabled={props.disabled}
          style={{
            fontFamily: 'NewTegomin-Regular', //becasime Antique
            paddingBottom: 1,
          }}>
          {props.label}
        </StyledText>
      </View>
      <StyledTextInput
        placeholder={props.placeholder}
        aria-disabled={props.disabled}
        onChangeText={props.onChangeText}
        {...props}
      />
    </View>
  );
};
