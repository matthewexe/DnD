import {Text} from 'react-native';
import {useGetArmorQuery, useGetWeaponQuery} from '../../services/api';
import React from 'react';
import {LabeledValue} from '../LabeledValue';
import {EquipmentItemRequest} from '../../types/requests';

export default function Armors({input}: {input: EquipmentItemRequest}) {
  const {data, error, isLoading, isFetching} = useGetArmorQuery({
    index: input,
  });

  if (error) return <Text>error in fetching</Text>;
  if (isLoading) return <Text>loading...</Text>;
  if (isFetching) return <Text>wait for response from the server</Text>;

  //GREEDY
  // Verifica diretta se dex_bonus è true, tenendo conto che potrebbe essere anche undefined
  const dexBonusIsTrue = !!data?.armor_class.dex_bonus;

  const stealthDisadvantageIsTrue = !!data?.stealth_disadvantage;
  let bonus = '';
  let stealth = '';
  // Usa dexBonusIsTrue in un'istruzione if o direttamente in JSX.
  if (dexBonusIsTrue) {
    bonus = 'You can add your dexterity bonus on the armor';
  } else {
    bonus = 'You cannot add dexterity to armor';
  }
  if (stealthDisadvantageIsTrue) {
    stealth = 'You have disadvantage on stealth checks';
  } else {
    stealth = 'You have no disadvantage on stealth checks';
  }
  return (
    <>
      <LabeledValue
        label="Armor:"
        value={data?.armor_category ?? 'not specified'}
      />
      <LabeledValue
        label="Base armor value:"
        value={data?.armor_class.base ?? 'not specified'}
      />
      <Text>{bonus}</Text>
      <LabeledValue
        label={'Minimum strength to wear armor: '}
        value={data?.str_minimum ?? 'Not defined'}
      />
      <Text>{stealth}</Text>
      <Text>
        Cost: {data?.cost.quantity} {data?.cost.unit}
      </Text>
      <LabeledValue label={'Weight'} value={data?.weight ?? 'Not specified'} />
    </>
  );
}
