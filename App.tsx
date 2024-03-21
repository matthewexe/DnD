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
import {SelectableTable} from './src/components/table/SelectableTable';
import {NavigationContainer} from '@react-navigation/native';
import {customTheme2} from './src/constants/theme';
import {Counter} from './src/components/table/Counter';

const App = () => {
  const headers = ['Head', 'Head2', 'Head3', 'Head4'];
  const data = [
    ['1', '2', '3', '4'],
    ['a', 'b', 'c', 'd'],
    ['1', '2', '3', '4'],
    ['a', 'b', 'c', 'd'],
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
            <Counter onValueChange={console.log} minValue={0} maxValue={20} />
          </SafeAreaView>
        </NavigationContainer>
      </Provider>
    </RealmProvider>
  );
};

export default App;
