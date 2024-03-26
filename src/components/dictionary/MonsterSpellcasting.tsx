import React from 'react';
import {MonsterSpellcasting} from '../../types/responses';
import {DescriptionText} from '../ui/texts/DescriptionText';
import {PrimaryText} from '../ui/texts/PrimaryText';
import {MonsterDC} from './MonsterDc';

type Props = {
  spell: MonsterSpellcasting;
};

export const MonsterSpellCasting = ({spell}: Props) => {
  return (
    <>
      {spell.ability && (
        <PrimaryText>
          Spell Ability:
          <DescriptionText>{spell.ability.full_name}</DescriptionText>
        </PrimaryText>
      )}
      {spell.dc && (
        <PrimaryText>
          Dc:
          <DescriptionText>{spell.dc}</DescriptionText>
        </PrimaryText>
      )}
      {spell.components_required && (
        <PrimaryText>
          Spell Components:{spell.components_required.join('\n')}
        </PrimaryText>
      )}
      {spell.spells && <PrimaryText>Spells:</PrimaryText> &&
        spell.spells.map(choice => {
          choice.name && (
            <PrimaryText>
              Name:<DescriptionText>{choice.name}</DescriptionText>
            </PrimaryText>
          );
          choice.level && (
            <PrimaryText>
              Level<DescriptionText>{choice.level}</DescriptionText>
            </PrimaryText>
          );
          choice.notes && (
            <PrimaryText>
              Notes:<DescriptionText>{choice.notes}</DescriptionText>
            </PrimaryText>
          );
          choice.usage && <PrimaryText>Usage:</PrimaryText> && (
            <DescriptionText>{choice.usage.type}</DescriptionText>
          );
          choice.usage?.dice && (
            <DescriptionText>Dice: {choice.usage.dice}</DescriptionText>
          );
          choice.usage?.min_value && (
            <DescriptionText>
              Min value: {choice.usage.min_value}
            </DescriptionText>
          );
          choice.usage?.rest_types && (
            <DescriptionText>
              Rest type: {choice.usage.rest_types}
            </DescriptionText>
          );
          choice.usage?.times && (
            <DescriptionText>Times: {choice.usage.times}</DescriptionText>
          );
        })}
    </>
  );
};
