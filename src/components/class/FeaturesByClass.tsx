import {ScrollView, Text} from 'react-native';
import {useGetFeaturesByClassQuery} from '../../services/api';
import {ClassIndexRequest, FeaturesRequest} from '../../types/requests';
import React from 'react';
import Features from './Features';

export default function FeaturesByClassComponent({
  input,
}: {
  input: ClassIndexRequest;
}) {
  const {data, error, isLoading, isFetching} = useGetFeaturesByClassQuery({
    index: input,
  });

  if (error) return <Text>error in fetching</Text>;
  if (isLoading) return <Text>loading...</Text>;
  if (isFetching) return <Text>wait for response from the server</Text>;
  return (
    <>
      <Text>You have available {data?.count} characteristics</Text>
      {data?.results.map((choice, index) => (
        <>
          <Text key={index}>{choice.name}</Text>
          <Features input={choice.index as FeaturesRequest} />
        </>
      ))}
    </>
  );
}
//url x il fatch?
