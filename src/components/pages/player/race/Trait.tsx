import React from 'react';
import {Text} from 'react-native';
import {useGetTraitQuery} from '../../../../services/api';
import {TraitsRequest} from '../../../../types/requests';
import {StyledText} from '../../../ui/texts/StyledText';
import {StyledLabeledValue} from '../../../ui/texts/StyledLabeledValue';

export default function ExportTrait({input}: {input: TraitsRequest}) {
  const {data, error, isLoading, isFetching} = useGetTraitQuery({
    index: input,
  });

  if (error) return <Text>error in fetching</Text>;
  if (isLoading || isFetching) return <Text>loading...</Text>;

  return (
    <>
      <StyledLabeledValue
        label={data?.name ?? ''}
        value={(data?.desc ?? []).join('\n')}
      />
      {data && data.proficiencies && data.proficiencies.length > 0 && (
        <StyledText>Proficiencies:</StyledText>
      )}
      {data?.proficiencies.map((choice, index) => (
        <StyledText key={index}>{choice.name}</StyledText>
      ))}
    </>
  );
}
