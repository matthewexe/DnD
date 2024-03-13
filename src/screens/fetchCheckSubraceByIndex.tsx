import React from 'react';
import {Text} from 'react-native';
import {useGetCheckSubRacesByIndexByRaceQuery} from '../services/api';
import {
  RaceIndexRequest,
  SubraceIndexRequest,
  SubracesRequest,
} from '../types/requests';
import ExportSubraceByIndex from './fetchSubraceByIndex';

//Serve per verificare se ci sono sottorazze disponibili si continua la ricerca, altrimenti si ignora
export default function ExportSubraceByRace({
  input,
}: {
  input: RaceIndexRequest;
}) {
  const {data, error, isLoading, isFetching} =
    useGetCheckSubRacesByIndexByRaceQuery({
      index: input,
    });

  if (error) return <Text>error in fetching</Text>;
  if (isLoading) return <Text>loading...</Text>;
  if (isFetching) <Text>attendi risposta dal server</Text>;
  if (data?.count == 0) {
    return (
      <>
        <Text>Non ci sono attualmente Sottorazze disponibili </Text>
      </>
    );
  } else {
    return (
      <>
        <Text>Hai a disposizione:</Text>
        {data?.results?.map((choice, index) => (
          <>
            <Text key={index}>{choice.name}</Text>
            <ExportSubraceByIndex input={choice.index as SubraceIndexRequest} />
          </>
        ))}
      </>
    );
  }
}
