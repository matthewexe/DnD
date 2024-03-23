import {Text} from 'react-native';
import {useGetTraitByIndexQuery} from '../../services/api';
import {RaceIndexRequest, TraitsRequest} from '../../types/requests';
import React from 'react';
import ExportTrait from './Trait';

export default function TraitsComponent({input}: {input: RaceIndexRequest}) {
  const {data, error, isLoading, isFetching} = useGetTraitByIndexQuery({
    index: input,
  });

  if (error) return <Text>error in fetching</Text>;
  if (isLoading) return <Text>loading...</Text>;
  if (isFetching) return <Text>wait for response from the server</Text>;
  return (
    <>
      {data?.results.map((Name, index) => (
        <>
          <Text key={index}>{Name.name}</Text>
          <ExportTrait input={Name.index as TraitsRequest} />
        </>
      ))}
    </>
  );
}