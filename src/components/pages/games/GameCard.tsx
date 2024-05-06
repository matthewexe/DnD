import React from 'react';
import {HomeScreenProps} from '../../../routes/HomeProps';
import Realm from 'realm';
import {useObject, useQuery} from '@realm/react';
import {Pressable, StyleSheet, View} from 'react-native';
import {Game} from '../../../models/Game';
import {StyledText} from '../../ui/texts/StyledText';
import {customTheme2} from '../../../constants/theme';

type Props = HomeScreenProps<'ListGame'> & {
  gameId: Realm.BSON.ObjectId;
};

export const GameCard = ({gameId, navigation}: Props) => {
  const game = useObject<Game>(Game, gameId);

  const onPress = () => {
    navigation.navigate('GameDetail', {gameId: gameId});
  };

  return (
    <View style={[styles.container]}>
      <Pressable onPress={onPress} style={{flex: 1}}>
        <View style={[styles.title]}>
          <StyledText numberOfLines={1} ellipsizeMode="tail">
            {game?.name}
          </StyledText>
        </View>
        <View style={[styles.content]}>
          <StyledText numberOfLines={6} ellipsizeMode="tail">
            {game?.description}
          </StyledText>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: customTheme2.colors.card,
    // flex: 1,
    width: '40%',
    margin: 8,
    borderRadius: 25,
    height: 150,
  },
  title: {
    alignItems: 'center',
    padding: 5,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: customTheme2.colors.primary,
  },
  content: {
    padding: 10,
  },
});
