import React from 'react';
import {Text} from 'react-native';
import {useRealm} from '@realm/react';
import {GameModel} from '../models/types';
import 'react-native-get-random-values';
import Realm from 'realm';
import {Game, Player} from '../models/Game';
import {defaultPlayer} from '../helper/default';

export const Test = () => {
  const realm = useRealm();
  const player = {
    id: new Realm.BSON.ObjectId(),
    ...defaultPlayer(),
  };

  // console.log(realm.objects(Player)[0]);

  // realm.write(() => {
  //   const result = realm
  //     .objects(Game)[0]
  //     .players.push(realm.objects(Player)[0]);

  //   console.log(result);
  // });

  return <Text>Test</Text>;
};
