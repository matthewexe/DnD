/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Text, TextProps } from 'react-native';
import { customTheme2 } from '../../../constants/theme';

type Props = TextProps;

export const StyledTitle = (props: Props) => {
  return (
    <>
      <Text
        style={{
          width: '100%',
          backgroundColor: customTheme2.colors.primary,
          height: 12,
          textAlign: 'center',
        }}></Text>
      <Text
        {...props}
        style={{
          width: '100%',
          backgroundColor: customTheme2.colors.primary,
          height: 38,
          textAlign: 'center',
          fontSize: 30,
          fontWeight: 'bold',
        }}></Text>
      <Text
        style={{
          width: '100%',
          backgroundColor: customTheme2.colors.primary,
          height: 15,
          textAlign: 'center',
          fontWeight: 'bold',
          fontSize: 0,
        }}>
        {props.children}
      </Text>
    </>
  );
};

export default StyledTitle;
