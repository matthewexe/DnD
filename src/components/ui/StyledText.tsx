import {useTheme} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, TextProps} from 'react-native';
import Theme from '../../constants/theme';

type Props = TextProps;

export const StyledText = (props: Props) => {
  const {colors} = useTheme();
  return (
    <Text
      selectionColor={colors.notification}
      {...props}
      style={styles.TextBox}>
      {props.children}
    </Text>
  );
};
const styles = StyleSheet.create({
  TextBox: {
    borderBottomColor: Theme.colors.primary,
    borderLeftColor: Theme.colors.primary,
    borderBottomWidth: 1.2,
    borderLeftWidth: 2.3,
    borderRightWidth: 0,
    borderTopWidth: 0,
    width: 100,
    height: 23,
  },
});
