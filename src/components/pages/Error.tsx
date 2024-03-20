import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

export const Error = () => {
  return (
    <View style={styles.text}>
      <Text />
      <Text>An Error has occured.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    flex: 3,
    alignContent: 'center',
    justifyContent: 'center',
  },
});
