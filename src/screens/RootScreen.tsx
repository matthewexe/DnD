import React from 'react';
import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {RootParamList} from '../routes/RootProps';
import {HomeScreen} from './HomeScreen';
import {Dictionary} from './DictionaryScreen';
import Icon from 'react-native-vector-icons/FontAwesome6';
import {View} from 'react-native';
import {customTheme2} from 'constants/theme';

const Tabs = createBottomTabNavigator<RootParamList>();

const screenOptions: BottomTabNavigationOptions = {
  headerShown: false,
  tabBarStyle: {
    // position: 'absolute',
    // bottom: 5,
    // left: '12.5%',
    // right: '12.5%',
    // borderRadius: 30,
    // width: '75%',
    height: 55,
    // padding: 5,
    // marginVertical: 5,
    // marginHorizontal: 'auto',
  },
  tabBarItemStyle: {
    borderRadius: 30,
    justifyContent: 'center',
    // marginVertical: 10,
  },
  tabBarHideOnKeyboard: true,
};

const tabsIcon = {
  home: ({color, size}: {focused: boolean; color: string; size: number}) => (
    <Icon name="house" color={color} size={size} />
  ),
  dictionary: ({
    color,
    size,
  }: {
    focused: boolean;
    color: string;
    size: number;
  }) => <Icon name="dice-d20" color={color} size={size} />,
};

export const RootScreen = () => {
  return (
    <Tabs.Navigator initialRouteName="Home" screenOptions={screenOptions}>
      <Tabs.Screen
        name="Home"
        component={HomeScreen}
        options={{tabBarIcon: tabsIcon.home}}
      />
      <Tabs.Screen
        name="Wiki"
        component={Dictionary}
        options={{
          tabBarIcon: tabsIcon.dictionary,
        }}
      />
    </Tabs.Navigator>
  );
};
