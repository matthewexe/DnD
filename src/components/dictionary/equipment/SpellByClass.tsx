import React from 'react';
import {Text} from 'react-native';
import {useGetSpellCastingByClassQuery} from '../../../services/api';
import {ClassIndexRequest} from '../../../types/requests';
import {StyledText} from '../../../components/ui/texts/StyledText';
import {StyledLabeledValue} from '../../../components/ui/texts/StyledLabeledValue';

export default function SpellByClass({input}: {input: ClassIndexRequest}) {
  const {data, error, isLoading, isFetching} = useGetSpellCastingByClassQuery({
    index: input,
  });

  if (error) return <StyledText>{input} class has no spellcasting</StyledText>;
  if (isLoading) return <Text>loading...</Text>;
  if (isFetching) return <Text>wait for response from the server</Text>;
  return (
    <>
      <StyledText>
        From your class you have the following specifications:
      </StyledText>
      {data && (
        <StyledLabeledValue
          label={'Spellcasting ability'}
          value={data?.spellcasting_ability.name}
        />
      )}
      {data &&
        data.info.length > 0 &&
        data.info.map(choice => (
          <>
            <StyledLabeledValue
              label={choice.name}
              value={`${choice.desc.join('\n-')}`}
            />
          </>
        ))}
    </>
  );
}
//vedi url se fare api
