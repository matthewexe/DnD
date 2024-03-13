//import {useEffect, useState} from 'react';
import React from 'react';
import {Text} from 'react-native';
import {useGetRacesByIndexQuery} from '../services/api';
import {RaceIndexRequest, TraitsRequest} from '../types/requests';
import {AbilityBonus, ProficiencyReferenceOption} from '../types/responses';
import ExportTrait from './fetchtrait';
import {LabeledValue} from '../Components/LabeledValue';

export default function RaceComponent({input}: {input: RaceIndexRequest}) {
  // const [race, setRace] = useState<RaceIndexRequest>(input);

  const {data, error, isLoading, isFetching} = useGetRacesByIndexQuery({
    index: input,
  });

  if (error) return <Text>error in fetching</Text>;
  if (isLoading) return <Text>loading...</Text>;
  //se il result precedente non va bene
  if (isFetching) <Text>attendi risposta dal server</Text>;
  return (
    <>
      <LabeledValue
        label="Nome:"
        value={data?.name ?? 'razza non disponibile'}
      />
      <LabeledValue
        label="Velocità:"
        value={data?.speed ?? 'velocità non disponibile'}
      />
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
      {/* complessa da rivedere... non sono sicuro--------------------------------------------------- */}
      <Text>Bonus della razza:</Text>
      {data?.ability_bonuses?.map((item: AbilityBonus) => {
        return (
          <>
            {data.ability_bonuses?.map((item, index) => (
              <Text
                key={
                  index
                }>{`${item.ability_score.index}: ${item.bonus}`}</Text>
            )) ?? <Text>Bonus non disponibili</Text>}
          </>
        );
      })}
      {/*NB: per ogni razza ci sono ipoteticamente dei bonus da aggiungere su determinate caratteriistiche "index"  di un certo amount "bonus". */}

      {/*Utilizzo un tipo creato a doc per questo metodo, si potrà fare meglio ma non ho altre idee */}
      <Text>StarterKit:</Text>
      {data?.starting_proficiencies?.map((proficiency, index) => (
        <Text key={index}>{proficiency.name}</Text>
      )) ?? <Text>Proficienze iniziali non disponibili</Text>}

      {/*porcodue non vaaaaaaaa item mi da problemi.....*/}
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
    </>
  );
}
