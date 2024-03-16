// In App.js in a new project

import * as React from 'react';
import {View, Text, Button, SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen} from './src/screens/HomeScreen';
import {MyTabs} from './src/screens/BottomNavigator';
import {MyButton} from './src/screens/MyButton';
import {Counter} from './src/screens/Counter';
import RaceComponent from './src/components/race/RaceByIndex';
import {ApiProvider} from '@reduxjs/toolkit/query/react';
import {Provider} from 'react-redux';
import {store} from './src/store';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <Provider store={store}>
      <SafeAreaView>
        <HomeScreen />
        <MyButton title="Test" />
        <RaceComponent input="dragonborn"></RaceComponent>
      </SafeAreaView>
    </Provider>
  );
}

export default App;
