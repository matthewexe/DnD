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

  if (isFetching) <Text>attendi risposta dal server</Text>;
  //input per verificare le sottorazze.

  return (
    <>
      <LabeledValue
        label="Nome:"
        value={data?.name ?? 'razza non disponibile'}
      />
      <Text>Velocità:</Text>
      <Text>{data?.speed ?? 'velocità non disponibile'} piedi</Text>
      <Text>{convertiPiediInMetri(data?.speed ?? 0)} metri</Text>

      <LabeledValue
        label="Statura:"
        value={data?.size ?? 'dimensione non disponibile'}
      />
      <Text>Linguaggi:</Text>
      {data?.languages?.map((language, index) => (
        <Text key={index}>{language.name}</Text>
      ))}
      <Text>Tratti:</Text>
      {data?.traits?.map((traits, index) => (
        <>
          <Text key={index}>{traits.name}</Text>
          <ExportTrait input={traits.index as TraitsRequest} />
        </>
      ))}
      <Text>Bonus della razza:</Text>
      {data?.ability_bonuses.map((choice, index) => (
        <Text key={index}>
          {choice.ability_score.name ?? 'non disponibile'} +{choice.bonus}
        </Text>
      ))}
      {/*NB: per ogni razza ci sono ipoteticamente dei bonus da aggiungere su determinate caratteriistiche "index"  di un certo amount "bonus". */}

      <Text>StarterKit:</Text>
      {data?.starting_proficiencies?.map((proficiency, index) => (
        <Text key={index}>{proficiency.name}</Text>
      )) ?? <Text>Proficienze iniziali non disponibili</Text>}

      <Text>I tratti della razza:</Text>
      <TraitsComponent input={input} />
      <Text>Opzioni disponibili:</Text>
      {data?.starting_proficiency_options?.from.options.map((option, index) => (
        <Text key={index}>
          {(option as ProficiencyReferenceOption).item.name}
        </Text>
      )) ?? <Text>Proficiency options non disponibili</Text>}

      {/*INIZIO DESCRIZIONE (STRINGHE) la parte meno importante a livello implementativo. */}
      <Text>Descrizione della razza:</Text>
      <LabeledValue
        label="Linguaggio:"
        value={
          data?.language_desc ?? 'Descrizione del linguaggio non disponibile'
        }
      />
      <LabeledValue
        label="Il tuo allineamento razziale:"
        value={data?.alignment ?? 'Allineamento non disponibile'}
      />
      <LabeledValue
        label="La tendenza della tua specie:"
        value={data?.age ?? 'Descrizione età non disponibile'}
      />
      <LabeledValue
        label="Le dimensioni della tua specie:"
        value={data?.size_description ?? 'Descrizione statura non disponibile'}
      />
      <SubraceByRace input={input} />
    </>
  );
}
