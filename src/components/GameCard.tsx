import React from 'react';
import {Text, TouchableHighlight, View} from 'react-native';
import {HomeStackScreenProps} from '../routes/HomeParamList';

export type GameCardProps = HomeStackScreenProps<'ListGame'> & {
  gameId: string;
};

export const GameCard = ({gameId, navigation}: GameCardProps) => {
  return (
    <View>
      <TouchableHighlight
        onPress={() => {
          navigation.navigate('GameDetail', {gameId: gameId});
        }}>
        <Text id="title-card">Game Title</Text>
      </TouchableHighlight>
    </View>
  );
};
