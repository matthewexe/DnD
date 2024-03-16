import React from 'react';
import {StyleSheet, TextInput, TextInputProps} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {customTheme2} from '../../constants/theme';

type Props = TextInputProps;

export const StyledTextInput = (props: Props) => {
  const {colors} = useTheme();
  return (
    <TextInput
      {...props}
      placeholderTextColor={colors.text}
      selectionColor={colors.background}
      style={styles.inputBox}>
      {props.children}
    </TextInput>
  );
};

const styles = StyleSheet.create({
  inputBox: {
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 4,
    borderTopRightRadius: 10,
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
