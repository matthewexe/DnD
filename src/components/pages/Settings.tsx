/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import MySwitch from '../Switch';
import {View, Text} from 'react-native';
import StyledTitle from '../ui/texts/StyledTitle';
import {StyledSubtitle} from '../ui/texts/StyledSubtitle';

//tema scuro chiaro, import in home, export in
export const Settings = () => {
  return (
    <>
      <View>
        <StyledTitle children={'Settings'} />
        <StyledSubtitle>Theme</StyledSubtitle>
        <Text />
      </View>

      <View style={{flexDirection: 'row', alignSelf: 'center'}}>
        <Text
          style={{
            fontSize: 16,
            top: 2,
          }}>
          {'   '}
          Activate Dark Mode
        </Text>
        <MySwitch />
        <Text />
      </View>
    </>
  );
};
