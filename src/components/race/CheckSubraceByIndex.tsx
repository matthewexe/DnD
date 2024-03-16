import React from 'react';
import {Text} from 'react-native';
import {useGetCheckSubRacesByIndexByRaceQuery} from '../../services/api';
import {RaceIndexRequest, SubraceIndexRequest} from '../../types/requests';
import SubraceByIndexComponent from './SubraceByIndex';

//Serve per verificare se ci sono sottorazze disponibili si continua la ricerca, altrimenti si ignora
export default function SubraceByRace({input}: {input: RaceIndexRequest}) {
  const {data, error, isLoading, isFetching} =
    useGetCheckSubRacesByIndexByRaceQuery({
      index: input,
    });

  if (error) return <Text>error in fetching</Text>;
  if (isLoading) return <Text>loading...</Text>;
  if (isFetching) return <Text>wait for response from the server</Text>;
  if (data?.count == 0) {
    return (
      <>
        <Text>There are currently no Subraces available </Text>
      </>
    );
  } else {
    return (
      <>
        <Text>You have at your disposal:</Text>
        {data?.results?.map((choice, index) => (
          <>
            <Text key={index}>{choice.name}</Text>
            <SubraceByIndexComponent
              input={choice.index as SubraceIndexRequest}
            />
          </>
        ))}
      </>
    );
  }
}
