/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import MySwitch from '../Switch';
import {View, Text} from 'react-native';
import StyledTitle from '../ui/StyledTitle';

//tema scuro chiaro, import in home, export in
export const Settings = () => {
  return (
    <View>
      <StyledTitle children={'Settings'} />
      <Text
        style={{
          fontSize: 20,
        }}>
        _Theme______
      </Text>
      <Text />
      <MySwitch />
      <Text />
    </View>
  );
};
