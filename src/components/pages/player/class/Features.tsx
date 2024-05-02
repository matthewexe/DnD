import React from 'react';
import {Text} from 'react-native';
import {FeaturesRequest} from '../../../../types/requests';
import {useGetFeaturesForClassByIndexQuery} from '../../../../services/api';
import {StyledText} from '../../../ui/texts/StyledText';
import {StyledLabeledValue} from '../../../ui/texts/StyledLabeledValue';

type Props = {
  input: FeaturesRequest;
};
export default function Features({input}: Props) {
  const {data, error, isLoading, isFetching} =
    useGetFeaturesForClassByIndexQuery({
      index: input,
    });

  if (error) return <Text>error in fetching</Text>;
  if (isLoading || isFetching) return <Text>loading...</Text>;
  return (
    <>
      <StyledLabeledValue
        label={data?.name ?? ''}
        value={data?.desc.join('\n') ?? ''}
      />
    </>
  );
}
