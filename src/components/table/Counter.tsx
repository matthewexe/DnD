import React, {useState} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';

type Props = {
  onValueChange: (value: number) => void;
  minValue?: number;
  maxValue?: number;
};

export const Counter = ({onValueChange, minValue, maxValue}: Props) => {
  const [value, setValue] = useState(0);

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
          setValue(newValue);
          onValueChange(newValue);
        }}>
        <View
          style={[
            styles.button,
            styles.centered,
            {borderTopLeftRadius: 50, borderBottomLeftRadius: 50},
          ]}>
          <Icon name="minus" style={styles.buttonText} />
        </View>
      </Pressable>
      <View style={[styles.button, styles.centered]}>
        <Text style={styles.text}>{value}</Text>
      </View>
      <Pressable
        onPress={() => {
          const newValue = tryValue(value + 1);
          setValue(newValue);
          onValueChange(newValue);
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
