import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Text, TouchableHighlight, View} from 'react-native';
import {TabParamList} from '../routes/routes';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';

export const GameCard = () => {
  const nav =
    useNavigation<BottomTabNavigationProp<TabParamList, 'GameDetails'>>();
  return (
    <View>
      <TouchableHighlight
        onPress={() => {
          nav.navigate({name: 'GameDetails', params: {id: '1'}});
        }}>
        <Text id="title-card">Game Title</Text>
      </TouchableHighlight>
    </View>
  );
};
