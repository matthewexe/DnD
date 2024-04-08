import React from 'react';
import {StyledText} from '../ui/texts/StyledText';
import {Pressable, StyleSheet, View} from 'react-native';
import {customTheme2} from '../../constants/theme';
import {EquipmentModel} from '../../models/types';
import {EquipmentItemRequest} from '../../types/requests';

export type CountedReference = {
  index: string;
  name: string;
  quantity: number;
};

type Props = {
  options: CountedReference[];
  desc: string;
  onSelection?: (equip: EquipmentModel) => void;
};

export const Options = ({options, desc, onSelection}: Props) => {
  //   const;
  const [selected, setSelected] = React.useState<boolean[]>(
    new Array<boolean>(options.length).fill(false),
  );
  const onPress = (option: CountedReference, index: number) => {
    setSelected(state =>
      state.map((value, i) => (i === index ? !value : value)),
    );
    onSelection?.({
      index: option.index as EquipmentItemRequest,
      quantity: option.quantity,
    });
  };

  return (
    <View style={[styles.container]}>
      <StyledText>{desc}</StyledText>
      <View style={[styles.optionsContainer]}>
        {options.map((option, index) => (
          <View
            key={index}
            style={[styles.option, selected[index] ? styles.optionActive : {}]}>
            <Pressable
              style={{flex: 1}}
              key={index}
              onPress={() => onPress(option, index)}>
              <View style={[styles.optionText]}>
                <StyledText>
                  {option.quantity} {option.name}
                </StyledText>
              </View>
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
    padding: 0,
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    gap: 10,
  },
  option: {
    borderWidth: 1,
    borderColor: customTheme2.colors.primary,
    flexGrow: 1,
    flexBasis: 125,
    marginHorizontal: 10,
    borderRadius: 10,
  },
  optionActive: {
    backgroundColor: customTheme2.colors.primary,
  },
  optionText: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
});
