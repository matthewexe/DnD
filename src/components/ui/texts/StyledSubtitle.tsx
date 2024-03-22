import React from 'react';
import {StyleSheet, Text, TextProps} from 'react-native';
import {customTheme2} from '../../../constants/theme';

type Props = TextProps;

export const StyledSubtitle = (props: Props) => {
  return (
    <Text {...props} style={[styles.subtitle]}>
      {props.children}
    </Text>
  );
};

const styles = StyleSheet.create({
  subtitle: {
    fontSize: 24,
    fontFamily: '',
    color: customTheme2.colors.text,
    borderColor: customTheme2.colors.notification,
    borderLeftWidth: 3,
    paddingLeft: 8,
    margin: 5,
  },
});
