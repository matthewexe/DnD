import React from 'react';
import {Text, View} from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import {APIReference} from '../types/responses';

type Props = {
  label: string;
  data: APIReference[];
};

export const SelectMenu = ({label, data}: Props) => {
  return (
    <View>
      <Text>{label}</Text>
      <SelectDropdown
        data={data}
        onSelect={item => {
          console.log(item);
        }}
        rowTextForSelection={item => {
          return item.name;
        }}
        search={true}
      />
    </View>
  );
};
