import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  GestureResponderEvent,
} from 'react-native';

// Definizione del tipo per le props
type CustomButtonProps = {
  onPress: (event: GestureResponderEvent) => void;
  title: string;
};

const CustomButton: React.FC<CustomButtonProps> = ({onPress, title}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
    marginVertical: 5,
  },
  text: {
    color: '#ffffff',
    fontSize: 18,
    fontFamily: 'Arial',
    textAlign: 'center',
  },
});

export default CustomButton;
