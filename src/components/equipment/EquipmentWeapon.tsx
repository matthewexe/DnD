import {Text} from 'react-native';
import {useGetEquipmentWeaponQuery} from '../../services/api';
import React from 'react';
import {LabeledValue} from '../LabeledValue';
import Weapons from './fetchWeapon';
import {EquipmentItemRequest} from '../../types/requests';

export default function EquipmentTypeWeapons() {
  const {data, error, isLoading, isFetching} =
    useGetEquipmentWeaponQuery(undefined);

  if (error) return <Text>error in fetching</Text>;
  if (isLoading) return <Text>loading...</Text>;
  //se il result precedente non va bene
  if (isFetching) <Text>attendi risposta dal server</Text>;
  return (
    <>
      <LabeledValue label={'Categoria:'} value={data?.name ?? -1} />
      {data?.equipment.map((choice, index) => (
        <>
          <Text key={index}>{choice.name}</Text>
          <Weapons input={choice.index as EquipmentItemRequest} />
        </>
      ))}
    </>
  );
}
