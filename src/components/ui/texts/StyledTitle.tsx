/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, TextProps} from 'react-native';
import {customTheme2} from '../../../constants/theme';

type Props = TextProps;

export const StyledTitle = (props: Props) => {
  return (
    <>
      <Text
        {...props}
        style={{
          width: '100%',
          backgroundColor: customTheme2.colors.primary,
          paddingTop: 12,
          paddingBottom: 4,
          textAlign: 'center',
          fontSize: 30,
          fontWeight: 'bold',
        }}></Text>
      <Text
        style={{
          width: '100%',
          backgroundColor: customTheme2.colors.primary,
          paddingBottom: 10,
          textAlign: 'center',
          fontFamily: 'NewTegomin-Regular',
          fontSize: 0,
        }}>
        {props.children}
      </Text>
    </>
  );
};

export default StyledTitle;
