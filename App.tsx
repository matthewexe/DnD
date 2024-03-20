import React from 'react';
import {SafeAreaView} from 'react-native';
import {RealmProvider} from '@realm/react';
import {
  Game as GameModel,
  Player as PlayerModel,
  Armor as ArmorModel,
  Weapon as WeaponModel,
} from './src/models/Game';
import {Provider} from 'react-redux';
import {store} from './src/store';

const App = () => {
  return (
    <RealmProvider
      path="dnd.db"
      schema={[GameModel, PlayerModel, ArmorModel, WeaponModel]}
      schemaVersion={2}>
      <Provider store={store}>
        <SafeAreaView>{/* App */}</SafeAreaView>
      </Provider>
    </RealmProvider>
  );
};

export default App;
