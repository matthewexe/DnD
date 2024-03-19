import {useQuery} from '@realm/react';
import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import Test from '../models/Test';

const ListItems = () => {
  const results = useQuery(Test);
  return (
    <SafeAreaView>
      <Text>Items:</Text>
      {results.map(item => (
        <Text key={item.id as unknown as string}>
          {item.name}: {item.embedded?.description}
        </Text>
      ))}
    </SafeAreaView>
  );
};

export default ListItems;
