import {Text} from 'react-native';
import {useGetTraitByIndexQuery} from '../../../../services/api';
import {RaceIndexRequest, TraitsRequest} from '../../../../types/requests';
import React from 'react';
import ExportTrait from './Trait';

export default function TraitsComponent({input}: {input: RaceIndexRequest}) {
  const {data, error, isLoading, isFetching} = useGetTraitByIndexQuery({
    index: input,
  });

  if (error) return <Text>error in fetching</Text>;
  if (isLoading || isFetching) return <Text>loading...</Text>;

  return (
    <>
      {data?.results.map((item, index) => (
        <>
          <ExportTrait
            key={index + (item.index ?? '')}
            input={item.index as TraitsRequest}
          />
        </>
      ))}
    </>
  );
}
