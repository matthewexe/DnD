import React from 'react';
import {Text, TouchableHighlight, View} from 'react-native';
import {HomeScreenProps} from '../routes/HomeProps';
import {useRealm} from '@realm/react';
import Realm from 'realm';

export type GameCardProps = HomeScreenProps<'ListGame'> & {
  gameId: number;
};

export const GameCard = ({gameId, navigation}: GameCardProps) => {
  return (
    <View>
      <TouchableHighlight //pressable
        onPress={() => {
          navigation.navigate('GameDetail', {gameId: gameId});
        }}>
        <Text id="title-card" style={{}}></Text>
      </TouchableHighlight>
    </View>
  );
};
