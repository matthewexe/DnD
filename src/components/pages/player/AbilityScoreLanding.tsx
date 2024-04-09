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
import {InputText} from '../../ui/InputText';
import {StyledSubtitle} from '../../ui/texts/StyledSubtitle';
import {StyledText} from '../../ui/texts/StyledText';
import {StyleSheet, View} from 'react-native';
import {customTheme2} from '../../../constants/theme';
import {calculateModifier} from '../../../helper/calculateModifier';

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
      <View style={[styles.containerButton]}>
        <StyledButton
          text="Re-Roll"
          icon="dice"
          iconSize={22}
          onPress={reroll}
        />
      </View>
      {rolls.map((roll, index) => (
        <View
          style={[
            styles.abilityContainer,
            {flexDirection: 'column', width: 100},
          ]}>
          <StyledText>{labels[index]}</StyledText>
          <View style={[styles.abilityContainer]}>
            <InputText
              style={[styles.abilityScoreInput]}
              label={''}
              keyboardType="number-pad"
              placeholder="10 + bonus"
              value={
                isNaN(roll + bonuses[index])
                  ? ''
                  : (roll + bonuses[index]).toString()
              }
              onChangeText={text => onChangeText(index, text)}
            />
            <View style={[styles.modifierContainer]}>
              <StyledText style={[styles.modifierText]}>
                {isNaN(calculateModifier(roll)) ? '' : calculateModifier(roll)}
              </StyledText>
            </View>
          </View>
        </View>
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
      <View style={[styles.containerButton]}>
        <StyledButton
          text="Next"
          icon="arrow-right"
          onPress={() => {
            navigation.navigate('NewPlayer_Equip', {
              gameId: route.params.gameId,
              playerData: {
                ...userData.current,
                ability_scores: refRolls.current.map(
                  (roll, index) => roll + refBonuses.current[index],
                ),
              },
            });
          }}
        />
      </View>
    </NewPlayerView>
  );
};

const styles = StyleSheet.create({
  abilityContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginVertical: 10,
  },
  abilityScoreInput: {
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    width: 50,
    paddingHorizontal: 15,
  },
  modifierContainer: {
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  modifierText: {
    padding: 10,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderRadius: 50,
    borderColor: customTheme2.colors.primary,
  },
  containerButton: {
    width: 120,
    marginVertical: 20,
  },
});
