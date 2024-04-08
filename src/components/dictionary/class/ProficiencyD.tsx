import {Text} from 'react-native';
import {useGetProficienciesForClassByIndexQuery} from '../../../services/api';
import {ClassIndexRequest} from '../../../types/requests';
import {StyledText} from '../../ui/texts/StyledText';
import {StyledSubtitle} from '../../../components/ui/texts/StyledSubtitle';
import React from 'react';

export default function ProficiencyD({input}: {input: ClassIndexRequest}) {
  const {data, error, isLoading, isFetching} =
    useGetProficienciesForClassByIndexQuery({
      index: input,
    });

  if (error) return <Text>error in fetching</Text>;
  if (isLoading) return <Text>loading...</Text>;
  if (isFetching) <Text>attendi risposta dal server</Text>;
  return (
    <>
      <StyledSubtitle>You have {data?.count} proficiencies:</StyledSubtitle>
      {data?.results.map((choice, index) => (
        <StyledText key={index}>- {choice.name}</StyledText>
      ))}
    </>
  );
}
