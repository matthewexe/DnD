import React from 'react';
import {Text} from 'react-native';
import {useGetSubClassesAvilableByIndexQuery} from '../../services/api';
import {ClassIndexRequest, Subclasstypes} from '../../types/requests';
import SubclassForLevel from './subclassForLevel';

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
  if (isFetching) <Text>attendi risposta dal server</Text>;
  return (
    <>
      <Text>Sottoclasse:</Text>
      <Text>Possibili scelte: {data?.count}</Text>
      {data?.results.map((choice, index) => (
        <>
          <Text key={index}>{choice.name}</Text>
          <SubclassForLevel input={choice.index as Subclasstypes} />
        </>
      ))}
    </>
  );
}
