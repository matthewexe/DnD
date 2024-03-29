import React, {useEffect, useRef} from 'react';
import {Text, View} from 'react-native';
import ExportTrait from './Trait';
import SubraceByRace from './CheckSubraceByIndex';
import TraitsComponent from './TraitsByRace';
import {HomeScreenProps} from '../../../../routes/HomeProps';
import {useGetRacesByIndexQuery} from '../../../../services/api';
import {RaceIndexRequest, TraitsRequest} from '../../../../types/requests';
import {StyledSubtitle} from '../../../ui/texts/StyledSubtitle';
import {StyledText} from '../../../ui/texts/StyledText';
import {StyledLabeledValue} from '../../../ui/texts/StyledLabeledValue';
import {StyledButton} from '../../../ui/StyledButton';
import {NewPlayerView} from '../../../../views/NewPlayerView';
import {SelectableTable} from '../../../table/SelectableTable';
import {ProficiencyConverter} from '../../../../helper/fieldConverter';

type Props = HomeScreenProps<'NewPlayer_Race'>;

export default function RaceComponent({route, navigation}: Props) {
  const input = route.params.playerData.race as RaceIndexRequest;
  const userData = useRef(route.params.playerData);
  const proficiencies = useRef<string[]>([]);
  const [startingOptions, setStartingOptions] = React.useState<
    ProficiencyConverter.NamedReference[]
  >([]);

  const {data, error, isLoading, isFetching} = useGetRacesByIndexQuery({
    index: input,
  });

  useEffect(() => {
    if (data) {
      setStartingOptions(
        ProficiencyConverter.ProficiencyOptionsToIndex(
          data.starting_proficiency_options?.from.options ?? [],
        ),
      );
    }
  }, [data]);

  if (error) return <Text>error in fetching</Text>;
  if (isLoading) return <Text>loading...</Text>;
  if (isFetching) return <Text>wait for response from the server</Text>;
  //input per verificare le sottorazze.

  return (
    <NewPlayerView
      title="Race"
      loading={false}
      error={undefined}
      errorOnPress={() => {}}>
      <View>
        <StyledLabeledValue
          label="Name"
          value={data?.name ?? 'race not available'}
        />

        <StyledSubtitle>Speed</StyledSubtitle>
        <StyledText>{data?.speed ?? 'speed not available'} piedi</StyledText>
        {/* TODO: converti piedi in metri */}
        <StyledText>{data?.speed ?? 0} metri</StyledText>

        <StyledLabeledValue
          label="Stature"
          value={data?.size ?? 'stature not available'}
        />
        <StyledText>Languages:</StyledText>
        {data?.languages?.map((language, index) => (
          <Text key={index}>{language.name}</Text>
        ))}
        <StyledSubtitle>Traits:</StyledSubtitle>
        {data?.traits?.map(traits => (
          <>
            <ExportTrait input={traits.index as TraitsRequest} />
          </>
        ))}
        <StyledSubtitle>Race Bonuses</StyledSubtitle>
        {data?.ability_bonuses.map((choice, index) => (
          <StyledText key={index}>
            {choice.ability_score.name ?? 'not available'} +{choice.bonus}
          </StyledText>
        ))}
        {/*NB: per ogni razza ci sono ipoteticamente dei bonus da aggiungere su determinate caratteriistiche "index"  di un certo amount "bonus". */}

        <StyledSubtitle>Proficiencies</StyledSubtitle>
        {data?.starting_proficiencies?.map((proficiency, index) => (
          <StyledText key={index}>{proficiency.name}</StyledText>
        )) ?? <StyledText>Starting skills not available</StyledText>}

        <StyledSubtitle>Optional Proficiencies</StyledSubtitle>
        {data && data.starting_proficiency_options && (
          <>
            <StyledText>
              Available options:{' '}
              {data && data.starting_proficiency_options?.choose}
            </StyledText>
            <SelectableTable
              head={['Description']}
              data={startingOptions.map(value => [value.name])}
              max_selectbale={data.starting_proficiency_options.choose}
              onValueChange={value => {
                proficiencies.current = value.map(
                  stringArr => startingOptions[stringArr].index,
                );
              }}
            />
          </>
        )}
        <StyledSubtitle>Traits of the breed:</StyledSubtitle>
        <TraitsComponent input={input} />

        {/* TODO: tabella di scelta per le abilità iniziali
      
      <StyledLabeledValue
        label={'Available options:'}
        value={data?.starting_proficiency_options?.choose ?? 0}
      />
      {data && data.starting_proficiency_options?.desc}
      {data?.starting_proficiency_options?.from.options.map((option, index) => (
        <Text key={index}>
          {(option as ProficiencyReferenceOption).item.name}
        </Text>
      )) ?? <Text>Proficiency options not available</Text>} */}

        {/*INIZIO DESCRIZIONE (STRINGHE) la parte meno importante a livello implementativo. */}
        <StyledSubtitle>Race description:</StyledSubtitle>
        <StyledLabeledValue
          label="Language"
          value={data?.language_desc ?? 'Language description not available'}
        />
        <StyledLabeledValue
          label="Your racial alignment"
          value={data?.alignment ?? 'Alignment not available'}
        />
        <StyledLabeledValue
          label="The tendency of your species"
          value={data?.age ?? 'Age description not available'}
        />
        <StyledLabeledValue
          label="The size of your species"
          value={data?.size_description ?? 'Height description not available'}
        />
        <SubraceByRace
          input={input}
          onSelectedValue={item => {
            userData.current.subrace = item;
          }}
        />
      </View>
      <View style={[{alignItems: 'center', padding: 30}]}>
        <StyledButton
          text="Next"
          onPress={() => {
            proficiencies.current
              .filter(item => item !== undefined)
              .flat()
              .forEach(item => {
                userData.current.proficiencies.push(item);
              });
            navigation.navigate('NewPlayer_Class', {
              gameId: route.params.gameId,
              playerData: userData.current,
            });
          }}
        />
      </View>
    </NewPlayerView>
  );
}
