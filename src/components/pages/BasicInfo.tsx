import React, {useState} from 'react';
import {InputText} from '../InputText';
import {Text} from 'react-native';
import {NewPlayerNavigationProps} from '../../routes/NewPlayerParamList';
import {SelectMenu} from '../SelectMenu';
import {useGetEndpointResourceQuery} from '../../services/api';
import {RaceIndexRequest} from '../../types/requests';
import {StyledButton} from '../ui/StyledButton';

type Props = NewPlayerNavigationProps<'BasicInfo'>;

export const BasicInfo = ({navigation}: Props) => {
  const {data: raceData, isLoading: isLoadingRace} =
    useGetEndpointResourceQuery('races');

  const [raceState, setRace] = useState<RaceIndexRequest>('dragonborn');

  if (isLoadingRace) {
    return <Text>Loading...</Text>;
  }

  return (
    <>
      <Text />
      <InputText label="Player Name" placeholder="Enter Player Name" />
      <Text />
      <InputText label="Character Name" placeholder="Enter Character Name" />
      <Text />
      <SelectMenu
        label="Character Race"
        onSelect={item => {
          setRace(item.index);
        }}
        data={raceData?.results ?? []}
      />
      <Text />
      <StyledButton
        text="Next"
        onPress={() => {
          navigation.navigate('Race', {
            class: 'barbarian',
            race: raceState,
            level: 1,
            userData: {class: undefined, race: raceState},
          });
        }}
      />
    </>
  );
};
