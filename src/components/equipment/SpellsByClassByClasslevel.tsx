import React from 'react';
import {Text} from 'react-native';
import {useGetSpellCastingByClassByClasslevelQuery} from '../../services/api';
import {ClassIndexRequest} from '../../types/requests';

export default function SpellByClassByClasslevelComponent({
  input,
  level,
}: {
  input: ClassIndexRequest;
  level: number;
}) {
  const {data, error, isLoading, isFetching} =
    useGetSpellCastingByClassByClasslevelQuery({
      index: input,
      class_level: level,
    });

  if (error) return <Text>error in fetching</Text>;
  if (isLoading) return <Text>loading...</Text>;
  if (isFetching) <Text>attendi risposta dal server</Text>;
  return (
    <>
      <Text>Hai:{data?.count} incantesimi:</Text>
      {data?.results.map((choice, index) => (
        <Text>{choice.name}</Text>
      ))}
    </>
  );
}
