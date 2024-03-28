import React from 'react';
import {RealmProvider} from '@realm/react';
import {
  Game as GameModel,
  Player as PlayerModel,
  Armor as ArmorModel,
  Weapon as WeaponModel,
} from './src/models/Game';
import {Provider} from 'react-redux';
import {store} from './src/store';
import {NavigationContainer} from '@react-navigation/native';
import {customTheme2} from './src/constants/theme';
import {RootScreen} from './src/screens/RootScreen';
import 'react-native-gesture-handler';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {Test} from './src/components/Test';

const App = () => {
  // const head = ['Name'];
  // const data = [['John'], ['Doe']];

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <RealmProvider
        path="dnd.db"
        schema={[GameModel, PlayerModel, ArmorModel, WeaponModel]}
        schemaVersion={4}>
        <Provider store={store}>
          <NavigationContainer theme={customTheme2}>
            <RootScreen />
            {/* <Test /> */}
          </NavigationContainer>
        </Provider>
      </RealmProvider>
    </GestureHandlerRootView>
  );
};

export default App;
