import React, {useRef, useState} from 'react';
import {InputText} from '../../ui/InputText.tsx';
import {Text, View} from 'react-native';
import {SelectMenu} from '../../ui/SelectMenu.tsx';
import {useGetEndpointResourceQuery} from '../../../services/api.ts';
import {StyledButton} from '../../ui/StyledButton.tsx';
import {StyleSheet} from 'react-native';
import {StyledSubtitle} from '../../ui/texts/StyledSubtitle.tsx';
// import {Error} from './Error';
// import {Loading} from './Loading.tsx';
// TODO: LOADING/ERROR
import StyledTitle from '../../ui/texts/StyledTitle.tsx';
import {SafeAreaView} from 'react-native-safe-area-context';
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
    <NewPlayerView title="Basic Info" errorOnPress={() => {}}>
      <StyledSubtitle>Let's Begin</StyledSubtitle>

      <InputText
        label="Player Name"
        placeholder="New Player"
        value={userData.current.player_name}
        onChangeText={input => {
          userData.current.player_name = input;
        }}
      />
      <InputText
        disabled={false}
        label="Character Name"
        placeholder="NPC"
        value={userData.current.character_name}
        onChangeText={input => {
          userData.current.character_name = input;
        }}
      />
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
      <SelectMenu
        label="Character Race"
        defaultValue={userData.current.race}
        onSelect={item => {
          userData.current.race = item.index;
        }}
        data={raceData?.results ?? []}
      />
      <SelectMenu
        label="Character Class"
        defaultValue={userData.current.class}
        onSelect={item => {
          userData.current.class = item.index;
        }}
        data={classData?.results ?? []}
      />
      {/* TODO: Aggiungi allineamento */}
      <View style={styles.rowStyle}>
        <StyledButton text="<   Cancel" onPress={navigation.goBack} />
        <StyledButton
          text="Next   >"
          onPress={() => {
            console.log(userData.current);
            navigation.navigate('NewPlayer_Race', {
              gameId: gameId,
              playerData: userData.current,
            });
          }}
        />
      </View>
    </NewPlayerView>
  );
};

// TODO: Adjust Navigation and params

const styles = StyleSheet.create({
  rowStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    padding: 13,
    margin: -3,
  },
});
