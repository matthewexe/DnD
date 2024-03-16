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
  if (isFetching) return <Text>wait for response from the server</Text>;
  return (
    <>
      <LabeledValue
        label={'The weapon is:'}
        value={data?.weapon_category.name ?? 'not available'}
      />
      <LabeledValue
        label={'Weapon type:'}
        value={data?.weapon_range ?? 'not available'}
      />
      <Text>Cost:</Text>
      <Text>
        {data?.cost.quantity} {data?.cost.unit}
      </Text>
      <Text>
        Damage: {data?.damage?.damage_dice} type:
        {data?.damage?.damage_type.name}
      </Text>
      <Text>
        Throwable: {data?.throw_range?.normal ?? 0}/
        {data?.throw_range?.long ?? 0}
      </Text>
    </>
  );
}
