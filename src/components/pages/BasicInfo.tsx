/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { InputText } from '../InputText';
import { Text, View } from 'react-native';
import { NewPlayerNavigationProps } from '../../routes/NewPlayerParamList';
import { SelectMenu } from '../SelectMenu';
import { useGetEndpointResourceQuery } from '../../services/api';
import { RaceIndexRequest } from '../../types/requests';
import { StyledButton } from '../ui/StyledButton';
import { StyleSheet } from 'react-native';
import { StyledSubtitle } from '../ui/texts/StyledSubtitle';
import { Error } from './Error';
import { Loading } from './Loading.tsx';
import StyledTitle from '../ui/texts/StyledTitle';


type Props = NewPlayerNavigationProps<'BasicInfo'>;

export const BasicInfo = ({ navigation }: Props) => {
  const {
    data: raceData,
    isLoading: isLoadingRace,
    error: raceError,
  } = useGetEndpointResourceQuery('races');

  const [playerName, setPlayerName] = useState('');
  const [characterName, setCharacterName] = useState('');
  const [raceState, setRace] = useState<RaceIndexRequest>('dragonborn');

  if (isLoadingRace) {
    return <Loading />;
  }
  if (raceError) {
    return (
      <View>
        <Text />
        <StyledTitle>Watch out!</StyledTitle>
        <Text>An Error has occured</Text>
      </View>
    );
  }

  return (
    <>
      <StyledTitle>Basic Information</StyledTitle>
      <StyledSubtitle>Let's Begin</StyledSubtitle>

      <InputText
        label="Player Name"
        placeholder="New Player"
        value={playerName}
        onChangeText={input => {
          setPlayerName(input);
        }}
      />
      <Text />
      <InputText
        disabled={false}
        label="Character Name"
        placeholder="NPC"
        value={characterName}
        onChangeText={input => {
          setCharacterName(input);
        }}
      />
      <Text />
      <Text />
      <SelectMenu
        label="Character Race"
        onSelect={item => {
          setRace(item.index);
        }}
        data={raceData?.results ?? []}
      />
      <Text />
      <Text />
      <View style={styles.rowStyle}>
        <StyledButton text="<   Cancel" onPress={navigation.goBack} />
        <StyledButton
          text="Next   >"
          onPress={() => {
            navigation.navigate('RaceInfo', {
              player: playerName,
              character: characterName,
              race: raceState,
            });
          }}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  rowStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    padding: 13,
    margin: -3,
  },
});
