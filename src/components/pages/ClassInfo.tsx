import React from 'react';
import {View, Text} from 'react-native';
import {StyledButton2} from '../ui/buttons/StyledButton2';
import StyledTitle from '../ui/texts/StyledTitle';
import {StyledButton} from '../ui/buttons/StyledButton';
import {NewPlayerNavigationProps} from '../../routes/NewPlayerParamList';
import ClassComponent from '../class/ClassByIndex';

type Props = NewPlayerNavigationProps<'ClassInfo'>;
export const ClassInfo = ({navigation}: Props) => {
  return (
    <>
      {/* <ClassComponent input={'barbarian'} /> */}
      <View style={{alignSelf: 'center'}}>
        <StyledButton
          text="Next"
          onPress={() => {
            navigation.navigate('EquipmentChoice', {});
          }}
        />
      </View>
    </>
  );
};
