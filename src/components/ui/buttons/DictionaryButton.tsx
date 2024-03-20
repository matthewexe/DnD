import React from 'react';
import {StyleSheet, PressableProps, Text, Pressable} from 'react-native';
import Theme from '../../../constants/theme';

type Props = PressableProps & {
  text: string;
};

export const DictionaryButton = (props: Props) => {
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
    borderRadius: 80,
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Theme.colors.primary,
    width: 190,
    height: 80,
  },
});
