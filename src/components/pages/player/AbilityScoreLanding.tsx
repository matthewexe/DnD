import React, {useRef, useState} from 'react';
import {HomeScreenProps} from '../../../routes/HomeProps';
import {NewPlayerView} from '../../../views/NewPlayerView';
import {StyledButton} from '../../ui/StyledButton';
import {assegnaCaratteristiche} from '../../../helper/setPointsByClass';
import {ordinaArrayNumeriCasuali} from '../../../helper/createRandomNumbers';
import {
  useGetRacesByIndexQuery,
  useGetSubRacesByIndexQuery,
} from '../../../services/api';
import {RacesRequest, SubraceIndexRequest} from '../../../types/requests';

type Props = HomeScreenProps<'NewPlayer_AbilityScores'>;

export const AbilityScoreLanding = ({navigation, route}: Props) => {
  const userData = useRef(route.params.playerData);

  const [rolls, setRolls] = useState(
    assegnaCaratteristiche(ordinaArrayNumeriCasuali(), userData.current.class),
  );

  const {
    data: raceData,
    isLoading: isLoadingRace,
    error: raceError,
  } = useGetRacesByIndexQuery({index: userData.current.race as RacesRequest});

  const {
    data: subraceData,
    isLoading: isLoadingSubrace,
    error: subraceError,
  } = useGetSubRacesByIndexQuery({
    index: userData.current.subrace as SubraceIndexRequest,
  });

  const refRolls = useRef(rolls);
  const refBonuses = useRef<number[]>(new Array(6).fill(0));
  const timeouts = useRef<NodeJS.Timeout[]>([]);

  const checkRoll = (roll: number) => {};

  const onChangeText = (indexInputText: number, text: string) => {
    clearTimeout(timeouts.current[indexInputText]);
  };

  return (
    <NewPlayerView title="Ability Scores" errorOnPress={() => {}}>
      <StyledButton text="reroll" />
    </NewPlayerView>
  );
};
