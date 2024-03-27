/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, Text, TextProps} from 'react-native';
import {customTheme2} from '../../../constants/theme';
// import './assets/fonts/NewTegomin-Regular.ttf';

type Props = TextProps;

export const StyledText = (props: Props) => {
  return (
    <Text {...props} style={styles.TextBox}>
      {props.children}
    </Text>
  );
};

const styles = StyleSheet.create({
  TextBox: {
    fontWeight: 'bold',
    color: customTheme2.colors.text,
  },
});
