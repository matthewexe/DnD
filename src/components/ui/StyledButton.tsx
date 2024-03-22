import React from 'react';
import {StyleSheet, PressableProps, Pressable} from 'react-native';
import {customTheme2} from '../../constants/theme';
import {StyledText} from './texts/StyledText';

type Props = PressableProps & {
  text: string;
};

export const StyledButton = (props: Props) => {
  return (
    <Pressable {...props} style={styles.button}>
      <StyledText>{props.text}</StyledText>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: customTheme2.colors.primary,
    width: 120,
    height: 41,
  },
});
