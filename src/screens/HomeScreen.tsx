import React from 'react';
import {Button, Text, SafeAreaView, Alert, View} from 'react-native';

export function HomeScreen() {
  return (
    <SafeAreaView
      style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Button
        title="Switch"
        onPress={() =>
          Alert.alert('worka?', 'si, finalmente', [
            {text: 'yes', onPress: () => console.log('yes')},
            {text: 'no'},
          ])
        }
      />
      <View
        style={{
          backgroundColor: 'blue',
          width: 100,
          height: 100,
          justifyContent: 'flex-start',
          alignItems: 'center',
        }}>
        <Text
          style={{
            flex: 0.2,
            backgroundColor: 'green',
          }}>
          rithorneremoo
        </Text>
      </View>
    </SafeAreaView>
  );
}
