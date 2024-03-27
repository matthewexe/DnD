import React from 'react';
import {
  StyleSheet,
  PressableProps,
  Pressable,
  View,
  Image,
  StyleProp,
  ViewStyle,
} from 'react-native';
import Theme from '../../../constants/theme';
import {DictionaryText} from '../texts/DictionaryText';

type Props = PressableProps & {
  text: string;
  icon?: any;
  style?: StyleProp<ViewStyle>;
};

export const DictionaryButton = (props: Props) => {
  return (
    <Pressable {...props} style={[styles.button, props.style]}>
      <View style={styles.content}>
        {props.icon && <Image source={props.icon} style={styles.icon} />}
        <DictionaryText>{props.text}</DictionaryText>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 80,
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Theme.colors.primary,
    width: 290,
    height: 80,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 70,
    height: 70,
    borderRadius: 60,
    marginRight: 10,
    //marginRight: 0, // Spazio tra l'icona e il testo
  },
});
