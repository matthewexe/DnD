import React from 'react';
import {StyleSheet, PressableProps, Text, Pressable} from 'react-native';
import Theme from '../../constants/theme';

type Props = PressableProps & {
  text: string;
};

export const StyledButton = (props: Props) => {
  return (
    <Pressable {...props} style={styles.button}>
      <Text>{props.text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Theme.colors.primary,
    width: 120,
    height: 41,
  },
});
