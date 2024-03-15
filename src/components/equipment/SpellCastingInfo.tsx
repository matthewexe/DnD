import {Text} from 'react-native';
import {useGetSpellCastingByClassQuery} from '../../services/api';
import {ClassIndexRequest} from '../../types/requests';
import React from 'react';
import {LabeledValue} from '../LabeledValue';

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
  if (isFetching) <Text>attendi risposta dal server</Text>;
  return (
    <>
      <LabeledValue label="Livello Incantesimo:" value={data?.level ?? -1} />
      <LabeledValue
        label="Caratteristica da incantatore"
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
