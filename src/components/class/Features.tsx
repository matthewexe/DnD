import React from 'react';
import {Text} from 'react-native';
import {useGetFeaturesForClassByIndexQuery} from '../../services/api';
import {FeaturesRequest} from '../../types/requests';

type Props = {
  input: FeaturesRequest;
};
export default function Features({input}: Props) {
  const {data, error, isLoading, isFetching} =
    useGetFeaturesForClassByIndexQuery({
      index: input,
    });

  if (error) return <Text>error in fetching</Text>;
  if (isLoading) return <Text>loading...</Text>;
  if (isFetching) <Text>attendi risposta dal server</Text>;
  return (
    <>
      <Text>{data?.desc ?? 'Descrizione non disponibile'}</Text>
    </>
  );
}
