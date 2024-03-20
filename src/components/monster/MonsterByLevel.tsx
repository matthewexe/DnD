import React from 'react';
import {Text, View} from 'react-native';
import {useGetMonsterByLevelQuery} from '../../services/api';
import {LabeledValue} from '../LabeledValue';
import {ResourceList} from '../../types/responses';
import {MonstersRequestByLevel} from '../../types/requests';

type Props = {
  input: number[];
};
export default function MonsterByLevel({input}: Props) {
  const {data, error, isLoading, isFetching} = useGetMonsterByLevelQuery({
    index: '',
    challenge_rating: input,
  });

  if (error) return <Text>error in fetching</Text>;
  if (isLoading) return <Text>loading...</Text>;
  if (isFetching) return <Text>wait for response from the server</Text>;
  return (
    <>
      <Text>
        There are {data?.count} monsters of the selected challenge rank:
      </Text>
      {data?.results.map((choice, index) => (
        <Text>{choice.name}</Text>
      ))}
    </>
  );
}
