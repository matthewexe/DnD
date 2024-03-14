import React from 'react';
import {Text, View} from 'react-native';
import {SelectDropdownProps} from 'react-native-select-dropdown';
import {APIReference} from '../types/responses';
import {StyledMenu} from './ui/StyledMenu';

type Props = SelectDropdownProps & {
  label: string;
  data: APIReference[];
};

export const SelectMenu = (props: Props) => {
  const label = props.label;
  return (
    <View>
      <Text>{label}</Text>
      <StyledMenu
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
