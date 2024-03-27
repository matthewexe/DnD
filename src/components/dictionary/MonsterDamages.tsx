import React from 'react';
import {Damage, SpecialAbility} from '../../types/responses';
import {DescriptionText} from '../ui/texts/DescriptionText';
import {PrimaryText} from '../ui/texts/PrimaryText';
import {MonsterDC} from './MonsterDc';
import {MonsterSpellCasting} from './MonsterSpellcasting';
import {StyleSheet, View} from 'react-native';

type Props = {
  input: Damage;
};

export const MonsterDamages = ({input}: Props) => {
  return (
    <>
      <PrimaryText>{`${input.damage_dice} ${input.damage_type.name}`}</PrimaryText>
    </>
  );
};

const styles = StyleSheet.create({
  spece: {
    padding: 20,
  },
});
