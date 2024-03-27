import React from 'react';
import {StyleSheet, Text, TextProps, View} from 'react-native';
import {customTheme2} from '../../../constants/theme';

type Props = TextProps & {
  label: string;
  value: string;
};

export const StyledLabeledValue = (props: Props) => {
  return (
    <View style={[styles.container]}>
      <Text {...props} style={styles.PrimaryText}>
        {props.label}:
      </Text>
      <Text {...props} style={styles.Description}>
        {props.value}
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 5,
    paddingHorizontal: 10,
  },
  PrimaryText: {
    borderBottomColor: customTheme2.colors.primary,
    borderBottomWidth: 1,
    minWidth: 200,
    height: 24,
    fontWeight: 'bold',
    fontFamily: '',
    fontSize: 18,
    color: customTheme2.colors.text,
  },
  Description: {
    fontWeight: '400',
    width: '93%',
    fontSize: 14,
    alignSelf: 'center',
    textAlign: 'justify',
    color: customTheme2.colors.text,
  },
});
