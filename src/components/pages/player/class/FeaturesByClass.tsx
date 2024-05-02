import {Text, View} from 'react-native';
import React from 'react';
import Features from './Features';
import {StyledSubtitle} from '../../../ui/texts/StyledSubtitle';
import {StyledText} from '../../../ui/texts/StyledText';
import {useGetFeaturesByClassQuery} from '../../../../services/api';
import {ClassIndexRequest, FeaturesRequest} from '../../../../types/requests';

export default function FeaturesByClassComponent({
  input,
}: {
  input: ClassIndexRequest;
}) {
  const {data, error, isLoading, isFetching} = useGetFeaturesByClassQuery({
    index: input,
  });

  if (error) return <Text>error in fetching</Text>;
  if (isLoading || isFetching) return <Text>loading...</Text>;

  return (
    <View>
      <StyledSubtitle>Features</StyledSubtitle>
      <StyledText>There are {data?.count} available features</StyledText>
      {data?.results.map((choice, index) => (
        <>
          <Features input={choice.index as FeaturesRequest} />
        </>
      ))}
    </View>
  );
}
//url x il fatch?
