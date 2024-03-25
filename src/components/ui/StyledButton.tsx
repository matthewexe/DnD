import React from 'react';
import {StyleSheet, PressableProps, Text, Pressable, View} from 'react-native';
import Theme from '../../constants/theme';
import Icon from 'react-native-vector-icons/FontAwesome6';

type Props = PressableProps & {
  text: string;
  iconName?: string;
  iconColor?: string;
};

export const StyledButton = (props: Props) => {
  return (
    <Pressable {...props} style={styles.button}>
      <View style={{flexDirection: 'row', justifyContent: 'center'}}>
        <Text style={{paddingTop: 3}}>
          {props.text} {'   '}
        </Text>
        {props.iconName && (
          <Icon
            name={props.iconName}
            size={25}
            color={props.iconColor}
            style={{paddingRight: 2}}
          />
        )}
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 9,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Theme.colors.primary,
    width: 100,
    padding: 13,
  },
});
