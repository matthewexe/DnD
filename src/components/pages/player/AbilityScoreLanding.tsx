import React, {useEffect, useRef, useState} from 'react';
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
import {StyledTextInput} from '../../ui/StyledTextInput';
import {InputText} from '../../ui/InputText';
import {StyledSubtitle} from '../../ui/texts/StyledSubtitle';
import {StyledText} from '../../ui/texts/StyledText';

type Props = HomeScreenProps<'NewPlayer_AbilityScores'>;

export const AbilityScoreLanding = ({navigation, route}: Props) => {
  const userData = useRef(route.params.playerData);

  const [rolls, setRolls] = useState<number[]>(
    assegnaCaratteristiche(ordinaArrayNumeriCasuali(), userData.current.class),
  );
  const [bonuses, setBonuses] = useState<number[]>(new Array(6).fill(0));

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

  const labels = [
    'Strength',
    'Dexterity',
    'Constitution',
    'Intelligence',
    'Wisdom',
    'Charisma',
  ];

  const refRolls = useRef<number[]>(rolls);
  const refBonuses = useRef<number[]>(new Array(6).fill(0));
  const timeouts = useRef<NodeJS.Timeout[]>([]);
  const labelBonuses = ['STR', 'DEX', 'CON', 'INT', 'WIS', 'CHA'];

  useEffect(() => {
    refBonuses.current = new Array(6).fill(0);

    raceData?.ability_bonuses.forEach(bonus => {
      const idx = labelBonuses.indexOf(bonus.ability_score.name);
      refBonuses.current[idx] += bonus.bonus;
    });

    subraceData?.ability_bonuses.forEach(bonus => {
      const idx = labelBonuses.indexOf(bonus.ability_score.name);
      refBonuses.current[idx] += bonus.bonus;
    });

    setBonuses([...refBonuses.current]);
  }, [raceData, subraceData]);

  const onChangeText = (indexInputText: number, text: string) => {
    clearTimeout(timeouts.current[indexInputText]);

    setBonuses(
      refBonuses.current.map((bonus, index) =>
        index === indexInputText ? 0 : bonus,
      ),
    );

    const value = parseInt(text, 10);
    setRolls(
      rolls.map((roll, index) => (index === indexInputText ? value : roll)),
    );
    refRolls.current[indexInputText] = isNaN(value) ? 10 : Math.min(value, 28);
    timeouts.current[indexInputText] = setTimeout(() => {
      setBonuses([...refBonuses.current]);

      setRolls([...refRolls.current]);
    }, 1000);
  };

  const reroll = () => {
    refRolls.current = assegnaCaratteristiche(
      ordinaArrayNumeriCasuali(),
      userData.current.class,
    );

    setRolls([...refRolls.current]);

    console.log(refRolls.current);
  };

  return (
    <NewPlayerView title="Ability Scores" errorOnPress={() => {}}>
      <StyledButton text="Re-Roll" onPress={reroll} />
      {rolls.map((roll, index) => (
        <InputText
          label={labels[index]}
          keyboardType="number-pad"
          placeholder="10 + bonus"
          value={
            isNaN(roll + bonuses[index])
              ? ''
              : (roll + bonuses[index]).toString()
          }
          onChangeText={text => onChangeText(index, text)}
        />
      ))}
      <StyledSubtitle>Race Bonuses</StyledSubtitle>
      {raceData?.ability_bonuses.map(bonus => (
        <StyledText>
          {bonus.ability_score.name}: {bonus.bonus}
        </StyledText>
      ))}
      <StyledSubtitle>Subrace Bonuses</StyledSubtitle>
      {subraceData?.ability_bonuses.map(bonus => (
        <StyledText>
          {bonus.ability_score.name}: {bonus.bonus}
        </StyledText>
      ))}
    </NewPlayerView>
  );
};
