import React, {useState} from 'react';
import {InputText} from '../InputText';
import {Text, View} from 'react-native';
import {NewPlayerNavigationProps} from '../../routes/NewPlayerParamList';
import {SelectMenu} from '../SelectMenu';
import {useGetEndpointResourceQuery} from '../../services/api';
import {ClassIndexRequest} from '../../types/requests';
import {StyledButton} from '../ui/buttons/StyledButton';
import {StyledSubtitle} from '../ui/texts/StyledSubtitle';
import {StyledText} from '../ui/texts/StyledText';
import {StyledMenu} from '../ui/StyledMenu';

type Props = NewPlayerNavigationProps<'Class'>;

export const Race = ({navigation}: Props) => {
  const {data: raceData, isLoading: isLoadingClass} =
    useGetEndpointResourceQuery('classes');

  const [classState, setClass] = useState<ClassIndexRequest>('barbarian');

  if (isLoadingClass) {
    return <Text>Loading...</Text>;
  }
  return (
    <>
      <StyledSubtitle>Race</StyledSubtitle>
      <Text />
      <StyledText>Nome</StyledText>
      <StyledText>Velocità</StyledText>
      <StyledText>Statura</StyledText>
      <Text />
      <SelectMenu label="Languages" onSelect={() => {}} />
      {/* mancano i data e le informazioni */}
      <Text />
      <Text />
      <SelectMenu label="Traits" onSelect={() => {}} />
      <Text />
      <Text />
      <SelectMenu label="Race Bonus" onSelect={() => {}} />
      <Text />
      <Text />
      <SelectMenu label="Initial Proficiencies" onSelect={() => {}} />
      <Text />
      <Text />
      <View style={{alignSelf: 'center'}}>
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
      </View>
    </>
  );
};
