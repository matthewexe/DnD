import React from 'react';
import {StyleSheet, PressableProps, Text, Pressable} from 'react-native';
import Theme from '../../constants/theme';

type Props = PressableProps & {
  text: string;
};

export const StyledButton = (props: Props) => {
  return (
    <Pressable {...props} style={styles.text}>
      <Text>{props.text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 2,
  },
  text: {
    borderRadius: 4,
    borderColor: Theme.colors.primary,
    borderWidth: 2,
    backgroundColor: Theme.colors.secondary,
    width: 70,
    height: 36,
  },
});
