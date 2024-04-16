import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {SelectDropdownProps} from 'react-native-select-dropdown';
import {APIReference} from '../../types/responses';
import {StyledMenu} from './StyledMenu';
import {StyledText} from './texts/StyledText';
import {useSelector} from 'react-redux';
import {RootState} from '../../store';

type Props = SelectDropdownProps & {
  label: string;
  data: APIReference[];
};

export const SelectMenu = (props: Props) => {
  const label = props.label;

  return (
    <View style={[styles.container]}>
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

const styles = StyleSheet.create({
  container: {
    margin: 0,
    marginVertical: 7,
  },
});
