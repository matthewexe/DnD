import React, {useRef, useState} from 'react';
import {InputText} from '../../ui/InputText.tsx';
import {Text, View} from 'react-native';
import {SelectMenu} from '../../ui/SelectMenu.tsx';
import {useGetEndpointResourceQuery} from '../../../services/api.ts';
import {StyledButton} from '../../ui/StyledButton.tsx';
import {StyleSheet} from 'react-native';
import {StyledSubtitle} from '../../ui/texts/StyledSubtitle.tsx';
import StyledTitle from '../../ui/texts/StyledTitle.tsx';
import {HomeScreenProps} from '../../../routes/HomeProps.ts';
import {defaultPlayer} from '../../../helper/default.ts';
import {levelFromXP, xpFromLevel} from '../../../utils/LevelAndXp.ts';
import {NewPlayerView} from '../../../views/NewPlayerView.tsx';

type Props = HomeScreenProps<'NewPlayer_BasicInfo'>;

export const BasicInfo = ({navigation, route}: Props) => {
  const {
    data: raceData,
    isLoading: isLoadingRace,
    error: raceError,
  } = useGetEndpointResourceQuery('races');
  const {
    data: classData,
    isLoading: isLoadingClass,
    error: classError,
  } = useGetEndpointResourceQuery('classes');

  const {data: alignmentData, isLoading: isLoadingAlignment} =
    useGetEndpointResourceQuery('alignments');

  const gameId = route.params.gameId;
  const userData = useRef(defaultPlayer());
  const [level, setLevel] = useState(userData.current.level.toString());
  const [experience, setExperience] = useState(
    userData.current.experience.toString(),
  );

  const levelTimeout = useRef<NodeJS.Timeout | null>(null);
  const experienceTimeout = useRef<NodeJS.Timeout | null>(null);

  const changeExperience = (value: string) => {
    clearTimeout(experienceTimeout.current as NodeJS.Timeout);

    setExperience(value);
    if (value && value.length > 0 && value.match(/^\d+$/)) {
      const newValue = Number.parseInt(value, 10);
      userData.current.experience = newValue;
      experienceTimeout.current = setTimeout(() => {
        setLevel(levelFromXP(newValue).toString());
        userData.current.level = levelFromXP(newValue);
      }, 1000);
    }
  };

  const changeLevel = (value: string) => {
    clearTimeout(levelTimeout.current as NodeJS.Timeout);

    setLevel(value);

    if (value && value.length > 0 && value.match(/^\d+$/)) {
      const newValue = Number.parseInt(value, 10);
      userData.current.level = newValue;
      levelTimeout.current = setTimeout(() => {
        setExperience(xpFromLevel(newValue).toString());
        userData.current.experience = xpFromLevel(newValue);
      }, 1000);
    }
  };

  if (raceError || classError) {
    return (
      <View>
        <Text />
        <StyledTitle>Watch out!</StyledTitle>
        <Text>An Error has occured</Text>
      </View>
    );
  }

  return (
    <NewPlayerView
      title="Basic Info"
      loading={isLoadingRace || isLoadingClass || isLoadingAlignment}
      error={undefined}
      errorOnPress={() => {}}>
      <StyledSubtitle>Let's Begin</StyledSubtitle>

      {/* Player Name */}
      <InputText
        label="Player Name"
        placeholder="NPC"
        onChangeText={input => {
          userData.current.player_name = input;
        }}
      />

      {/* Character Name */}
      <InputText
        disabled={false}
        label="Character Name"
        placeholder="NPC"
        onChangeText={input => {
          userData.current.character_name = input;
        }}
      />
      {/* Background */}
      <InputText
        label="Background"
        placeholder="Background"
        value={experience}
        onChangeText={input => {
          userData.current.background = input;
        }}
      />

      {/* Character */}
      <InputText
        label="Character Level"
        placeholder="1"
        value={level}
        keyboardType="number-pad"
        onChangeText={input => {
          changeLevel(input);
        }}
      />
      <InputText
        label="Character Experience"
        placeholder="0"
        value={experience}
        keyboardType="number-pad"
        onChangeText={input => {
          changeExperience(input);
        }}
      />

      {/* Race */}
      <SelectMenu
        label="Character Race (Default: Dragonborn)"
        defaultValue={userData.current.race}
        onSelect={item => {
          userData.current.race = item.index;
        }}
        data={raceData?.results ?? []}
      />

      {/* Class */}
      <SelectMenu
        label="Character Class (Default: Barbarian)"
        defaultValue={userData.current.class}
        onSelect={item => {
          userData.current.class = item.index;
        }}
        data={classData?.results ?? []}
      />

      {/* Alignment */}
      <SelectMenu
        label="Alignment"
        defaultValue={userData.current.alignment}
        onSelect={item => {
          userData.current.alignment = item.index;
        }}
        data={alignmentData?.results ?? []}
      />

      {/* Buttons */}
      <View style={styles.rowStyle}>
        <StyledButton
          text="Cancel"
          icon="arrow-left"
          iconPosition="left"
          onPress={navigation.goBack}
        />
        <StyledButton
          text="Next"
          icon="arrow-right"
          onPress={() => {
            let player_name = userData.current.player_name;

            if (player_name === '') {
              player_name = defaultPlayer().player_name;
            }

            let character_name = userData.current.character_name;
            if (character_name === '') {
              character_name = defaultPlayer().character_name;
            }

            let level_user = userData.current.level;
            let experience_user = userData.current.experience;
            if (level_user <= 0 || experience_user <= 0) {
              experience_user = defaultPlayer().experience;
              level_user = defaultPlayer().level;
            }

            navigation.navigate('NewPlayer_Race', {
              gameId: gameId,
              playerData: {
                ...userData.current,
                player_name: player_name,
                character_name: character_name,
                level: level_user,
                experience: experience_user,
              },
            });
          }}
        />
      </View>
    </NewPlayerView>
  );
};

const styles = StyleSheet.create({
  rowStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    padding: 13,
    margin: 0,
    marginVertical: 5,
  },
});
