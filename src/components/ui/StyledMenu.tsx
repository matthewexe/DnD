import React from 'react';
import SelectDropdown, {
  SelectDropdownProps,
} from 'react-native-select-dropdown';
import {useTheme} from '@react-navigation/native';

type Props = SelectDropdownProps;

export const StyledMenu = (props: Props) => {
  const {colors} = useTheme();
  return (
    <SelectDropdown
      {...props}
      rowTextStyle={{
        color: colors.text,
      }}
      rowStyle={{
        backgroundColor: colors.background,
      }}
      buttonStyle={{
        backgroundColor: colors.border,
      }}
      buttonTextStyle={{
        color: colors.text,
      }}
      defaultButtonText="Select an option"
    />
  );
};
