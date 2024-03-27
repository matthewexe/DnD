import React, {useState} from 'react';
import {HomeScreenProps} from '../../../routes/HomeProps';
import {NewPlayerView} from '../../../views/NewPlayerView';
import Realm from 'realm';
import 'react-native-get-random-values';
import {useRealm} from '@realm/react';
import {Game, Player} from '../../../models/Game';

type Props = HomeScreenProps<'NewPLayer_End'>;

export const End = ({route}: Props) => {
  const realm = useRealm();

  const userData = route.params.playerData;
  const playerId = new Realm.BSON.ObjectId();

  const [state, setState] = useState<{
    loading: boolean;
    error: string | undefined;
  }>({
    loading: true,
    error: undefined,
  });

  realm.write(() => {
    const player = realm.create<Player>('Player', {
      id: playerId,
      ...userData,
    });

    if (!player) {
      setState({loading: false, error: 'Error creating player'});
    } else {
      realm
        .objectForPrimaryKey<Game>('Game', route.params.gameId)
        ?.players.push(player);
    }

    setState({loading: false, error: undefined});
  });

  return (
    <NewPlayerView title="End" loading={state.loading} error={state.error}>
      {/* TODO: Modal Success */}
    </NewPlayerView>
  );
};
