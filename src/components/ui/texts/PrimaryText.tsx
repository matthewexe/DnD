import React from 'react';
import {StyleSheet, Text, TextProps, View} from 'react-native';
import {customTheme2} from '../../../constants/theme';

type Props = TextProps;

export const PrimaryText = (props: Props) => {
  return (
    <Text {...props} style={styles.PrimaryText}>
      {props.children}
    </Text>
  );
};
const styles = StyleSheet.create({
  PrimaryText: {
    fontWeight: 'bold',
    // fontFamily: '',
    fontSize: 20,
    alignSelf: 'center',
  },
});
