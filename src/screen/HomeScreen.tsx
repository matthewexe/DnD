import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home} from '../components/pages/Home';
import {HomeParamList} from '../routes/HomeProps';
import {GameDetail} from '../components/pages/GameDetail';

const HomeStack = createNativeStackNavigator<HomeParamList>();

export const HomeScreen = ({}) => {
  return (
    <HomeStack.Navigator screenOptions={{headerShown: false}}>
      <HomeStack.Screen name="ListGame" component={Home} />
      <HomeStack.Screen name="GameDetail" component={GameDetail} />
    </HomeStack.Navigator>
  );
};
