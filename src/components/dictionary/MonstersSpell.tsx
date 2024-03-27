import React from 'react';
import {MonsterSpell} from '../../types/responses';
import {DescriptionText} from '../ui/texts/DescriptionText';
import {PrimaryText} from '../ui/texts/PrimaryText';
import {StyleSheet, Text, View} from 'react-native';
import {customTheme2} from '../../constants/theme';

type Props = {
  spell: MonsterSpell;
};

export const MonstersSpell = ({spell}: Props) => {
  return (
    <>
      {spell.name && (
        <PrimaryText>
          Name:{'\t\t'}
          <DescriptionText>{spell.name}</DescriptionText>
        </PrimaryText>
      )}
      {spell.level && (
        <PrimaryText>
          Level:{'\t\t'}
          <DescriptionText>{spell.level}</DescriptionText>
        </PrimaryText>
      )}
      {spell.notes && (
        <PrimaryText>
          Notes:{'\t\t'}
          <DescriptionText>{spell.notes}</DescriptionText>
        </PrimaryText>
      )}
      {spell.usage && (
        <PrimaryText>
          Usage:{'\t\t\t'}
          <DescriptionText>{spell.usage.type}</DescriptionText>
        </PrimaryText>
      )}
      {spell.usage?.dice && (
        <PrimaryText>
          Dice:{'\t\t'}
          <DescriptionText>{spell.usage.dice}</DescriptionText>
        </PrimaryText>
      )}
      {spell.usage && spell.usage.min_value && (
        <PrimaryText>
          Min value:{'\t\t'}
          <DescriptionText>{spell.usage.min_value}</DescriptionText>
        </PrimaryText>
      )}
      {spell.usage &&
        spell.usage.rest_types &&
        spell.usage.rest_types.length > 0 && (
          <PrimaryText>
            Rest type:{'\t\t'}
            <DescriptionText>
              {spell.usage.rest_types.join('\n')}
            </DescriptionText>
          </PrimaryText>
        )}

      {spell.usage?.times && (
        <PrimaryText>
          Times:{'\t\t'}
          <DescriptionText>{spell.usage.times}</DescriptionText>
        </PrimaryText>
      )}
      <View style={styles.spece}></View>
      <Text style={styles.primaryTextContainer}></Text>

      <View style={styles.spece}></View>
    </>
  );
};

const styles = StyleSheet.create({
  spece: {
    padding: 20,
  },
  primaryTextContainer: {
    borderBottomColor: customTheme2.colors.primary,
    borderBottomWidth: 1,
    padding: 3,
    backgroundColor: 'transparent',
  },
});
