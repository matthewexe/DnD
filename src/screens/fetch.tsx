import {useEffect, useState} from 'react';
import {Text} from 'react-native';
import {useGetRacesByIndexQuery} from '../services/api';
import {RaceIndexRequest} from '../types/requests';
import {Race} from '../types/responses';

export default function ExportRace(input: RaceIndexRequest) {
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
      <Text>{data?.name ?? 'razza non disponibile'}</Text>
      <Text>{data?.speed ?? 'velocità non disponibile'}</Text>
      <Text>{data?.size ?? 'dimensione non disponibile'}</Text>
      {data?.languages?.map((language, index) => (
        <Text key={index}>{language.name}</Text>
      ))}

      {data?.traits?.map((traits, index) => (
        <Text key={index}>{traits.name}</Text>
      ))}
    </>
  );
}
