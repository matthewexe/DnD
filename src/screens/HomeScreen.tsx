import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeStackParamList} from '../routes/HomeParamList';
import {Home} from '../components/Home';
import {GameDetailsScreen} from './GameDetailsScreen';

const HomeStack = createNativeStackNavigator<HomeStackParamList>();

export const HomeScreen = ({}) => {
  return (
    <HomeStack.Navigator screenOptions={{headerShown: false}}>
      <HomeStack.Screen name="ListGame" component={Home} />
      <HomeStack.Screen name="GameDetail" component={GameDetailsScreen} />
    </HomeStack.Navigator>
  );
};
