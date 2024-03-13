import {useTheme} from '@react-navigation/native';
import React from 'react';
import {Text, TextProps} from 'react-native';

type Props = TextProps;

export const StyledText = (props: Props) => {
  const {colors} = useTheme();
  return (
    <Text selectionColor={colors.notification} {...props}>
      {props.children}
    </Text>
  );
};
