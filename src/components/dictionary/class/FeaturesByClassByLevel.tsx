import React from 'react';
import {Text} from 'react-native';
import {useGetFeaturesByIndexByLevelQuery} from '../../../services/api';
import {ClassIndexRequest} from '../../../types/requests';
import {StyledText} from '../../../components/ui/texts/StyledText';

export default function FeaturesByClassByLevelComponent({
  input,
  level,
}: {
  input: ClassIndexRequest;
  level: number;
}) {
  const {data, error, isLoading, isFetching} =
    useGetFeaturesByIndexByLevelQuery({
      index: input,
      class_level: level,
    });

  if (error) {
    return <Text>error in fetching</Text>;
  }
  if (isLoading) {
    return <Text>loading...</Text>;
  }
  if (isFetching) {
    <Text>attendi risposta dal server</Text>;
  }
  return (
    <>{data && data.desc && <StyledText>{data.desc.join('\n')}</StyledText>}</>
  );
}
