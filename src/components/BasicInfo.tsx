import React, {useState} from 'react';
import {InputText} from './InputText';
import {Button, Text} from 'react-native';
import {SelectMenu} from './SelectMenu';
import {useGetEndpointResourceQuery} from '../services/api';
import {ClassIndexRequest, RaceIndexRequest} from '../types/requests';
import {HomeStackScreenProps} from '../routes/HomeParamList';
import {Player} from '../types/db';

type Props = HomeStackScreenProps<'NewPlayer_BasicInfo'>;

export const BasicInfo = ({navigation, route}: Props) => {
  const userData: Player = {
    id: 0,
    player_name: '',
    character_name: '',
    alignment: '',
    level: 0,
    experience: 0,
    ability_scores: [],
    saving_throws: [],
    ability_choices: [],
    race: '',
    class: '',
    ca: 0,
    speed: 0,
    money: [],
    ps: 0,
    hit_die: 0,
    weapon: [],
    armor: [],
    spells: [],
    traits: [],
    proficincies: [],
    features: [],
    subclass: '',
    game: route.params.gameId,
  };
  const {data: classData, isLoading: isLoadingClass} =
    useGetEndpointResourceQuery('classes');
  const {data: raceData, isLoading: isLoadingRace} =
    useGetEndpointResourceQuery('races');

  const [classState, setClass] = useState<ClassIndexRequest>('barbarian');
  const [raceState, setRace] = useState<RaceIndexRequest>('dragonborn');
  const [playerName, setPlayerName] = useState('');
  const [characterName, setCharacterName] = useState('');
  const [characterLevel, setCharacterLevel] = useState(0);
  const [characterXP, setCharacterXP] = useState(0);

  if (isLoadingClass || isLoadingRace) {
    return <Text>Loading...</Text>;
  }

  return (
    <>
      <InputText
        label="Player Name"
        placeholder="Enter Player Name"
        onChangeText={setPlayerName}
      />
      <InputText
        label="Character Name"
        placeholder="Enter Character Name"
        onChangeText={setCharacterName}
      />
      <InputText
        keyboardType="number-pad"
        label="Character Level"
        placeholder="Enter Character Level"
        onChangeText={value => setCharacterLevel(value as unknown as number)}
      />
      <InputText
        keyboardType="number-pad"
        label="Character XP"
        placeholder="Enter Character XP"
        onChangeText={value => setCharacterXP(value as unknown as number)}
      />
      <SelectMenu
        label="Character Class"
        onSelect={item => {
          setClass(item.index);
        }}
        data={classData?.results ?? []}
      />
      <SelectMenu
        label="Character Race"
        onSelect={item => {
          setRace(item.index);
        }}
        data={raceData?.results ?? []}
      />
      <Button
        title="Next"
        onPress={() => {
          navigation.navigate('NewPlayer_Race', {
            ...userData,
            player_name: playerName,
            character_name: characterName,
            level: characterLevel,
            experience: characterXP,
            class: classState,
            race: raceState,
          });
        }}
      />
    </>
  );
};
