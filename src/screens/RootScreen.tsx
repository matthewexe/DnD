import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {RootParamList} from '../routes/RootProps';

const Tabs = createBottomTabNavigator<RootParamList>();

export const RootScreen = () => {
  return (
    <Tabs.Navigator>
      <Tabs.Screen name="Home" component={HomeScreen} />
      {/* <Tabs.Screen name="Wiki" component={WikiScreen} />
      <Tabs.Screen name="Settings" component={SettingsScreen} /> */}
    </Tabs.Navigator>
  );
};
