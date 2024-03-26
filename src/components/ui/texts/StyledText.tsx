/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, Text, TextProps} from 'react-native';
import {customTheme2} from '../../../constants/theme';

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
    color: customTheme2.colors.text,
    fontFamily: 'NewTegomin-Regular',
    fontSize: 17,
    fontWeight: '400',
    margin: 1,
    textAlignVertical: 'bottom',
  },
});
