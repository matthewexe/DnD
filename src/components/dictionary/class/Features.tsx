import React from 'react';
import {Text} from 'react-native';
import {FeaturesRequest} from '../../../types/requests';
import {useGetFeaturesForClassByIndexQuery} from '../../../services/api';
import {StyledLabeledValue} from '../../ui/texts/StyledLabeledValue';

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
      <StyledLabeledValue
        label={data?.name ?? ''}
        value={data?.desc.join('\n') ?? ''}
      />
    </>
  );
}
