import React from 'react';
import {Text} from 'react-native';
import {useGetTraitQuery} from '../services/api';
import {TraitsRequest} from '../types/requests';

//Serve per verificare se ci sono sottorazze disponibili si continua la ricerca, altrimenti si ignora
export default function ExportTrait({input}: {input: TraitsRequest}) {
  const {data, error, isLoading, isFetching} = useGetTraitQuery({
    index: input,
  });

  if (error) return <Text>error in fetching</Text>;
  if (isLoading) return <Text>loading...</Text>;
  if (isFetching) <Text>attendi risposta dal server</Text>;
  return (
    <>
      <Text>{data?.desc}</Text>
      {data?.proficiencies.map((choice, index) => (
        <Text key={index}>{choice.name}</Text>
      ))}
    </>
  );
}
