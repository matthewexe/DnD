import {StyleSheet, Text, View} from 'react-native';
import {useGetAlignmentByIndexQuery} from '../../services/api';
import {AlignmentRequest} from '../../types/requests';
import React from 'react';
import {StyledLabel} from '../ui/texts/LabeldValueStyle';

export default function Alignament({input}: {input: AlignmentRequest}) {
  const {data, error, isLoading, isFetching} = useGetAlignmentByIndexQuery({
    index: input,
  });

  if (error) return <Text>error in fetching</Text>;
  if (isLoading) return <Text>loading...</Text>;
  //se il result precedente non va bene
  if (isFetching) <Text>attendi risposta dal server</Text>;
  return (
    <>
      <StyledLabel
        label={'Your Alignament:'}
        value={data?.desc ?? 'not found'}></StyledLabel>
    </>
  );
}
