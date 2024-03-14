import React, {useState} from 'react';
import {InputText} from './InputText';
import {Button, Text} from 'react-native';
import {NewPlayerNavigationProps} from '../routes/NewPlayerParamList';
import {SelectMenu} from './SelectMenu';
import {useGetEndpointResourceQuery} from '../services/api';
import {ClassIndexRequest, RaceIndexRequest} from '../types/requests';

type Props = NewPlayerNavigationProps<'BasicInfo'>;

export const BasicInfo = ({navigation}: Props) => {
  const {data: classData, isLoading: isLoadingClass} =
    useGetEndpointResourceQuery('classes');
  const {data: raceData, isLoading: isLoadingRace} =
    useGetEndpointResourceQuery('races');

  const [classState, setClass] = useState<ClassIndexRequest>('barbarian');
  const [raceState, setRace] = useState<RaceIndexRequest>('dragonborn');

  if (isLoadingClass || isLoadingRace) {
    return <Text>Loading...</Text>;
  }

  return (
    <>
      <InputText label="Player Name" placeholder="Enter Player Name" />
      <InputText label="Character Name" placeholder="Enter Character Name" />
      <InputText label="Character Level" placeholder="Enter Character Level" />
      <InputText label="Character XP" placeholder="Enter Character XP" />
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
          navigation.navigate('Class', {
            class: classState,
            race: raceState,
            level: 1,
            userData: {class: classState, race: raceState},
          });
        }}
      />
    </>
  );
};
