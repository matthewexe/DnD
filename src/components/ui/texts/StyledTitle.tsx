import React from 'react';
import {StyleSheet, Text, TextProps} from 'react-native';
import {customTheme2} from '../../../constants/theme';

type Props = TextProps;

export const StyledTitle = (props: Props) => {
  return (
    <>
      <Text {...props} style={[styles.default, props.style]}>
        {props.children}
      </Text>
    </>
  );
};

const styles = StyleSheet.create({
  default: {
    backgroundColor: customTheme2.colors.primary,
    color: customTheme2.colors.text,
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    padding: 10,
  },
});

export default StyledTitle;
