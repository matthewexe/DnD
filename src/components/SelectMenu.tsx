import React from 'react';
import {Text, View} from 'react-native';
import SelectDropdown, {
  SelectDropdownProps,
} from 'react-native-select-dropdown';
import {APIReference} from '../types/responses';

type Props = SelectDropdownProps & {
  label: string;
  data: APIReference[];
};

export const SelectMenu = (props: Props) => {
  const label = props.label;
  return (
    <View>
      <Text>{label}</Text>
      <SelectDropdown
        rowTextForSelection={item => {
          return item.name;
        }}
        buttonTextAfterSelection={selectedItem => {
          return selectedItem.name;
        }}
        search={true}
        {...props}
      />
    </View>
  );
};
