import {Text} from 'react-native';
import {useGetAlignmentByIndexQuery} from '../../services/api';
import {AlignmentRequest} from '../../types/requests';
import React from 'react';
import {LabeledValue} from '../LabeledValue';

export default function SpellAvailableByClassComponent({
  input,
}: {
  input: AlignmentRequest;
}) {
  const {data, error, isLoading, isFetching} = useGetAlignmentByIndexQuery({
    index: input,
  });

  if (error) return <Text>error in fetching</Text>;
  if (isLoading) return <Text>loading...</Text>;
  if (isFetching) return <Text>wait for response from the server</Text>;
  return (
    <>
      <LabeledValue
        label={'Your alignment:'}
        value={data?.desc ?? 'alignment not available'}
      />
    </>
  );
}
