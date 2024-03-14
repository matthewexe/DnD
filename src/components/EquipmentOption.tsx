import React from 'react';
import {EquipmentOptionSet, StartingEquipmentChoice} from '../types/responses';
import {Text} from 'react-native';

type Props = {
  choice: StartingEquipmentChoice;
};

export const EquipmentOptionComponent = ({choice}: Props) => {
  return (
    <>
      <Text>
        {choice.desc} quantità:{choice.choose}
      </Text>
      {choice.from.map((choice)=>(
        <Text>{choice.}</Text>
      ))options.map((option, index) => (
        // TODO
        <Text>{option.option_type.}</Text>
      ))}
    </>
  );
};
