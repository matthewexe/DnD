import React from 'react';
import {MonsterArmorClass as ArmorClass} from '../../types/responses';
import {DescriptionText} from '../ui/texts/DescriptionText';
import {Text} from 'react-native';
import {PrimaryText} from '../ui/texts/PrimaryText';

type Props = {
  armor_class: ArmorClass;
};

export const MonsterArmorClass = ({armor_class}: Props) => {
  return (
    <>
      {armor_class.type && (
        <PrimaryText>
          Armor Type:{'\t\t\t'}
          <DescriptionText>{armor_class.type}</DescriptionText>
        </PrimaryText>
      )}
      {armor_class.value && (
        <PrimaryText>
          CA:{'\t\t\t'}
          <DescriptionText>{armor_class.value}</DescriptionText>
        </PrimaryText>
      )}
      {armor_class.desc && (
        <DescriptionText>{armor_class.desc}</DescriptionText>
      )}
    </>
  );
};
