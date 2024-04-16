import React from 'react';
import {
  Text,
  TextProps,
  Pressable,
  View,
  GestureResponderEvent,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';
import {customTheme2} from '../../constants/theme';

type Props = TextProps & {
  onPress: (event: GestureResponderEvent) => void;
  message: string;
};

// FIXME: this component shows bad

export const Error = (props: Props) => {
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          alignSelf: 'center',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: customTheme2.colors.notification,
          width: '100%',
          padding: 12,
          borderTopLeftRadius: 12,
          borderTopRightRadius: 12,
        }}>
        <Text
          {...props}
          style={{color: '#ffffff', fontWeight: '900', fontSize: 24}}>
          Error!
        </Text>
      </View>

      <View
        style={{
          flex: 1,
        }}>
        <Icon
          name={'triangle-exclamation'}
          size={46}
          color={customTheme2.colors.notification}
          style={{alignSelf: 'center', flex: 1, marginTop: 8}}
        />
      </View>

      <View
        style={{
          flex: 1,
        }}>
        <Text
          style={{
            color: customTheme2.colors.notification,
            textAlign: 'center',
            fontSize: 17,
            alignSelf: 'center',
            width: '90%',
            backgroundColor: '#ffffff',
          }}>
          {props.message}
        </Text>
      </View>
      <View style={{paddingBottom: 8, alignItems: 'center'}}>
        <Pressable onPress={props.onPress}>
          <Text
            style={{
              color: '#000000',
              textAlignVertical: 'center',
              fontSize: 18,
              borderWidth: 0.7,
              padding: 4,
              borderRadius: 10,
              borderColor: customTheme2.colors.notification,
            }}>
            {' '}
            Okay!{' '}
          </Text>
        </Pressable>
      </View>
      {/* usare pressable non button */}
    </View>
  );
};
