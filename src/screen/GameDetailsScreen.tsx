import React from 'react';
import {HomeStackScreenProps} from '../routes/HomeParamList';
import {Button, Text} from 'react-native';

export const GameDetailsScreen = ({
  navigation,
  route,
}: HomeStackScreenProps<'GameDetail'>) => {
  const {gameId} = route.params;

  if (!gameId) {
    return (
      <>
        <Text>Game not found!</Text>
        <Button
          title="Go to Home"
          onPress={() => navigation.navigate('Home')}
        />
      </>
    );
  }

  return (
    <>
      <Button title="Go Back" onPress={() => navigation.goBack()} />
      <Text>GameId: {gameId}</Text>
    </>
  );
};
