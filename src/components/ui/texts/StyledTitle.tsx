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
          backgroundColor: customTheme2.colors.primary,
          color: customTheme2.colors.text,
          textAlign: 'center',
          fontSize: 30,
          fontWeight: 'bold',
          padding: 10,
        }}>
        {props.children}
      </Text>
    </>
  );
};

export default StyledTitle;
