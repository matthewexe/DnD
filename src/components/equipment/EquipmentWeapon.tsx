import {Text} from 'react-native';
import {useGetEquipmentWeaponQuery} from '../../services/api';
import React from 'react';
import {LabeledValue} from '../LabeledValue';
import Weapons from './Weapon';
import {EquipmentItemRequest} from '../../types/requests';

export default function EquipmentTypeWeapons() {
  const {data, error, isLoading, isFetching} =
    useGetEquipmentWeaponQuery(undefined); //NON MI RICORDO XK UNDEFINED, CONTROLLARE forse non serve parametro?? non ricordo

  if (error) return <Text>error in fetching</Text>;
  if (isLoading) return <Text>loading...</Text>;
  if (isFetching) <Text>attendi risposta dal server</Text>;
  return (
    <>
      <LabeledValue label={'Categoria:'} value={data?.name ?? 'not found'} />
      {data?.equipment.map((choice, index) => (
        <>
          <Text key={index}>{choice.name}</Text>
          <Weapons input={choice.index as EquipmentItemRequest} />
        </>
      ))}
    </>
  );
}
