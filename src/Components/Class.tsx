import React from 'react';
import {Text, View} from 'react-native';
import {useGetClassByIndexQuery} from '../services/api';

export const Class = () => {
  const {data, error, isLoading, isFetching} = useGetClassByIndexQuery({
    index: 'monk',
  });

  if (isLoading || isFetching) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>Error</Text>;
  }

  return (
    <View>
      <Text>{data?.index}</Text>
    </View>
  );
};
