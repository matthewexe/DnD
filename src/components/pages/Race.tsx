import React, {useState} from 'react';
import {InputText} from '../InputText';
import {Text, View} from 'react-native';
import {NewPlayerNavigationProps} from '../../routes/NewPlayerParamList';
import {SelectMenu} from '../SelectMenu';
import {useGetEndpointResourceQuery} from '../../services/api';
import {
  LanguageRequest,
  RaceIndexRequest,
  TraitsRequest,
  ProficiencyByRaceRequest,
} from '../../types/requests';
import {StyledButton} from '../ui/buttons/StyledButton';
import {StyledSubtitle} from '../ui/texts/StyledSubtitle';
import {StyledText} from '../ui/texts/StyledText';
import RaceComponent from '../race/RaceByIndex';

type Props = NewPlayerNavigationProps<'Class'>;

export const Race = ({navigation}: Props) => {
  const {data: languagesData, isLoading: isLoadingLanguage} =
    useGetEndpointResourceQuery('language');
  const {data: traitsData, isLoading: isLoadingTraits} =
    useGetEndpointResourceQuery('traits');
  const {data: raceData, isLoading: isLoadingRace} =
    useGetEndpointResourceQuery('races');
  const {data: proficiencyData, isLoading: isLoadingProficiency} =
    useGetEndpointResourceQuery('proficiency');

  const [language, setLanguage] = useState<LanguageRequest>('abyssal');
  const [trait, setTrait] = useState<TraitsRequest>('artificers-lore');
  const [proficiency, setProficiency] = useState<ProficiencyByRaceRequest>('');
  const [RaceBonus, setRaceBonus] = useState('');

  if (
    isLoadingRace ||
    isLoadingLanguage ||
    isLoadingTraits ||
    isLoadingProficiency
  ) {
    return <Text>Loading...</Text>;
  }
  return (
    <>
      <RaceComponent input={'dragonborn'} />
      <StyledSubtitle>Race</StyledSubtitle>
      <Text />
      <StyledText>Nome</StyledText>
      <StyledText>Velocità</StyledText>
      <StyledText>Statura</StyledText>
      <Text />
      <SelectMenu label="Languages" onSelect={item => {}} />
      {/* devo cambiare modello di input */}
      <Text />
      <Text />
      <SelectMenu
        label="Traits"
        onSelect={item => {
          setTrait(item.index);
        }}
        data={traitsData?.results ?? []}
      />
      <Text />
      <Text />
      <SelectMenu label="Race Bonus" onSelect={() => {}} />
      <Text />
      <Text />
      <SelectMenu
        label="Initial Proficiencies"
        onSelect={item => {
          setProficiency(item.index);
        }}
        data={proficiencyData?.results ?? []}
      />
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
