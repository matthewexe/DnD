import React from 'react';
import {MonsterSpellcasting} from '../../types/responses';
import {DescriptionText} from '../ui/texts/DescriptionText';
import {PrimaryText} from '../ui/texts/PrimaryText';
import {MonsterDC} from './MonsterDc';
import {MonstersSpell} from './MonstersSpell';
import {StyledLabel} from '../ui/texts/LabeldValueStyle';
import {View} from 'react-native';

type Props = {
  spell: MonsterSpellcasting;
};

export const MonsterSpellCasting = ({spell}: Props) => {
  return (
    <>
      {spell.ability && (
        <PrimaryText>
          Spell Ability:
          <DescriptionText>
            {'\t\t\t'}
            {spell.ability.name}
          </DescriptionText>
        </PrimaryText>
      )}
      {spell.dc && (
        <PrimaryText>
          dc:{'\t\t\t'}
          <DescriptionText>{spell.dc}</DescriptionText>
        </PrimaryText>
      )}
      {spell.components_required && (
        <PrimaryText>
          Spell Components:{'\n'}
          {spell.components_required.join('\n')}
        </PrimaryText>
      )}
      <DescriptionText>{'\n\n'}</DescriptionText>
      {spell.spells && <StyledLabel label={'Spells:'} value={''}></StyledLabel>}
      {spell.spells &&
        spell.spells.map(choice => <MonstersSpell spell={choice} />)}
    </>
  );
};
