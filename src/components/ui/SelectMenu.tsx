import React from 'react';
import {Text, View} from 'react-native';
import {SelectDropdownProps} from 'react-native-select-dropdown';
import {APIReference} from '../../types/responses';
import {StyledMenu} from './StyledMenu';
import {StyledText} from './texts/StyledText';

type Props = SelectDropdownProps & {
  label: string;
  data: APIReference[];
};

export const SelectMenu = (props: Props) => {
  const label = props.label;
  return (
    <View>
      <StyledText>{label}</StyledText>
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
