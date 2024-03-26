import React from 'react';
import {StyledText} from '../ui/texts/StyledText';
import {Pressable, StyleSheet, View} from 'react-native';
import {StyledButton} from '../ui/StyledButton';
import {customTheme2} from '../../constants/theme';

export type CountedReference = {
  index: string;
  name: string;
  quantity: number;
};

type Props = {
  options: CountedReference[];
  desc: string;
  onSelection?: (index: string) => void;
};

export const Options = ({options, desc}: Props) => {
  //   const;

  return (
    <View style={[styles.container]}>
      <StyledText>{desc}</StyledText>
      <View style={[styles.optionsContainer]}>
        {options.map((option, index) => (
          <View style={[styles.option]}>
            <Pressable key={index}>
              <StyledText>{option.name}</StyledText>
            </Pressable>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    padding: 10,
    borderColor: customTheme2.colors.border,
    borderWidth: 1,
    borderRadius: 20,
  },
  optionsContainer: {
    margin: 10,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  option: {
    padding: 10,
    borderWidth: 1,
    borderColor: customTheme2.colors.primary,
    flexGrow: 1,
    flexBasis: 100,
    marginHorizontal: 10,
    borderRadius: 10,
  },
  optionActive: {
    backgroundColor: customTheme2.colors.primary,
  },
});
