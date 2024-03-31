import React from 'react';
import {Text} from 'react-native';
import {useGetSpellCastingByClassByClasslevelQuery} from '../../../services/api';
import {ClassIndexRequest} from '../../../types/requests';
import {StyledText} from '../../../components/ui/texts/StyledText';

export default function SpellClassLevel({
  input,
  level,
}: {
  input: ClassIndexRequest;
  level: number;
}) {
  const {data, error, isLoading, isFetching} =
    useGetSpellCastingByClassByClasslevelQuery({
      index: input,
      class_level: level,
    });

  if (error) return <Text>error in fetching</Text>;
  if (isLoading) return <Text>loading...</Text>;
  if (isFetching) return <Text>wait for response from the server</Text>;
  return (
    <>
      <StyledText>
        You have {data?.count} available spells:{'\n'}
      </StyledText>
      {data &&
        data.results &&
        data.results.map(choice => (
          <>
            <StyledText>-{choice.name ?? ' '}</StyledText>
            {/* <Spells input={choice.index as SpellRequest} /> */}
          </>
        ))}
    </>
  );
}
