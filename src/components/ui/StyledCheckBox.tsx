/* eslint-disable prettier/prettier */
import React, { useState } from 'react';

import CheckBox from '@react-native-community/checkbox';
import { StyleSheet, View } from 'react-native';
import { CheckBoxProps } from '@react-native-community/checkbox';
import customTheme2 from '../../constants/theme';

type Props = Omit<CheckBoxProps, 'value' | 'onValueChange'> & {
  onValueChange?: (value: boolean) => void;
  text: string;
};

export const StyledCheckBox = (props: Props) => {
  const [state, setState] = useState(false);
  const _onValueChange = (value: boolean) => {
    if (props.onValueChange !== undefined) {
      props.onValueChange(value);
    }

    setState(value);
  };

  return (
    <View style={styles.container}>
      <CheckBox
        {...props}
        value={state}
        onValueChange={_onValueChange}
        tintColors={{
          true: customTheme2.colors.accent,
          false: customTheme2.colors.text,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  checkBox: {
    borderRadius: 10,
    borderWidth: 4,
    borderColor: customTheme2.colors.primary,
  },
  container: {
    alignItems: 'flex-start',
    padding: 4,
  },
});
