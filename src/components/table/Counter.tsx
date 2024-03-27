import React, {useState} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';

export type CounterProps = {
  initValue?: number;
  onMinus: (value: number) => boolean;
  onPlus: (value: number) => boolean;
  minValue?: number;
  maxValue?: number;
};

export const Counter = ({
  initValue = 0,
  onPlus,
  onMinus,
  minValue,
  maxValue,
}: CounterProps) => {
  const [value, setValue] = useState(initValue);

  const tryValue = (possibleValue: number) => {
    if (minValue !== undefined && possibleValue < minValue) {
      return minValue;
    }

    if (maxValue !== undefined && possibleValue > maxValue) {
      return maxValue;
    }

    return possibleValue;
  };

  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => {
          const newValue = tryValue(value - 1);
          setValue(onMinus(newValue) ? newValue : value);
        }}>
        <View
          style={[
            styles.button,
            styles.centered,
            {borderTopLeftRadius: 50, borderBottomLeftRadius: 50},
          ]}>
          <Text style={[styles.buttonText, {fontSize: 20, fontWeight: '800'}]}>
            -
          </Text>
        </View>
      </Pressable>
      <View style={[styles.button, styles.centered]}>
        <Text style={styles.text}>{value}</Text>
      </View>
      <Pressable
        onPress={() => {
          const newValue = tryValue(value + 1);
          setValue(onPlus(newValue) ? newValue : value);
        }}>
        <View
          style={[
            styles.button,
            styles.centered,
            {borderTopRightRadius: 50, borderBottomRightRadius: 50},
          ]}>
          <Icon name="plus" style={styles.buttonText} />
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  centered: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    paddingHorizontal: 10,
    borderWidth: 2,
    borderColor: 'white',
    backgroundColor: 'black',
  },
  buttonText: {
    fontSize: 20,
    color: 'white',
  },
  text: {
    fontSize: 20,
    color: 'white',
  },
});
