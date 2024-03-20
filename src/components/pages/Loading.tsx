import React from 'react';
import {Text, View, ActivityIndicator, StyleSheet} from 'react-native';
import {customTheme2} from '../../constants/theme';

export const Loading = () => {
  return (
    <View style={styles.content}>
      <ActivityIndicator
        color={customTheme2.colors.notification}
        size={'large'}
      />
      <Text style={styles.text}>Loading</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    alignItems: 'center',
    flex: 3,
    justifyContent: 'center',
  },
  text: {
    fontSize: 19,
  },
});
