import React, {useState} from 'react';
import {InputText} from '../InputText';
import {Text} from 'react-native';
import {NewPlayerNavigationProps} from '../../routes/NewPlayerParamList';
import {SelectMenu} from '../SelectMenu';
import {useGetEndpointResourceQuery} from '../../services/api';
import {ClassIndexRequest} from '../../types/requests';
import {StyledButton} from '../ui/StyledButton';

type Props = NewPlayerNavigationProps<'Class'>;

export const Class = ({navigation}: Props) => {
  const {data: classData, isLoading: isLoadingClass} =
    useGetEndpointResourceQuery('classes');

  const [classState, setClass] = useState<ClassIndexRequest>('barbarian');

  if (isLoadingClass) {
    return <Text>Loading...</Text>;
  }
  return (
    <>
      <InputText label="Character Level" placeholder="Enter Character Level" />
      <Text />
      <InputText label="Character XP" placeholder="Enter Character XP" />
      <Text />
      <SelectMenu
        label="Character Class"
        onSelect={item => {
          setClass(item.index);
        }}
        data={classData?.results ?? []}
      />
      <Text />
      <StyledButton
        text="Next"
        onPress={() => {
          navigation.navigate('Class', {
            class: classState,
            level: 1,
            userData: {class: classState},
          });
        }}
      />
    </>
  );
};
