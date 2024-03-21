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

const App = () => {
  const headers = ['Head', 'Head2', 'Head3'];
  const data = [
    ['1', '2', '3'],
    ['a', 'b', 'c'],
    ['1', '2', '3'],
    ['a', 'b', 'c'],
  ];

  return (
    <RealmProvider
      path="dnd.db"
      schema={[GameModel, PlayerModel, ArmorModel, WeaponModel]}
      schemaVersion={2}>
      <Provider store={store}>
        <NavigationContainer theme={customTheme2}>
          <SafeAreaView style={{flex: 1, backgroundColor: 'black'}}>
            {/* <StyledCheckBox text="check" onValueChange={console.log} /> */}
            {/* <SelectableTable head={headers} data={data} max_selectbale={1} /> */}
            <CountedTable head={headers} data={data} max_selectable={2} />
          </SafeAreaView>
        </NavigationContainer>
      </Provider>
    </RealmProvider>
  );
};

export default App;
