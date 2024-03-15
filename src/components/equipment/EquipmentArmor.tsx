import {Text} from 'react-native';
import {useGetEquipmentArmorQuery} from '../../services/api';
import React from 'react';
import {LabeledValue} from '../LabeledValue';
import Armors from './fetchArmor';
import {EquipmentItemRequest} from '../../types/requests';

export default function EquipmentTypeArmors() {
  const {data, error, isLoading, isFetching} =
    useGetEquipmentArmorQuery(undefined);

  if (error) return <Text>error in fetching</Text>;
  if (isLoading) return <Text>loading...</Text>;
  if (isFetching) <Text>attendi risposta dal server</Text>;
  return (
    <>
      <LabeledValue label={'Categoria:'} value={data?.name ?? -1} />
      {data?.equipment.map((choice, index) => (
        <>
          <Text>{choice.name}</Text>
          <Armors input={choice.index as EquipmentItemRequest} />
        </>
      ))}
    </>
  );
}
