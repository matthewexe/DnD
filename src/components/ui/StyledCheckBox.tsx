import React from 'react';
import CheckBox from '@react-native-community/checkbox';
import {StyleSheet, View} from 'react-native';
import {CheckBoxProps} from '@react-native-community/checkbox';
import customTheme2 from '../../constants/theme';

type Props = CheckBoxProps & {
  text: string;
};

export const StyledCheckBox = ({value, ...props}: Props) => {
  const _onValueChange = (newValue: boolean) => {
    if (props.onValueChange !== undefined) {
      props.onValueChange(newValue);
    }
  };

  return (
    <View style={styles.container}>
      <CheckBox
        {...props}
        value={value}
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
