import React from 'react';
import {Text} from 'react-native';
import {useGetSpellCastingByClassByClasslevelQuery} from '../../services/api';
import {ClassIndexRequest, SpellRequest} from '../../types/requests';
import Spells from './Spells';

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
  if (isFetching) return <Text>wait for response from the server</Text>;
  return (
    <>
      <Text>You Have:{data?.count} spells:</Text>
      {data?.results.map((choice, index) => (
        <>
          <Text>{choice.name}</Text>
          <Spells input={choice.index as SpellRequest} />
        </>
      ))}
    </>
  );
}
