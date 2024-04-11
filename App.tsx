import React from 'react';
import {RealmProvider} from '@realm/react';
import {
  Game as GameModel,
  Player as PlayerModel,
  Equipment as EquipmentModel,
} from './src/models/Game';
import {Provider} from 'react-redux';
import {store} from './src/store';
import {NavigationContainer} from '@react-navigation/native';
import {customTheme2} from './src/constants/theme';
import {RootScreen} from './src/screens/RootScreen';
import 'react-native-gesture-handler';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {UtilPDF} from './src/utils/pdf';
import {PermissionsAndroid} from 'react-native';

const App = () => {
  new UtilPDF().init();
  // const head = ['Name'];
  // const data = [['John'], ['Doe']];
  const grantedWritePermission = PermissionsAndroid.request(
    PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
    {
      title: 'Storage Permission',
      message: 'App needs access to memory to download the file',
      buttonPositive: 'Allow',
      buttonNegative: 'Deny',
    },
  );

  grantedWritePermission
    .then(() => {
      console.log('Write permission granted');
    })
    .catch(() => {
      console.log('Write permission denied');
    });

  const grantedReadPermission = PermissionsAndroid.request(
    PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
    {
      title: 'Storage Permission',
      message: 'App needs access to memory to download the file',
      buttonPositive: 'Allow',
      buttonNegative: 'Deny',
    },
  );

  console.log('grantedWritePermission', grantedWritePermission);
  console.log('grantedReadPermission', grantedReadPermission);

  grantedReadPermission
    .then(() => {
      console.log('Read permission granted');
    })
    .catch(() => {
      console.log('Read permission denied');
    });

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <RealmProvider
        path="dnd.db"
        schema={[GameModel, PlayerModel, EquipmentModel]}
        schemaVersion={5}>
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
