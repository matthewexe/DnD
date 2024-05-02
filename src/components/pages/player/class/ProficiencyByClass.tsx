import React from 'react';
import {Text, View} from 'react-native';
import {useGetProficienciesForClassByIndexQuery} from '../../../../services/api';
import {ClassIndexRequest} from '../../../../types/requests';
import {StyledSubtitle} from '../../../ui/texts/StyledSubtitle';
import {StyledText} from '../../../ui/texts/StyledText';

export default function ProficiencyByClassComponent({
  input,
}: {
  input: ClassIndexRequest;
}) {
  const {data, error, isLoading, isFetching} =
    useGetProficienciesForClassByIndexQuery({
      index: input,
    });

  return (
    <View>
      <StyledSubtitle>Proficienies</StyledSubtitle>
      <StyledText>You have {data?.count} proficiencies:</StyledText>
      {data?.results.map((choice, index) => (
        <StyledText key={index}>{choice.name}</StyledText>
      ))}
    </View>
  );
}
//NB: Non so ancora come utilizzare il campo url della map
