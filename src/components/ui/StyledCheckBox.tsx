import React from 'react';
import {useTheme} from '@react-navigation/native';
import CheckBox from '@react-native-community/checkbox';
import {StyleSheet, Text, View} from 'react-native';
import {CheckBoxProps} from '@react-native-community/checkbox';
import Theme from '../../constants/theme';

type Props = CheckBoxProps & {
  text: string;
};

export const StyledCheckBox = (props: Props) => {
  const {colors} = useTheme();
  return (
    <View style={styles.container}>
      <CheckBox
        {...props}
        onFillColor={colors.notification}
        onCheckColor={colors.background}
        style={styles.checkBox}
      />
      <Text>{props.text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  checkBox: {
    borderRadius: 10,
    borderWidth: 4,
    borderColor: Theme.colors.primary,
  },
  container: {
    alignItems: 'flex-start',
    padding: 4,
  },
});
