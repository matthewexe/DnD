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
      // eslint-disable-next-line react-native/no-inline-styles
      rowTextStyle={{
        color: customTheme2.colors.text,
        fontFamily: 'NewTegomin-Regular',
        fontSize: 23,
        top: -5,
        bottom: -9,
        padding: 1.9,
        paddingBottom: 1.5,
      }}
      rowStyle={{
        backgroundColor: customTheme2.colors.background,
      }}
      buttonStyle={{
        backgroundColor: customTheme2.colors.border,
      }}
      // eslint-disable-next-line react-native/no-inline-styles
      buttonTextStyle={{
        color: customTheme2.colors.text,
        fontFamily: 'NewTegomin-Regular',
        fontSize: 19,
        top: -3,
        textAlignVertical: 'top',
        paddingRight: 1.5,
      }}
      defaultButtonText="Select an option"
    />
  );
};
