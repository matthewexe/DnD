import React from 'react';
import {ScrollView, Text} from 'react-native';
import {useGetEndpointResourceQuery} from '../services/api';

export const Test = () => {
  const {data, error, isLoading, isFetching} =
    useGetEndpointResourceQuery('spells');

  if (isLoading || isFetching) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>Error</Text>;
  }

  return (
    <ScrollView>
      {(data?.results || []).map(item => (
        <Text key={item.index}>{item.url}</Text>
      ))}
    </ScrollView>
  );
};

export default Test;
