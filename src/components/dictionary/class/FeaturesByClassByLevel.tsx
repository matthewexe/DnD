import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {useGetFeaturesForClassByIndexQuery} from '../../../services/api';
import {FeaturesRequest} from '../../../types/requests';
import {StyledText} from '../../../components/ui/texts/StyledText';
import {View} from 'react-native';

export default function FeaturesByClassByLevelComponent({
  input,
}: {
  input: FeaturesRequest;
}) {
  const {data, error, isLoading, isFetching} =
    useGetFeaturesForClassByIndexQuery({
      index: input,
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
    <>
      {data && data.desc && data.desc.length > 0 && (
        <>
          <StyledText>{data.desc.join('\n')}</StyledText>
          <View style={styles.space} />
        </>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  space: {
    padding: 20,
  },
});
