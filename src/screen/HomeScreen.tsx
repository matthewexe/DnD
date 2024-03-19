import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeStackParamList} from '../routes/HomeParamList';
import {Home} from '../components/Home';
import {GameDetails} from '../components/GameDetails';
import {BasicInfo} from '../components/BasicInfo';
import {RaceComponent} from '../components/race/Race';

const HomeStack = createNativeStackNavigator<HomeStackParamList>();

export const HomeScreen = ({}) => {
  return (
    <HomeStack.Navigator screenOptions={{headerShown: false}}>
      <HomeStack.Screen name="ListGame" component={Home} />
      <HomeStack.Screen name="GameDetail" component={GameDetails} />
      <HomeStack.Screen name="NewPlayer_BasicInfo" component={BasicInfo} />
      <HomeStack.Screen name="NewPlayer_Race" component={RaceComponent} />
    </HomeStack.Navigator>
  );
};
