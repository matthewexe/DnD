import React from 'react';
import {Text} from 'react-native';
import 'react-native-get-random-values';
import {CountedReference, Options} from './options/Options';

export const Test = () => {
  const options: CountedReference[] = [
    {
      index: '1',
      name: 'test',
      quantity: 1,
    },
    {
      index: '2',
      name: 'test2',
      quantity: 2,
    },
    {
      index: '3',
      name: 'test3',
      quantity: 3,
    },
  ];

  return <Options options={options} desc="choose between:" />;
};
