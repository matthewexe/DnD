import React from 'react';
import {HomeScreenProps} from '../../../routes/HomeProps';
import {SafeAreaView} from 'react-native-safe-area-context';
import StyledTitle from '../../ui/texts/StyledTitle';
import {useRealm} from '@realm/react';
import {Game} from '../../../models/Game';
import {View} from 'react-native';
import {LabeledValue} from '../../ui/LabeledValue';
import {StyledButton} from '../../ui/StyledButton';

type Props = HomeScreenProps<'DeleteGame'>;

export const DeleteGame = ({route, navigation}: Props) => {
  const realm = useRealm();
  const gameId = route.params.gameId;
  const game = realm.objectForPrimaryKey<Game>('Game', gameId);

  if (game === null) {
    // TODO: Error
    return;
  }

  return (
    <SafeAreaView>
      <StyledTitle>Delete Game</StyledTitle>
      {/* TODO: Error loading */}
      {!game.isValid() && <StyledTitle>Invalid Game</StyledTitle>}
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
            <StyledButton text="Delete Game" />
          </View>
        </View>
      )}
    </SafeAreaView>
  );
};
