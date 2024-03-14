// In App.js in a new project

import * as React from 'react';
import {SafeAreaView} from 'react-native';
import {HomeScreen} from './src/screens/HomeScreen';
import {MyButton} from './src/screens/MyButton';
import RaceComponent from './src/components/race/fetchRaceByIndex';

function App() {
  return (
    <SafeAreaView>
      <HomeScreen />
      <MyButton title="Test" />
      <RaceComponent input="dragonborn" />
    </SafeAreaView>
  );
}

export default App;
