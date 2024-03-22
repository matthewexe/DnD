import React from 'react';
import {Text} from 'react-native';
import {useRealm} from '@realm/react';
import {GameModel} from '../models/types';
import 'react-native-get-random-values';
import Realm from 'realm';
import {Game} from '../models/Game';

export const Test = () => {
  const realm = useRealm();
  const classData: GameModel = {
    id: new Realm.BSON.ObjectId(),
    name: 'Test',
    description: 'Test Description',
    players: [],
  };

  // realm.write(() => {
  //   realm.create('Game', classData);
  // });

  return <Text>Test</Text>;
};
