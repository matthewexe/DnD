import React, {useState} from 'react';
import {HomeScreenProps} from '../../../routes/HomeProps';
import {useQuery, useRealm} from '@realm/react';
import {Game, Player} from '../../../models/Game';
import {StyledSubtitle} from '../../ui/texts/StyledSubtitle';
import {Text, View} from 'react-native';
import {StyledText} from '../../ui/texts/StyledText';
import {StyledButton} from '../../ui/StyledButton';
import {Realm} from '@realm/react';
import {NewPlayerView} from '../../../views/NewPlayerView';

type Props = HomeScreenProps<'GameDetail'>;

export const GameDetail = ({navigation, route}: Props) => {
  const realm = useRealm();
  const gameId = route.params.gameId;
  const game = useQuery<Game>(Game, results => {
    return results.filtered('id == $0', gameId);
  })[0];

  const [players, setPlayers] = useState<Player[]>(game.players.slice());

  const deletePlayer = (playerId: Realm.BSON.ObjectId, index: number) => {
    realm.write(() => {
      const player = realm.objectForPrimaryKey<Player>('Player', playerId);

      if (player === undefined) {
        return;
      }

      setPlayers(players.filter((_, i) => i !== index));
      realm.delete(player);
    });
  };

  const deleteGame = () => {
    navigation.navigate('DeleteGame', {gameId: gameId});
  };

  const addPlayer = () => {
    navigation.navigate('NewPlayer_BasicInfo', {gameId: gameId});
  };

  return (
    <NewPlayerView
      title="GameDetail"
      loading={false}
      error={game === undefined ? 'Errore nel recupero del game' : undefined}
      errorOnPress={() => {}}>
      <StyledSubtitle>{game.description}</StyledSubtitle>
      <View>
        <View>
          <StyledButton text="Delete Game" onPress={deleteGame} />
          <StyledButton text="Add Player" onPress={addPlayer} />
        </View>
        <View>
          {players.map((player, index) => {
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
                  onPress={() => deletePlayer(player.id, index)}
                />
              </View>
            );
          })}
        </View>
      </View>
    </NewPlayerView>
  );
};
