// In App.js in a new project

import * as React from 'react';
import {View, Text, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen} from './src/screens/HomeScreen';
import {MyTabs} from './src/screens/BottomNavigator';
import {MyButton} from './src/screens/MyButton';
import {Counter} from './src/screens/Counter';
import RaceComponent from './src/screens/fetchRaceByIndex';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      {/* <MyTabs /> */}

      <HomeScreen />
      <MyButton title="Test" />
      <RaceComponent index="dragonborn"></RaceComponent>
    </NavigationContainer>
  );
}

export default App;
