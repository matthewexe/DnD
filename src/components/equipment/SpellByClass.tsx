import React from 'react';
import {Text} from 'react-native';
import {useGetSpellCastingByIndexQuery} from '../../services/api';
import {ClassIndexRequest, SpellRequest} from '../../types/requests';
import Spells from './Spells';

export default function SpellAvailableByClassComponent({
  input,
}: {
  input: ClassIndexRequest;
}) {
  const {data, error, isLoading, isFetching} = useGetSpellCastingByIndexQuery({
    index: input,
  });

  if (error) return <Text>error in fetching</Text>;
  if (isLoading) return <Text>loading...</Text>;
  if (isFetching) <Text>attendi risposta dal server</Text>;
  return (
    <>
      <Text>Dalla tua classe hai le seguenti specifiche:</Text>
      <Text>Hai disponibili {data?.count} Incantesimi:</Text>
      {data?.results.map((choice, index) => (
        <>
          <Text key={index}>{choice.name}</Text>
          <Spells input={choice.index as SpellRequest} />
        </>
      ))}
    </>
  );
}
//vedi url se fare api
