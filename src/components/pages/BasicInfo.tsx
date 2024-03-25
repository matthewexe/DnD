import React, {useRef, useState} from 'react';
import {InputText} from '../ui/InputText.tsx';
import {Text, View} from 'react-native';
import {SelectMenu} from '../ui/SelectMenu.tsx';
import {useGetEndpointResourceQuery} from '../../services/api';
import {RaceIndexRequest} from '../../types/requests';
import {StyledButton} from '../ui/StyledButton';
import {StyleSheet} from 'react-native';
import {StyledSubtitle} from '../ui/texts/StyledSubtitle';
// import {Error} from './Error';
// import {Loading} from './Loading.tsx';
// TODO: LOADING/ERROR
import StyledTitle from '../ui/texts/StyledTitle';
import {SafeAreaView} from 'react-native-safe-area-context';
import {HomeScreenProps} from '../../routes/HomeProps.ts';
import {defaultPlayer} from '../../helper/default.ts';

type Props = HomeScreenProps<'NewPlayer_BasicInfo'>;

export const BasicInfo = ({navigation, route}: Props) => {
  const {
    data: raceData,
    isLoading: isLoadingRace,
    error: raceError,
  } = useGetEndpointResourceQuery('races');

  const gameId = route.params.gameId;
  const userData = useRef(defaultPlayer());

  // if (isLoadingRace) {
  //   return <Loading />;
  // }
  // TODO: Loading/Error
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
    <SafeAreaView>
      <StyledTitle>Basic Information</StyledTitle>
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
      <SelectMenu
        label="Character Race"
        defaultValue={userData.current.race}
        onSelect={item => {
          userData.current.race = item;
        }}
        data={raceData?.results ?? []}
      />
      <View style={styles.rowStyle}>
        <StyledButton text="<   Cancel" onPress={navigation.goBack} />
        <StyledButton
          text="Next   >"
          onPress={() => {
            navigation.navigate('NewPlayer_Race', {
              gameId: gameId,
              playerData: userData.current,
            });
          }}
        />
      </View>
    </SafeAreaView>
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
