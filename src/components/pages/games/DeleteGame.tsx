import React from 'react';
import {HomeScreenProps} from '../../../routes/HomeProps';
import {useObject, useQuery, useRealm} from '@realm/react';
import {Game} from '../../../models/Game';
import {View} from 'react-native';
import {LabeledValue} from '../../ui/LabeledValue';
import {StyledButton} from '../../ui/StyledButton';
import {NewPlayerView} from '../../../views/NewPlayerView';

type Props = HomeScreenProps<'DeleteGame'>;

export const DeleteGame = ({route, navigation}: Props) => {
  const realm = useRealm();

  const gameId = route.params.gameId;
  const game = useObject<Game>(Game, gameId);

  const errorStatus = () => {
    return undefined;
  };

  const deleteGame = () => {
    realm.write(() => {
      realm.delete(game);
    });
    navigation.navigate('ListGame');
  };

  return (
    <NewPlayerView
      title="Delete Game"
      error={errorStatus()}
      errorOnPress={() => {
        navigation.navigate('ListGame');
      }}>
      {game && (
        <View>
          <View>
            <LabeledValue label="Game Name" value={game.name ?? ''} />
            <LabeledValue
              label="Game Description"
              value={game.description ?? ''}
            />
          </View>
          <View>
            <StyledButton text="Delete Game" onPress={() => deleteGame()} />
          </View>
        </View>
      )}
    </NewPlayerView>
  );
};
