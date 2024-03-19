import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {NewPlayerNavigationProps} from '../../routes/NewPlayerParamList';
import {StyledButton} from '../ui/buttons/StyledButton';
import StyledTitle from '../ui/texts/StyledTitle';
import {StyledSubtitle} from '../ui/texts/StyledSubtitle';
import {SelectMenu} from '../SelectMenu';

type Props = NewPlayerNavigationProps<'EquipmentChoice'>;

export const EquipmentChoice = ({navigation}: Props) => {
  const [weapons, setWeapons] = useState('');
  const [armors, setArmors] = useState('');
  const [spells, setSpells] = useState('');

  return (
    <>
      <View>
        <StyledTitle>Equipment</StyledTitle>
        <StyledSubtitle>Equipment Choice</StyledSubtitle>
        <Text />
        {/* <SelectMenu />
        <Text />
        <SelectMenu /> */}
        <Text />
        {/* il box che diceva mattia */}
        <Text />
        <StyledButton
          text="Next"
          onPress={navigation.navigate('End', {userData: undefined})}
        />
      </View>
    </>
  );
};
