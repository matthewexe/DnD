import {StyleSheet, Text} from 'react-native';
import React from 'react';
import {useGetMagicArmorQuery} from '../../../services/api';
import {EquipmentItemRequest} from '../../../types/requests';
import {StyledSubtitle} from '../../ui/texts/StyledSubtitle';
import {StyledText} from '../../ui/texts/StyledText';
import {View} from 'react-native';

export default function MagicItems({input}: {input: EquipmentItemRequest}) {
  const {data, error, isLoading, isFetching} = useGetMagicArmorQuery({
    index: input,
  });

  if (error) {
    return <Text>error in fetching</Text>;
  }
  if (isLoading) {
    return <Text>loading...</Text>;
  }
  if (isFetching) {
    return <Text>wait for response from the server</Text>;
  }

  return (
    <>
      {data && data.rarity && (
        <>
          <StyledSubtitle>Rarity</StyledSubtitle>
          <View style={styles.space} />
          <StyledText>{data.rarity.name}</StyledText>
        </>
      )}
      <View style={styles.space} />
      {data && data.desc.length > 0 && (
        <>
          <StyledSubtitle>Description</StyledSubtitle>
          <View style={styles.space} />
          <StyledText>-{data.desc.join('\n\n-')}</StyledText>
        </>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  space: {
    padding: 10,
  },
});
