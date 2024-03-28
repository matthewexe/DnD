import React from 'react';
import {Text} from 'react-native';
import {useGetSubRacesByIndexQuery} from '../../../services/api';
import {SubraceIndexRequest} from '../../../types/requests';
import ExportTrait from './DictionaryTrait';
import {TraitsRequest} from '../../../types/requests';

//Serve per verificare se ci sono sottorazze disponibili si continua la ricerca, altrimenti si ignora
export default function SubraceByIndexComponent({
  input,
}: {
  input: SubraceIndexRequest;
}) {
  const {data, error, isLoading, isFetching} = useGetSubRacesByIndexQuery({
    index: input,
  });

  if (error) return <Text>error in fetching</Text>;
  if (isLoading) return <Text>loading...</Text>;
  if (isFetching) return <Text>wait for response from the server</Text>;
  return (
    <>
      <Text>The subrace {data?.name} has available:</Text>
      <Text>{data?.desc}</Text>
      <Text>Your skills:</Text>
      {data?.ability_bonuses.map((choice, ability_score) => (
        <>
          <Text key={ability_score}>{choice.bonus} bonus point in:</Text>
          <Text key={ability_score}>{choice.ability_score.name}</Text>
        </>
      ))}
      {data?.starting_proficiencies.map((choice, index) => (
        <Text key={index}>{choice.name}</Text>
      ))}
      <Text>You can choose {data?.language_options?.choose} lenguages:</Text>
      {data?.language_options?.from.options.map((choice, index) => (
        <Text key={index}>{choice.item.name}</Text>
      ))}
      {data?.racial_traits.map((choice, index) => (
        <>
          <Text key={index}>{choice.name}</Text>
          <ExportTrait input={choice.index as TraitsRequest} />
        </>
      ))}
    </>
  );
}
