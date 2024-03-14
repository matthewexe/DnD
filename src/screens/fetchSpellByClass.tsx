import React from 'react';
import {Text} from 'react-native';
import {useGetSpellCastingByIndexQuery} from '../services/api';
import {ClassIndexRequest, SpellRequest} from '../types/requests';
import SpellsComponent from './fetchSpell';

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
  //se il result precedente non va bene
  if (isFetching) <Text>attendi risposta dal server</Text>;
  return (
    <>
      <Text>Hai disponibili {data?.count} Incantesimi:</Text>
      {data?.results.map((choice, index) => (
        <>
          <Text key={index}>{choice.name}</Text>
          <SpellsComponent input={choice.index as SpellRequest} />
        </>
      ))}
    </>
  );
}
//vedi url se fare api
