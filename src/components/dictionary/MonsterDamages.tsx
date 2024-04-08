import React from 'react';
import {Damage} from '../../types/responses';
import {PrimaryText} from '../ui/texts/PrimaryText';

type Props = {
  input: Damage;
};

export const MonsterDamages = ({input}: Props) => {
  return (
    <>
      {input.damage_dice && input.damage_type && (
        <PrimaryText>{`${input.damage_dice} ${input.damage_type.name}`}</PrimaryText>
      )}
    </>
  );
};
