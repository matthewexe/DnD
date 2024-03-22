import React from 'react';
import {Text, TextProps, View} from 'react-native';
import {customTheme2} from '../../../constants/theme';

type Props = TextProps;

export const StyledSubtitle = (props: Props) => {
  return (
    <>
      <Text style={{height: 19}} />
      <View
        style={{
          flexDirection: 'row',
        }}>
        <Text
          {...props}
          style={{
            fontSize: 35,
            fontFamily: '',
            color: customTheme2.colors.notification,
            top: -9,
          }}>
          |
        </Text>
        <Text
          style={{
            width: 5,
          }}></Text>
        <Text
          {...props}
          style={{
            fontSize: 24,
            fontFamily: '',
            color: customTheme2.colors.text,
          }}>
          {props.children}
        </Text>
        <Text style={{height: 44}} />
      </View>
    </>
  );
};
