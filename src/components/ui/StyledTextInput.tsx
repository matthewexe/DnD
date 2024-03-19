import React from 'react';
import {StyleSheet, TextInput, TextInputProps} from 'react-native';

import {customTheme2} from '../../constants/theme';

type Props = TextInputProps;

export const StyledTextInput = (props: Props) => {
  return (
    <TextInput
      {...props}
      placeholderTextColor={customTheme2.colors.text}
      selectionColor={customTheme2.colors.background}
      style={styles.inputBox}
      //on chance text
    >
      {props.children}
    </TextInput>
  );
};

const styles = StyleSheet.create({
  inputBox: {
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 4,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 12,
    backgroundColor: customTheme2.colors.background,
    borderLeftColor: customTheme2.colors.primary,
    borderBottomColor: customTheme2.colors.primary,
    borderTopColor: customTheme2.colors.text,
    borderWidth: 1.2,
    borderRightWidth: 2,
    borderTopWidth: 0.6,
    width: 150,
    height: 40,
  },
});
