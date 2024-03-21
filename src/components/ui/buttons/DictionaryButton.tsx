import React from 'react';
import {StyleSheet, PressableProps, Text, Pressable} from 'react-native';
import Theme from '../../../constants/theme';
import {StyledText} from '../texts/StyledText';

type Props = PressableProps & {
  text: string;
};

export const DictionaryButton = (props: Props) => {
  return (
    <Pressable {...props} style={styles.text}>
      <StyledText>{props.text}</StyledText>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 2,
  },
  text: {
    borderRadius: 80,
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Theme.colors.primary,
    width: 290,
    height: 80,
  },
});
