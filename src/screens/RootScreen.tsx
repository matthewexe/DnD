import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {RootParamList} from '../routes/RootProps';
import {HomeScreen} from './HomeScreen';

const Tabs = createBottomTabNavigator<RootParamList>();

export const RootScreen = () => {
  return (
    <Tabs.Navigator
      initialRouteName="Home"
      screenOptions={{headerShown: false}}>
      <Tabs.Screen name="Home" component={HomeScreen} />
      {/* <Tabs.Screen name="Wiki" component={WikiScreen} />
      <Tabs.Screen name="Settings" component={SettingsScreen} /> */}
    </Tabs.Navigator>
  );
};
