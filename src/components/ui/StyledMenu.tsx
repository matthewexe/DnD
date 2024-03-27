import React from 'react';
import SelectDropdown, {
  SelectDropdownProps,
} from 'react-native-select-dropdown';
import {customTheme2} from '../../constants/theme';

type Props = SelectDropdownProps;

export const StyledMenu = (props: Props) => {
  return (
    <SelectDropdown
      {...props}
      rowTextStyle={{
        color: customTheme2.colors.text,
      }}
      rowStyle={{
        backgroundColor: customTheme2.colors.background,
      }}
      buttonStyle={{
        backgroundColor: customTheme2.colors.border,
      }}
      buttonTextStyle={{
        color: customTheme2.colors.text,
      }}
      defaultButtonText="Select an option"
    />
  );
};
