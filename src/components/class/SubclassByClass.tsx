import React from 'react';
import {Text} from 'react-native';
import {useGetSubClassesAvilableByIndexQuery} from '../../services/api';
import {ClassIndexRequest, Subclasstypes} from '../../types/requests';
import SubclassForLevel from './SubclassForLevel';

type Props = {
  input: ClassIndexRequest;
};
export default function SubclassComponent({input}: Props) {
  const {data, error, isLoading, isFetching} =
    useGetSubClassesAvilableByIndexQuery({
      index: input,
    });

  if (error) return <Text>error in fetching</Text>;
  if (isLoading) return <Text>loading...</Text>;
  if (isFetching) return <Text>wait for response from the server</Text>;
  return (
    <>
      <Text>Subclass:</Text>
      <Text>Possible choices: {data?.count}</Text>
      {data?.results.map((choice, index) => (
        <>
          <Text key={index}>{choice.name}</Text>
          <SubclassForLevel input={choice.index as Subclasstypes} />
        </>
      ))}
    </>
  );
}
