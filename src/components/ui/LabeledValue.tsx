import React from 'react';
import {Text} from 'react-native';

type Props = {
  label: string;
  value: string | number;
};

export const LabeledValue = ({label, value}: Props) => {
  return (
    <>
      <Text>{label}</Text>
      <Text>{value}</Text>
    </>
  );
};
