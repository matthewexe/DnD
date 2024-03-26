import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeParamList} from '../routes/HomeProps';
import {ListGame} from '../components/pages/ListGame';
import {NewGame} from '../components/pages/games/NewGame';
import {GameDetail} from '../components/pages/games/GameDetail';
import {BasicInfo} from '../components/pages/player/BasicInfo';
import RaceComponent from '../components/pages/player/race/RaceByIndex';
import ClassComponent from '../components/pages/player/class/ClassByIndex';

const Navigator = createNativeStackNavigator<HomeParamList>();

export const HomeScreen = () => {
  return (
    <Navigator.Navigator
      initialRouteName="ListGame"
      screenOptions={{headerShown: false}}>
      <Navigator.Screen name="ListGame" component={ListGame} />
      <Navigator.Screen name="GameDetail" component={GameDetail} />
      <Navigator.Screen name="NewGame" component={NewGame} />
      <Navigator.Screen name="NewPlayer_BasicInfo" component={BasicInfo} />
      <Navigator.Screen name="NewPlayer_Race" component={RaceComponent} />
      <Navigator.Screen name="NewPlayer_Class" component={ClassComponent} />
      {/* <Navigator.Screen name="ListGame" component={ListGame} /> */}
      {/* <Navigator.Screen name="SuccessError" component={SuccessError} />
      <Navigator.Screen name="GameDetail" component={GameDetail} />
      <Navigator.Screen name="NewGame" component={NewGame} />
      <Navigator.Screen name="DeleteGame" component={DeleteGame} />
      <Navigator.Screen name="NewPlayer_Equip" component={Equipment} />
      <Navigator.Screen name="NewPLayer_End" component={End} /> */}
    </Navigator.Navigator>
  );
};
