import React from 'react';
import {Text} from 'react-native';
import {useGetSubClassesforLevelQuery} from '../../services/api';
import {FeaturesRequest, Subclasstypes} from '../../types/requests';
import {LabeledValue} from '../ui/LabeledValue';
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
  if (isFetching) <Text>attendi risposta dal server</Text>;
  return (
    <>
      <LabeledValue label={'Livello:'} value={`${data?.level}`} />
      {data?.features.map((choice, index) => (
        <>
          <Text>{choice.name}</Text>
          <Features input={choice.index as FeaturesRequest} />
        </>
      ))}
    </>
  );
}
