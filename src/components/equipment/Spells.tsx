import React from 'react';
import {Text} from 'react-native';
import {useGetSpellsQuery} from '../../services/api';
import {SpellRequest} from '../../types/requests';
import {LabeledValue} from '../ui/LabeledValue';
import {rangeFieldToMeterField} from '../../helper/fieldConverter';

export default function Spells({input}: {input: SpellRequest}) {
  const {data, error, isLoading, isFetching} = useGetSpellsQuery({
    index: input,
  });

  if (error) return <Text>error in fetching</Text>;
  if (isLoading) return <Text>loading...</Text>;
  //se il result precedente non va bene
  if (isFetching) <Text>attendi risposta dal server</Text>;
  return (
    <>
      <Text>
        {data?.school.name}
        {data?.level}
      </Text>
      <LabeledValue
        label={'Tempo di Lancio:'}
        value={data?.casting_time ?? 'Non specificato'}
      />
      {/*RANGE da matteo*/}
      {data && data.range && (
        <LabeledValue
          label={'Gittata:'}
          value={`${rangeFieldToMeterField(data.range)}`}
        />
      )}
      <LabeledValue
        label={'Componenti'}
        value={`${data?.components?.join(',') ?? ' '} 
        ${data?.material ?? 'nessun componenente richiesto'}`}
      />
      <LabeledValue label={'Durata:'} value={data?.duration ?? ''} />
      {data && data.ritual && <Text>Tipo: Rituale</Text>}
      {data && data.concentration && <Text>Concentrazione</Text>}
      {data && data.attack_type && (
        <Text>Tipologia di attacco: {data.attack_type}</Text>
      )}
      {data && data.area_of_effect && (
        <LabeledValue
          label={'Area di effetto:'}
          value={`Tipologia ${data?.area_of_effect.type} Dimensione ${data?.area_of_effect?.size}`}
        />
      )}
      {data && data.damage && (
        <LabeledValue
          label={'Danno:'}
          value={`Tipologia ${data?.damage.damage_type?.name} Dimensione ${data?.area_of_effect?.size}`}
        />
      )}
      {/*MATTEO FIX*/}
      {/*rangeFieldToMeterField({data.damage.damage_at_slot_level})*/}

      {data && data.damage && data.damage.damage_at_slot_level && (
        <LabeledValue
          label={'Danno incrementato ai livelli:'}
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
          label={'Danno incrementato ai livelli del personaggio:'}
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
          label={'Tiro salvezza su:'}
          value={`${data?.dc.type.name} Se superi: ${
            data?.dc.success ?? 'non specificato'
          }`}
        />
      )}
      <LabeledValue
        label={'Descrizione'}
        value={data?.desc.join('\n') ?? 'Descrizione non disponibile'}
      />
      <LabeledValue
        label={'Materiali:'}
        value={data?.material ?? 'Materiale non specificato'}
      />
    </>
  );
}
