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
  if (isLoading) return <Text>loading...</Text>;
  if (isFetching) <Text>attendi risposta dal server</Text>;
  return (
    <View>
      <StyledSubtitle>Caratteristiche</StyledSubtitle>
      <StyledText>Hai disponibili {data?.count} caratteristiche</StyledText>
      {data?.results.map((choice, index) => (
        <>
          <Features input={choice.index as FeaturesRequest} />
        </>
      ))}
    </View>
  );
}
//url x il fatch?
