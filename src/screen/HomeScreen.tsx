import {useTheme} from '@react-navigation/native';
import React from 'react';
import {Button, SafeAreaView, Text} from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome6';

export const HomeScreen = ({}) => {
  const {colors} = useTheme();

  return (
    <SafeAreaView>
      <Text>Home</Text>
      <Text>Home</Text>
      <Button title="Go to Details" onPress={() => {}} color={colors.primary} />
      {/* <Icon name="house" size={35} color="#000" /> */}
    </SafeAreaView>
  );
};
