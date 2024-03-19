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
  if (isFetching) return <Text>wait for response from the server</Text>;
  return (
    <>
      <Text>From your class you have the following specifications:</Text>
      <Text>You have available {data?.count} Spells:</Text>
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
