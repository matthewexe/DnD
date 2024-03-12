import React from 'react';
import {View} from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';

export const SelectMenu = () => {
  return (
    <View>
      <SelectDropdown
        data={['Banana', 'Mango', 'Pear', 'Apple']}
        onSelect={item => {
          console.log(item);
        }}
        search={true}
      />
    </View>
  );
};
