import {useEffect, useState} from 'react';
import {Text} from 'react-native';
import {useGetSubRacesByIndexByRaceQuery} from '../services/api';
import {useGetCheckSubRacesByIndexByRaceQuery} from '../services/api';
import {
  RaceIndexRequest,
  SubraceIndexRequest,
  SubracesRequest,
} from '../types/requests';

//Serve per verificare se ci sono sottorazze disponibili si continua la ricerca, altrimenti si ignora
export default function ExportSubraceByRace(input: RaceIndexRequest) {
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
        <Text>
          {data?.results?.map((name, index) => (
            <Text key={index}>{`${name}`}</Text>
          ))}
        </Text>
      </>
    );
  }
}
