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
import {NavigationContainer} from '@react-navigation/native';
import {customTheme2} from './src/constants/theme';
import {CountedTable} from './src/components/table/CountedTable';
import {ApiFieldsAdapter} from './src/helpers/adapter';
import {Test} from './src/components/Test';

const App = () => {
  const head = ['Name'];
  const data = [['John'], ['Doe']];

  return (
    <RealmProvider
      path="dnd.db"
      schema={[GameModel, PlayerModel, ArmorModel, WeaponModel]}
      schemaVersion={3}>
      <Provider store={store}>
        <NavigationContainer theme={customTheme2}>
          <SafeAreaView style={{flex: 1, backgroundColor: 'black'}}>
            {/* <Test /> */}
            <CountedTable data={data} head={head} max_selectable={2} />
          </SafeAreaView>
        </NavigationContainer>
      </Provider>
    </RealmProvider>
  );
};

export default App;
