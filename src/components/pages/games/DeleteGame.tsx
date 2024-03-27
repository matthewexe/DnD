import React, {useState} from 'react';
import {HomeScreenProps} from '../../../routes/HomeProps';
import {useQuery, useRealm} from '@realm/react';
import {Game} from '../../../models/Game';
import {View} from 'react-native';
import {LabeledValue} from '../../ui/LabeledValue';
import {StyledButton} from '../../ui/StyledButton';
import {NewPlayerView} from '../../../views/NewPlayerView';

type Props = HomeScreenProps<'DeleteGame'>;

export const DeleteGame = ({route, navigation}: Props) => {
  const realm = useRealm();

  const [successModalVisible, setSuccessModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | undefined>(undefined);

  const gameId = route.params.gameId;
  const game = useQuery<Game>(Game, results => {
    return results.filtered('id == $0', gameId);
  })[0];

  const errorStatus = () => {
    if (!game.isValid()) {
      return 'Invalid Game';
    } else if (error !== undefined) {
      return error;
    }
    return undefined;
  };

  const deleteGame = () => {
    realm.write(() => {
      setLoading(true);

      const result = realm.delete(game);

      setLoading(false);
      if (result !== undefined) {
        setError('Error deleting game');
      } else {
        setError(undefined);
        setSuccessModalVisible(true);
      }
    });
  };

  return (
    <NewPlayerView title="Delete Game" error={errorStatus()} errorOnPress={}>
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
            {/* TODO: Modal delete game */}
            <StyledButton text="Delete Game" onPress={() => deleteGame()} />
          </View>
        </View>
      )}
    </NewPlayerView>
  );
};
