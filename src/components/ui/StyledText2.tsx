import React from 'react';
import {StyleSheet, Text, TextProps} from 'react-native';
import {customTheme2} from '../../constants/theme';

type Props = TextProps & {
  description: string;
};

export const StyledText2 = (props: Props) => {
  return (
    <>
      <Text {...props} style={styles.PrimaryText}>
        {props.children}:
      </Text>
      <Text {...props} style={styles.Description}>
        {props.description}
      </Text>
    </>
  );
};
const styles = StyleSheet.create({
  PrimaryText: {
    borderBottomColor: customTheme2.colors.primary,
    borderBottomWidth: 1,
    width: 200,
    height: 24,
    fontWeight: 'bold',
    fontFamily: '',
    fontSize: 17,
  },
  Description: {
    fontWeight: '200',
    width: '93%',
    fontSize: 14,
    alignSelf: 'center',
    textAlign: 'justify',
  },
});
