import React from 'react';
import {HomeScreenProps} from '../../routes/HomeProps';
import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import StyledTitle from '../ui/texts/StyledTitle';
import {useRealm} from '@realm/react';
import {Game} from '../../models/Game';
import {GameCard} from './games/GameCard';
import {StyledSubtitle} from '../ui/texts/StyledSubtitle';
import {StyledButton} from '../ui/StyledButton';

type Props = HomeScreenProps<'ListGame'>;

export const ListGame = ({navigation, route}: Props) => {
  const realm = useRealm();

  const games = realm.objects<Game>('Game');

  return (
    <SafeAreaView>
      <StyledTitle>Home</StyledTitle>
      <StyledSubtitle>List Game</StyledSubtitle>
      <View style={[styles.buttonContainer]}>
        <StyledButton
          text="Create Game"
          onPress={() => {
            navigation.navigate('NewGame');
          }}
        />
      </View>
      <View style={[styles.scroll]}>
        <ScrollView contentContainerStyle={[styles.gamesContainer]}>
          {games.map((game, index) => (
            <GameCard
              key={game.id.id.toString() + index}
              gameId={game.id}
              navigation={navigation}
              route={route}
            />
          ))}
          {games.map((game, index) => (
            <GameCard
              key={game.id.id.toString() + index}
              gameId={game.id}
              navigation={navigation}
              route={route}
            />
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  scroll: {
    flexGrow: 1,
  },
  gamesContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  buttonContainer: {
    flexDirection: 'row-reverse',
    marginVertical: 20,
    marginHorizontal: 10,
  },
});
