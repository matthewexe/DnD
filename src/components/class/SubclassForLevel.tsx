import React from 'react';
import {Text} from 'react-native';
import {useGetSubClassesforLevelQuery} from '../../services/api';
import {FeaturesRequest, Subclasstypes} from '../../types/requests';
import {LabeledValue} from '../LabeledValue';
import Features from './Features';

type Props = {
  input: Subclasstypes;
};
export default function SubclassForLevel({input}: Props) {
  const {data, error, isLoading, isFetching} = useGetSubClassesforLevelQuery({
    index: input,
  });

  if (error) return <Text>error in fetching</Text>;
  if (isLoading) return <Text>loading...</Text>;
  if (isFetching) return <Text>wait for response from the server</Text>;
  return (
    <>
      <LabeledValue label={'Level:'} value={`${data?.level}`} />
      {data &&
        data.features &&
        data.features.map((choice, index) => (
          <>
            <Text>{choice.name}</Text>
            <Features input={choice.index as FeaturesRequest} />
          </>
        ))}
    </>
  );
}
