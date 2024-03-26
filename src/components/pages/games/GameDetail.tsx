import React from 'react';
import {HomeScreenProps} from '../../../routes/HomeProps';
import {useRealm} from '@realm/react';
import {Game, Player} from '../../../models/Game';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ScrollView} from 'react-native-gesture-handler';
import StyledTitle from '../../ui/texts/StyledTitle';
import {StyledSubtitle} from '../../ui/texts/StyledSubtitle';
import {Text, View} from 'react-native';
import {StyledText} from '../../ui/texts/StyledText';
import {StyledButton} from '../../ui/StyledButton';
import {Realm} from '@realm/react';

type Props = HomeScreenProps<'GameDetail'>;

export const GameDetail = ({navigation, route}: Props) => {
  const realm = useRealm();
  const gameId = route.params.gameId;
  const game = realm.objectForPrimaryKey<Game>('Game', gameId);

  if (game === null) {
    // TODO: Error Modal
    return;
  }

  const deletePlayer = (playerId: Realm.BSON.ObjectId) => {
    realm.write(() => {
      const player = realm.objectForPrimaryKey<Player>('Player', playerId);

      realm.delete(player);
    });
  };

  const addPlayer = () => {
    navigation.navigate('NewPlayer_BasicInfo', {gameId: gameId});
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <StyledTitle>{game.name}</StyledTitle>
        <StyledSubtitle>{game.description}</StyledSubtitle>
        <View>
          <View>
            <StyledButton text="Add Player" onPress={addPlayer} />
          </View>
          <View>
            {game.players.map((player, index) => {
              return (
                <View>
                  <View>
                    <StyledText>
                      {index + 1}. {player.player_name}
                    </StyledText>
                    <Text>{player.character_name}</Text>
                  </View>
                  <StyledButton
                    text="Delete"
                    onPress={() => deletePlayer(player.id)}
                  />
                </View>
              );
            })}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};