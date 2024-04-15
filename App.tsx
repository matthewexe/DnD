import React, {useEffect, useRef} from 'react';
import {RealmProvider} from '@realm/react';
import {
  Game as GameModel,
  Player as PlayerModel,
  Equipment as EquipmentModel,
} from './src/models/Game';
import {Settings, Settings as SettingsModel} from './src/models/Settings';
import {Provider} from 'react-redux';
import {store} from './src/store';
import {NavigationContainer} from '@react-navigation/native';
import {customTheme2} from './src/constants/theme';
import {RootScreen} from './src/screens/RootScreen';
import 'react-native-gesture-handler';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {PermissionsAndroid} from 'react-native';
import Realm from 'realm';
import {setProperty} from './src/store/settings';

const App = () => {
  const realmRef = useRef<Realm | null>(null);
  const pathDB = useRef<string>('dnd.db');
  const schemaDB = useRef([
    GameModel,
    PlayerModel,
    EquipmentModel,
    SettingsModel,
  ]);

  useEffect(() => {
    // Config DB
    const initConfig = () => {
      if (realmRef.current === null) return;

      const dbSettings = realmRef.current?.objects<Settings>(Settings)[0];
      if (dbSettings === undefined) {
        console.log('first openeeed');
        realmRef.current.write(() => {
          realmRef.current.create<Settings>('Settings', {
            language: 'English',
          });
        });
      }

      // Loading config
      store.dispatch(
        setProperty({
          property: 'language',
          value: dbSettings?.language ?? 'English',
        }),
      );
    };

    initConfig();

    // Android Permissions
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
  });

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <RealmProvider
        path={pathDB.current}
        schema={schemaDB.current}
        schemaVersion={6}
        realmRef={realmRef}>
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
