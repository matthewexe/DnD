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
  if (isFetching) return <Text>wait for response from the server</Text>;
  return (
    <>
      <LabeledValue label={'Category:'} value={data?.name ?? 'not found'} />
      {data?.equipment.map((choice, index) => (
        <>
          <Text key={index}>{choice.name}</Text>
          <Weapons input={choice.index as EquipmentItemRequest} />
        </>
      ))}
    </>
  );
}
