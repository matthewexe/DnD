import React from 'react';
import {View} from 'react-native';
import StyledTitle from '../ui/texts/StyledTitle';
import {StyledText} from '../ui/texts/StyledText';

type Props = {
  message: string;
};
export const Success = (props: Props) => {
  return (
    <View
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        alignSelf: 'center',
        justifyContent: 'center',
      }}>
      <StyledTitle>Success!</StyledTitle>
      <StyledText>{props.message}</StyledText>
    </View>
  );
};
