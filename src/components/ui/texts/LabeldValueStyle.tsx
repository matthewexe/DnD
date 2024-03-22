import React from 'react';
import {StyleSheet, Text, TextProps, View} from 'react-native';
import {customTheme2} from '../../../constants/theme';

type Props = TextProps & {
  label: string;
  value: string;
};

export const StyledLabel = (props: Props) => {
  return (
    <View>
      <View style={styles.primaryTextContainer}>
        <Text {...props} style={styles.PrimaryText}>
          {props.label}
        </Text>
      </View>
      <Text {...props} style={styles.Description}>
        {props.value}
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  primaryTextContainer: {
    borderBottomColor: customTheme2.colors.primary,
    borderBottomWidth: 1,
    padding: 3,
    backgroundColor: 'transparent',
  },
  PrimaryText: {
    fontWeight: 'bold',
    // fontFamily: '',
    fontSize: 20,
  },
  Description: {
    paddingVertical: 10,
    paddingHorizontal: 5,
    fontSize: 18,
    alignSelf: 'center',
    textAlign: 'justify',
  },
});
