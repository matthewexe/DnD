import React from 'react';
import {SpecialAbility} from '../../types/responses';
import {DescriptionText} from '../ui/texts/DescriptionText';
import {PrimaryText} from '../ui/texts/PrimaryText';
import {MonsterDC} from './MonsterDc';
import {MonsterSpellCasting} from './MonsterSpellcasting';
import {StyleSheet, View} from 'react-native';
import {MonsterDamages} from './MonsterDamages';

type Props = {
  special_abilities: SpecialAbility;
};

export const MonsterSpecialAbilities = ({special_abilities}: Props) => {
  return (
    <>
      {special_abilities.name && (
        <PrimaryText>
          {'->   '}
          {special_abilities.name}
        </PrimaryText>
      )}
      <View style={styles.spece} />

      {special_abilities.damage &&
        special_abilities.damage.length > 0 &&
        special_abilities.damage.map(special_abilities => (
          <MonsterDamages input={special_abilities} />
        ))}
      {special_abilities.dc && <MonsterDC dc={special_abilities.dc} />}
      {special_abilities.desc && (
        <DescriptionText>{special_abilities.desc}</DescriptionText>
      )}
      {special_abilities.spellcasting && (
        <MonsterSpellCasting spell={special_abilities.spellcasting} />
      )}
      <View style={styles.spece} />
    </>
  );
};

const styles = StyleSheet.create({
  spece: {
    padding: 20,
  },
});
