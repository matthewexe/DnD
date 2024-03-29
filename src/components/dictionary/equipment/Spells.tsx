import React from 'react';
import {Text} from 'react-native';
import {rangeFieldToMeterField} from '../../../../helper/fieldConverter';
import {useGetSpellsQuery} from '../../../../services/api';
import {SpellRequest} from '../../../../types/requests';
import {LabeledValue} from '../../../ui/LabeledValue';

export default function Spells({input}: {input: SpellRequest}) {
  const {data, error, isLoading, isFetching} = useGetSpellsQuery({
    index: input,
  });

  if (error) return <Text>error in fetching</Text>;
  if (isLoading) return <Text>loading...</Text>;
  if (isFetching) return <Text>wait for response from the server</Text>;
  return (
    <>
      {data && data.desc && <Text>{data.desc}</Text>}
      <Text>
        {data?.school.name}
        {data?.level}
      </Text>
      <LabeledValue
        label={'Casting time:'}
        value={data?.casting_time ?? 'Not specified'}
      />
      {/*RANGE da matteo*/}
      {data && data.range && (
        <LabeledValue
          label={'Range:'}
          value={`${rangeFieldToMeterField(data.range)}`}
        />
      )}
      <LabeledValue
        label={'Components:'}
        value={`${data?.components?.join(',') ?? ' '} 
        ${data?.material ?? 'no components required'}`}
      />
      <LabeledValue label={'Duration:'} value={data?.duration ?? 'not found'} />
      {data && data.ritual && <Text>Type: Ritual</Text>}
      {data && data.concentration && <Text>Concentration</Text>}
      {data && data.attack_type && <Text>Attack type: {data.attack_type}</Text>}
      {data && data.area_of_effect && (
        <LabeledValue
          label={'Area of ​​effect:'}
          value={`Typology ${data?.area_of_effect.type} Size ${data?.area_of_effect?.size}`}
        />
      )}
      {data && data.damage && (
        <LabeledValue
          label={'Damage type::'}
          value={data?.damage.damage_type?.name ?? 'not specified'}
        />
      )}
      {/*MATTEO FIX------ALLERT---ALLERT---ALLERT---ALLERT---ALLERT---ALLERT---ALLERT---ALLERT---ALLERT---ALLERT---ALLERT---ALLERT*/}
      rangeFieldToMeterField(data.damage.damage_at_slot_level)
      {/*MATTEO FIX------ALLERT---ALLERT---ALLERT---ALLERT---ALLERT---ALLERT---ALLERT---ALLERT---ALLERT---ALLERT---ALLERT---ALLERT*/}
      {data && data.higher_level && <Text>{data.higher_level}</Text>}
      {data && data.damage && data.damage.damage_at_slot_level && (
        <LabeledValue
          label={'Increased damage to levels:'}
          value={`${data.damage.damage_at_slot_level.map((key, index) => (
            <Text>
              {key.level}
              {key.damage}
            </Text>
          ))}`}
        />
      )}
      {data && data.damage && data.damage.damage_at_character_level && (
        <LabeledValue
          label={'Damage increased at character levels:'}
          value={`${data.damage.damage_at_character_level.map((key, index) => (
            <Text>
              {key.level}
              {key.damage}
            </Text>
          ))}`}
        />
      )}
      {data && data.dc && (
        <LabeledValue
          label={'Saving throw up:'}
          value={`${data?.dc.type.name} If you pass: ${
            data?.dc.success ?? 'not specified'
          }`}
        />
      )}
      <LabeledValue
        label={'Description'}
        value={data?.desc.join('\n') ?? 'Description not available'}
      />
      <LabeledValue
        label={'Materials:'}
        value={data?.material ?? 'Material not specified'}
      />
    </>
  );
}
