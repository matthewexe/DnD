import React from 'react';
import {Text} from 'react-native';
import {useGetSpellCastingByClassQuery} from '../../../../services/api';
import {ClassIndexRequest} from '../../../../types/requests';
import {LabeledValue} from '../../../ui/LabeledValue';

export default function SpellAvailableByClassComponent({
  input,
}: {
  input: ClassIndexRequest;
}) {
  const {data, error, isLoading, isFetching} = useGetSpellCastingByClassQuery({
    index: input,
  });

  if (error) return <Text>error in fetching</Text>;
  if (isLoading) return <Text>loading...</Text>;
  if (isFetching) return <Text>wait for response from the server</Text>;
  return (
    <>
      <LabeledValue label="Spell Level:" value={data?.level ?? -1} />
      <LabeledValue
        label="Spellcaster trait"
        value={data?.spellcasting_ability.name ?? -1}
      />
      {data?.info.map(choice => (
        <>
          <Text>{choice.name}</Text>
          {choice.desc.map((description, descIndex) => (
            <Text key={descIndex}>{description}</Text>
          ))}
        </>
      ))}
    </>
  );
}
