/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Text, TextProps, Pressable, View, GestureResponderEvent } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';



type Props = TextProps & {
  onPress: ((event: GestureResponderEvent) => void);
  message: string;

};
export const Success = (props: Props) => {
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          alignSelf: 'center',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#009000',
          width: '100%',
          padding: 12,
          borderTopLeftRadius: 12,
          borderTopRightRadius: 12,

        }}>
        <Text {...props} style={{ color: '#ffffff', fontWeight: '900', fontSize: 24 }}>
          Success!
        </Text>
      </View>

      <View style={{
        flex: 1,
      }}>
        <Icon name={'check'} size={46} color={'#009000'} style={{ alignSelf: 'center', flex: 1, marginTop: 8 }} />
      </View>

      <View style={{
        flex: 1,
      }}>
        <Text style={{ color: '#009000', textAlign: 'center', fontSize: 17, alignSelf: 'center', width: '90%', backgroundColor: '#ffffff' }}>{props.message}</Text>
      </View>
      <View style={{ paddingBottom: 8, alignItems: 'center' }}>
        <Pressable onPress={props.onPress}><Text style={{ color: '#000000', textAlignVertical: 'center', fontSize: 18, borderWidth: 0.7, padding: 4, borderRadius: 10, borderColor: '#009000' }}> Okay! </Text></Pressable>
      </View>
      {/* usare pressable non button */}

    </View>
  );
};
