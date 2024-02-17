// In App.js in a new project

import * as React from 'react';
import {View, Text, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen} from './src/screens/HomeScreen';
import {MyTabs} from './src/screens/BottomNavigator';
import {MyButton} from './src/screens/MyButton';
import {Counter} from './src/screens/Counter';
import ExportDwarf from './src/screens/prova';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      {/* <MyTabs /> */}

      <HomeScreen />
      <MyButton title="Test" />
      <ExportDwarf></ExportDwarf>
    </NavigationContainer>
  );
}

export default App;
