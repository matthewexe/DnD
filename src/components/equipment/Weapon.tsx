import {Text} from 'react-native';
import {useGetWeaponQuery} from '../../services/api';
import React from 'react';
import {LabeledValue} from '../LabeledValue';
import {EquipmentItemRequest} from '../../types/requests';

export default function Weapons({input}: {input: EquipmentItemRequest}) {
  const {data, error, isLoading, isFetching} = useGetWeaponQuery({
    index: input,
  });

  if (error) return <Text>error in fetching</Text>;
  if (isLoading) return <Text>loading...</Text>;
  //se il result precedente non va bene
  if (isFetching) <Text>attendi risposta dal server</Text>;
  return (
    <>
      <LabeledValue
        label={"L'arma è"}
        value={data?.weapon_category.name ?? 'non disponibile'}
      />
      <LabeledValue
        label={'Tipologia arma:'}
        value={data?.weapon_range ?? 'non disponibile'}
      />
      <Text>Costo:</Text>
      <Text>
        {data?.cost.quantity} {data?.cost.unit}
      </Text>
      <Text>
        Danno: {data?.damage?.damage_dice} tipo:
        {data?.damage?.damage_type.name}
      </Text>
      <Text>
        Lancibile: {data?.throw_range?.normal ?? 0}/
        {data?.throw_range?.long ?? 0}
      </Text>
    </>
  );
}
