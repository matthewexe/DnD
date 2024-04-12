import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {RootParamList} from '../routes/RootProps';
import {HomeScreen} from './HomeScreen';
import {Dictionary} from './DictionaryScreen';
import {Settings} from '../components/settings/Settings';

const Tabs = createBottomTabNavigator<RootParamList>();

export const RootScreen = () => {
  return (
    <Tabs.Navigator
      initialRouteName="Home"
      screenOptions={{headerShown: false}}>
      <Tabs.Screen name="Home" component={HomeScreen} />
      <Tabs.Screen name="Wiki" component={Dictionary} />
      <Tabs.Screen name="Settings" component={Settings} />
    </Tabs.Navigator>
  );
};
