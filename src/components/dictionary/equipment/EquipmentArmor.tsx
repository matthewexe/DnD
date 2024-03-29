import React from 'react';
import {Text} from 'react-native';
import Armors from './Armor';
import {useGetEquipmentArmorQuery} from '../../../../services/api';
import {EquipmentItemRequest} from '../../../../types/requests';
import {LabeledValue} from '../../../ui/LabeledValue';

export default function EquipmentTypeArmors() {
  const {data, error, isLoading, isFetching} =
    useGetEquipmentArmorQuery(undefined);

  if (error) return <Text>error in fetching</Text>;
  if (isLoading) return <Text>loading...</Text>;
  if (isFetching) return <Text>wait for response from the server</Text>;
  return (
    <>
      <LabeledValue label={'Category:'} value={data?.name ?? -1} />
      {data?.equipment.map((choice, index) => (
        <>
          <Text>{choice.name}</Text>
          <Armors input={choice.index as EquipmentItemRequest} />
        </>
      ))}
    </>
  );
}
