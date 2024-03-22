import React from 'react';
import {StyleSheet, Text, TextProps, View} from 'react-native';
import {customTheme2} from '../../../constants/theme';

type Props = TextProps;

export const DescriptionText = (props: Props) => {
  return (
    <Text {...props} style={styles.Description}>
      {props.children}
    </Text>
  );
};
const styles = StyleSheet.create({
  Description: {
    paddingVertical: 10,
    paddingHorizontal: 5,
    fontSize: 17,
    alignSelf: 'center',
    textAlign: 'justify',
  },
});
