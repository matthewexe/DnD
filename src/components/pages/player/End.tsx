import React, {useState} from 'react';
import {HomeScreenProps} from '../../../routes/HomeProps';
import {NewPlayerView} from '../../../views/NewPlayerView';
import Realm from 'realm';
import 'react-native-get-random-values';
import {useRealm} from '@realm/react';
import {Game, Player} from '../../../models/Game';
import {StyledSubtitle} from '../../ui/texts/StyledSubtitle';
import {StyleSheet, View} from 'react-native';
import {snakeCaseToTitleCase} from '../../../helper/fieldConverter';
import {StyledLabeledValue} from '../../ui/texts/StyledLabeledValue';
import {StyledButton} from '../../ui/StyledButton';

type Props = HomeScreenProps<'NewPLayer_End'>;

export const End = ({route, navigation}: Props) => {
  const realm = useRealm();

  const userData = route.params.playerData;
  const playerId = new Realm.BSON.ObjectId();

  const [state, setState] = useState<{
    loading: boolean;
    error: string | undefined;
  }>({
    loading: false,
    error: undefined,
  });

  const createPlayer = () => {
    setState({loading: true, error: undefined});
    realm.write(() => {
      const player = realm.create<Player>('Player', {
        id: playerId,
        ...userData,
      });

      console.log(player);

      if (!player) {
        setState({loading: false, error: 'Error creating player'});
      } else {
        realm
          .objectForPrimaryKey<Game>('Game', route.params.gameId)
          ?.players.push(player);
      }

      setState({loading: false, error: undefined});
    });
  };

  return (
    <NewPlayerView
      title="End"
      loading={state.loading}
      error={state.error}
      errorOnPress={() => {
        navigation.navigate('ListGame');
      }}>
      <View>
        <StyledSubtitle>Recap</StyledSubtitle>
        <StyledLabeledValue
          label="Name"
          value={snakeCaseToTitleCase(userData.player_name)}
        />
        <StyledLabeledValue
          label="Name"
          value={snakeCaseToTitleCase(userData.character_name)}
        />
        <StyledLabeledValue
          label="Class"
          value={snakeCaseToTitleCase(userData.class)}
        />
        <StyledLabeledValue
          label="Race"
          value={snakeCaseToTitleCase(userData.race)}
        />
        <StyledLabeledValue
          label="Background"
          value={snakeCaseToTitleCase(userData.background)}
        />
        <StyledLabeledValue
          label="Alignment"
          value={snakeCaseToTitleCase(userData.alignment)}
        />
        <StyledLabeledValue
          label="Experience Points"
          value={snakeCaseToTitleCase(userData.experience.toString())}
        />
        <StyledLabeledValue
          label="Level"
          value={snakeCaseToTitleCase(userData.level.toString())}
        />
        <StyledLabeledValue
          label="Hit Die"
          value={snakeCaseToTitleCase(userData.hit_die.toString())}
        />
        <StyledLabeledValue
          label="Subclass"
          value={snakeCaseToTitleCase(userData.subclass)}
        />
        <StyledLabeledValue
          label="Subrace"
          value={snakeCaseToTitleCase(userData.subrace)}
        />
      </View>
      <View style={[styles.containerButtons]}>
        <StyledButton
          text="Create"
          icon="check"
          onPress={() => {
            createPlayer();
            navigation.navigate('GameDetail', {gameId: route.params.gameId});
          }}
        />
        <StyledButton
          text="Cancel"
          icon="xmark"
          onPress={() => {
            navigation.navigate('GameDetail', {gameId: route.params.gameId});
          }}
        />
      </View>
    </NewPlayerView>
  );
};

const styles = StyleSheet.create({
  containerButtons: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
