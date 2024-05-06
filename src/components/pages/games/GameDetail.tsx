import React, {useState} from 'react';
import {HomeScreenProps} from '../../../routes/HomeProps';
import {useObject, useQuery, useRealm} from '@realm/react';
import {Game, Player} from '../../../models/Game';
import {StyledSubtitle} from '../../ui/texts/StyledSubtitle';
import {StyleSheet, View} from 'react-native';
import {StyledText} from '../../ui/texts/StyledText';
import {StyledButton} from '../../ui/StyledButton';
import {Realm} from '@realm/react';
import {NewPlayerView} from '../../../views/NewPlayerView';

type Props = HomeScreenProps<'GameDetail'>;

export const GameDetail = ({navigation, route}: Props) => {
  const realm = useRealm();
  const gameId = route.params.gameId;
  const game = useObject<Game>(Game, gameId);

  const [players, setPlayers] = useState<Player[]>(game?.players.slice() ?? []);

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

  const downloadCard = (id: Realm.Types.ObjectId) => {
    navigation.navigate('PlayerCard', {playerId: id});
  };

  return (
    <NewPlayerView
      title="GameDetail"
      loading={false}
      error={game === undefined ? 'Errore nel recupero del game' : undefined}
      errorOnPress={() => {}}>
      <StyledSubtitle>{game?.description ?? ''}</StyledSubtitle>
      <View>
        <View style={[styles.containerButtons]}>
          <StyledButton text="Delete Game" onPress={deleteGame} />
          <StyledButton text="Add Player" onPress={addPlayer} />
        </View>
        <View>
          {players.map((player, index) => {
            return (
              <View style={[styles.margin, styles.playerRow]}>
                <View style={[styles.margin, styles.containerPlayerName]}>
                  <StyledText numberOfLines={1} ellipsizeMode="tail">
                    {index + 1}. {player.player_name}
                  </StyledText>
                  <StyledText
                    numberOfLines={1}
                    ellipsizeMode="tail"
                    style={[styles.characterName]}>
                    {player.character_name}
                  </StyledText>
                </View>
                <View style={[styles.margin, styles.containerPlayerButtons]}>
                  <StyledButton
                    text=""
                    icon="file-pdf"
                    onPress={() => downloadCard(player.id)}
                    style={{marginRight: 10}}
                  />
                  <StyledButton
                    text=""
                    icon="trash"
                    onPress={() => deletePlayer(player.id, index)}
                  />
                </View>
              </View>
            );
          })}
        </View>
      </View>
    </NewPlayerView>
  );
};

const styles = StyleSheet.create({
  margin: {
    marginVertical: 5,
  },
  containerButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  playerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  containerPlayerName: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    flexWrap: 'wrap',
    maxWidth: '74%',
  },
  characterName: {
    color: '#8c8c8c',
    fontSize: 14,
    marginLeft: 10,
  },
  containerPlayerButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
