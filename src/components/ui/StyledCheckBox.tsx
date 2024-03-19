/* eslint-disable react-hooks/rules-of-hooks */
import React, {useState} from 'react';

import CheckBox from '@react-native-community/checkbox';
import {StyleSheet, Text, View} from 'react-native';
import {CheckBoxProps} from '@react-native-community/checkbox';
import customTheme2 from '../../constants/theme';

type Props = CheckBoxProps & {
  text: string;
};

export const StyledCheckBox = (props: Props) => {
  return (
    <View style={styles.container}>
      <CheckBox
        {...props}
        value={props.value} //falso di default
        tintColor={
          props.value ? customTheme2.colors.accent : customTheme2.colors.text
        }
        onChange={props.onChange}
        tintColors={{
          true: customTheme2.colors.accent,
          false: customTheme2.colors.text,
        }}
      />
      <Text>{props.text}</Text>
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
