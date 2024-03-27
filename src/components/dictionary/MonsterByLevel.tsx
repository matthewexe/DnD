import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {useGetMonsterByLevelQuery} from '../../services/api';
import {MonsterRequest} from '../../types/requests';
import {PrimaryText} from '../ui/texts/PrimaryText';
import MonsterComponent from './Monsters';

type Props = {
  input: number[];
};
export default function MonsterByLevel({input}: Props) {
  const {data, error, isLoading, isFetching} = useGetMonsterByLevelQuery({
    challenge_rating: input,
  });

  if (error) return <Text>error in fetching</Text>;
  if (isLoading) return <Text>loading...</Text>;
  if (isFetching) return <Text>wait for response from the server</Text>;
  return (
    <>
      {data && data.count && (
        <PrimaryText>You have {data.count} choices </PrimaryText>
      )}
      {data &&
        data.results &&
        data.results.map(choice => <PrimaryText>-{choice.name}</PrimaryText>)}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
  },
});
