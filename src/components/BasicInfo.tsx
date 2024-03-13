import React from 'react';
import {InputText} from './InputText';
import {Button, Text} from 'react-native';
import {NewPlayerNavigationProps} from '../routes/NewPlayerParamList';
import {SelectMenu} from './SelectMenu';
import {useGetEndpointResourceQuery} from '../services/api';

type Props = NewPlayerNavigationProps<'BasicInfo'>;

export const BasicInfo = ({navigation}: Props) => {
  const {classData, isLoadingClass} = useGetEndpointResourceQuery('classes');
  const {raceData, isLoadingRace} = useGetEndpointResourceQuery('races');

  if (isLoadingClass || isLoadingRace) {
    return <Text>Loading...</Text>;
  }

  return (
    <>
      <InputText label="Player Name" placeholder="Enter Player Name" />
      <InputText label="Character Name" placeholder="Enter Character Name" />
      <InputText label="Character Level" placeholder="Enter Character Level" />
      <InputText label="Character XP" placeholder="Enter Character XP" />
      <SelectMenu label="Character Class" data={classData} />
      <SelectMenu label="Character Race" data={raceData} />
      <Button
        title="Next"
        onPress={() => {
          navigation.navigate('Class', {
            class: 'barbarian',
            race: 'human',
            level: 1,
            userData: {},
          });
        }}
      />
    </>
  );
};
