import React, {useState} from 'react';
import {InputText} from '../ui/InputText';
import {StyleSheet, Text, View} from 'react-native';
import {NewPlayerNavigationProps} from '../../routes/NewPlayerParamList';
import {SelectMenu} from '../ui/SelectMenu';
import {useGetEndpointResourceQuery} from '../../services/api';
import {
  LanguageRequest,
  RaceIndexRequest,
  TraitsRequest,
  ProficiencyByRaceRequest,
} from '../../types/requests';
import {StyledButton} from '../ui/StyledButton';
import {StyledSubtitle} from '../ui/texts/StyledSubtitle';
import {StyledText} from '../ui/texts/StyledText';
import {Route} from '@react-navigation/native';
import {StyledTitle} from '../ui/texts/StyledTitle';
import {Loading} from './Loading';

type Props = NewPlayerNavigationProps<'RaceInfo'>;

export const RaceInfo = ({route, navigation}: Props) => {
  const {thisRace} = route.params;
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
  const [proficiency, setProficiency] = useState<ProficiencyByRaceRequest>('a');
  const [RaceBonus, setRaceBonus] = useState('');

  if (
    isLoadingRace ||
    isLoadingLanguage ||
    isLoadingTraits ||
    isLoadingProficiency
  ) {
    return <Loading />;
  }
  return (
    <>
      <StyledTitle>Race Information</StyledTitle>
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
      <View style={styles.rowStyle}>
        <StyledButton
          text="<   Back"
          onPress={() => {
            navigation.goBack();
          }}
        />
        <StyledButton
          text="Next   >"
          onPress={() => {
            navigation.navigate('ClassChoice', {
              language: language,
              traits: traitsData,
              level: 1,
              exp: 3,
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
