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
    width: 180,
    //height: 23,
    fontWeight: 'bold',
    fontSize: 21,
    top: -3,
    textAlign: 'center',
    color: customTheme2.colors.text,
  },
});
