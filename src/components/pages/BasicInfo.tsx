import React, {useState} from 'react';
import {InputText} from '../InputText';
import {Text, View} from 'react-native';
import {NewPlayerNavigationProps} from '../../routes/NewPlayerParamList';
import {SelectMenu} from '../SelectMenu';
import {useGetEndpointResourceQuery} from '../../services/api';
import {RaceIndexRequest} from '../../types/requests';
import {StyledButton} from '../ui/buttons/StyledButton';
import {StyleSheet} from 'react-native';
import {StyledText} from '../ui/texts/StyledText';
import {StyledSubtitle} from '../ui/texts/StyledSubtitle';
import {Error} from './Error';
import {Loading} from './Loading';

type Props = NewPlayerNavigationProps<'BasicInfo'>;

export const BasicInfo = ({navigation}: Props) => {
  const {
    data: raceData,
    isLoading: isLoadingRace,
    error: raceError,
  } = useGetEndpointResourceQuery('races');

  const [player, setPlayerName] = useState('s');
  const [character, setCharacterName] = useState('i');
  const [raceState, setRace] = useState<RaceIndexRequest>('dragonborn');

  if (isLoadingRace) {
    return <Text>Loading...</Text>;
    //<View>navigation.navigate('Loading')</View>;
  }
  if (raceError) {
    return <View>navigation.navigate('Error')</View>;
  }

  return (
    <>
      <StyledSubtitle>Basic Information</StyledSubtitle>
      <View style={styles.rowStyle}>
        <StyledText>n</StyledText>
        <Text
          style={{
            width: 110,
          }}
        />
        <StyledButton text="< Cancel" onPress={navigation.goBack} />
      </View>
      <Text />
      <InputText
        label="Player Name"
        placeholder="Enter Player Name"
        onChangeText={input => {
          setPlayerName(input);
        }}
      />
      <Text />
      <InputText
        label="Character Name"
        placeholder="Enter Character Name"
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
      <View style={{alignSelf: 'center'}}>
        <StyledButton
          text="Next"
          onPress={() => {
            navigation.navigate('RaceInfo', {
              player: player,
              character: character,
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
  },
});
