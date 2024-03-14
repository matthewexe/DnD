import React from 'react';
import {StyleSheet, TextInput, TextInputProps} from 'react-native';
import {useTheme} from '@react-navigation/native';
import Theme from '../../constants/theme';

type Props = TextInputProps;

export const StyledTextInput = (props: Props) => {
  const {colors} = useTheme();
  return (
    <TextInput
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
    borderBottomLeftRadius: 5,
    borderTopRightRadius: 10,
    backgroundColor: Theme.colors.background,
    borderLeftColor: Theme.colors.primary,
    borderBottomColor: Theme.colors.primary,
    borderTopColor: Theme.colors.text,
    borderWidth: 1.2,
    borderRightWidth: 2,
    borderTopWidth: 0.6,
    width: 150,
    height: 40,
  },
  inputBoxOnPress: {},
});
