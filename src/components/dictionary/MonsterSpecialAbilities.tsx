import React from 'react';
import {SpecialAbility} from '../../types/responses';
import {DescriptionText} from '../ui/texts/DescriptionText';
import {PrimaryText} from '../ui/texts/PrimaryText';
import {MonsterDC} from './MonsterDc';
import {MonsterSpellCasting} from './MonsterSpellcasting';

type Props = {
  special_abilities: SpecialAbility[];
};

export const MonsterSpecialAbilities = ({special_abilities}: Props) => {
  return (
    <>
      {special_abilities.map(choice => {
        choice.name && <PrimaryText>{choice.name}</PrimaryText>;
        choice.damage &&
          choice.damage.length > 0 &&
          choice.damage.map(choice => (
            <PrimaryText>{`${choice.damage_dice} ${choice.damage_type}`}</PrimaryText>
          ));
        choice.dc && <MonsterDC dc={choice.dc} />;
        choice.desc && <DescriptionText>{choice.desc}</DescriptionText>;
        choice.spellcasting && (
          <MonsterSpellCasting spell={choice.spellcasting} />
        );
      })}
    </>
  );
};
