import React from 'react';
import {Text} from 'react-native';
import {useGetRacesByIndexQuery} from '../../services/api';
import {RaceIndexRequest, TraitsRequest} from '../../types/requests';
import {ProficiencyReferenceOption} from '../../types/responses';
import ExportTrait from './Trait';
import {LabeledValue} from '../LabeledValue';
import SubraceByRace from './CheckSubraceByIndex';
import TraitsComponent from './TraitsByRace';

export default function RaceComponent({input}: {input: RaceIndexRequest}) {
  const {data, error, isLoading, isFetching} = useGetRacesByIndexQuery({
    index: input,
  });

  if (error) return <Text>error in fetching</Text>;
  if (isLoading) return <Text>loading...</Text>;
  if (isFetching) return <Text>wait for response from the server</Text>;
  //input per verificare le sottorazze.

  return (
    <>
      <LabeledValue label="Name:" value={data?.name ?? 'race not available'} />
      <Text>Speed:</Text>
      <Text>{data?.speed ?? 'speed not available'} piedi</Text>
      {/*<Text>{convertiPiediInMetri(data?.speed ?? 0)} metri</Text> */}

      <LabeledValue
        label="Stature:"
        value={data?.size ?? 'stature not available'}
      />
      <Text>Lenguages:</Text>
      {data?.languages?.map((language, index) => (
        <Text key={index}>{language.name}</Text>
      ))}
      <Text>Traits:</Text>
      {data?.traits?.map((traits, index) => (
        <>
          <Text key={index}>{traits.name}</Text>
          <ExportTrait input={traits.index as TraitsRequest} />
        </>
      ))}
      <Text>Race Bonuses:</Text>
      {data?.ability_bonuses.map((choice, index) => (
        <Text key={index}>
          {choice.ability_score.name ?? 'not available'} +{choice.bonus}
        </Text>
      ))}
      {/*NB: per ogni razza ci sono ipoteticamente dei bonus da aggiungere su determinate caratteriistiche "index"  di un certo amount "bonus". */}

      <Text>Proficiencies:</Text>
      {data?.starting_proficiencies?.map((proficiency, index) => (
        <Text key={index}>{proficiency.name}</Text>
      )) ?? <Text>Starting skills not available</Text>}

      <Text>Traits of the breed:</Text>
      <TraitsComponent input={input} />
      <Text>
        Available options: {data && data.starting_proficiency_options?.choose}
      </Text>
      <LabeledValue
        label={'Available options:'}
        value={data?.starting_proficiency_options?.choose ?? 0}
      />
      {data && data.starting_proficiency_options?.desc}
      {data?.starting_proficiency_options?.from.options.map((option, index) => (
        <Text key={index}>
          {(option as ProficiencyReferenceOption).item.name}
        </Text>
      )) ?? <Text>Proficiency options not available</Text>}

      {/*INIZIO DESCRIZIONE (STRINGHE) la parte meno importante a livello implementativo. */}
      <Text>Race description:</Text>
      <LabeledValue
        label="Language:"
        value={data?.language_desc ?? 'Language description not available'}
      />
      <LabeledValue
        label="Your racial alignment:"
        value={data?.alignment ?? 'Alignment not available'}
      />
      <LabeledValue
        label="The tendency of your species:"
        value={data?.age ?? 'Age description not available'}
      />
      <LabeledValue
        label="The size of your species:"
        value={data?.size_description ?? 'Height description not available'}
      />
      <SubraceByRace input={input} />
    </>
  );
}
