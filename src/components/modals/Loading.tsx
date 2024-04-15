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
    position: 'absolute',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000,
    backgroundColor: customTheme2.colors.background + '80',
  },
  text: {
    fontSize: 19,
  },
});
