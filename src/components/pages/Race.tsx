import React, {useState} from 'react';
import {InputText} from '../InputText';
import {Text} from 'react-native';
import {NewPlayerNavigationProps} from '../../routes/NewPlayerParamList';
import {SelectMenu} from '../SelectMenu';
import {useGetEndpointResourceQuery} from '../../services/api';
import {ClassIndexRequest} from '../../types/requests';
import {StyledButton} from '../ui/StyledButton';

type Props = NewPlayerNavigationProps<'Class'>;

export const Race = ({navigation}: Props) => {
  const {data: classData, isLoading: isLoadingClass} =
    useGetEndpointResourceQuery('classes');

  const [classState, setClass] = useState<ClassIndexRequest>('barbarian');

  if (isLoadingClass) {
    return <Text>Loading...</Text>;
  }
  return (
    <>
      <StyledButton
        text="Next"
        onPress={() => {
          navigation.navigate('Class', {
            class: 'barbarian',
            race: 'dragonborn',
            level: 1,
            userData: {class: undefined, race: undefined},
          });
        }}
      />
    </>
  );
};
