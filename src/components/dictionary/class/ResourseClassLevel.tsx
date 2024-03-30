import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useGetResourcesByClassByLevelQuery} from '../../../services/api';
import {ClassIndexRequest} from '../../../types/requests';
import FeaturesByClassByLevelComponent from './FeaturesByClassByLevel';
import {classSpecificToString} from '../../../helper/classSpecific';
import {StyledSubtitle} from '../../../components/ui/texts/StyledSubtitle';
import {StyledText} from '../../../components/ui/texts/StyledText';
import {StyledLabeledValue} from '../../../components/ui/texts/StyledLabeledValue';

export default function ResourseClassLevel({
  input,
  level,
}: {
  input: ClassIndexRequest;
  level: number;
}) {
  const {data, error, isLoading, isFetching} =
    useGetResourcesByClassByLevelQuery({
      index: input,
      class_level: level,
    });

  if (error) return <Text>error in fetching</Text>;
  if (isLoading) return <Text>loading...</Text>;
  if (isFetching) <Text>attendi risposta dal server</Text>;
  return (
    <>
      <StyledSubtitle>
        At level {data?.level} you have {data?.ability_score_bonuses ?? 0} bonus
        skills points
      </StyledSubtitle>
      <View style={styles.little} />
      <StyledText>
        Proficiency Bonus: {data?.prof_bonus ?? 'Not found from the server'}
      </StyledText>
      <View style={styles.space} />
      <StyledSubtitle>Features:</StyledSubtitle>
      {data &&
        data.features &&
        data.features.map((choice, index) => (
          <>
            <StyledText key={index}>{choice.name}</StyledText>
            <FeaturesByClassByLevelComponent input={input} level={level} />
          </>
        ))}
      {data && data.spellcasting && (
        <View>
          <View style={styles.space} />
          <StyledSubtitle>SpellCasting</StyledSubtitle>
          <View style={styles.little}>
            <StyledText>
              You have available {data?.spellcasting.cantrips_known ?? 0}{' '}
              cantrips{' '}
            </StyledText>
            <View style={styles.little} />
          </View>
          <View style={styles.grid}>
            <StyledLabeledValue
              style={styles.spellSlot}
              label={'Spell slot level 1'}
              value={
                data?.spellcasting.spell_slots_level_1?.toString() ??
                ' not found'
              }
            />
            <StyledLabeledValue
              style={styles.spellSlot}
              label={'Spell slot level 2'}
              value={
                data?.spellcasting.spell_slots_level_2?.toString() ??
                ' not found'
              }
            />
            <StyledLabeledValue
              style={styles.spellSlot}
              label={'Spell slot level 3'}
              value={
                data?.spellcasting.spell_slots_level_3?.toString() ??
                ' not found'
              }
            />
            <StyledLabeledValue
              style={styles.spellSlot}
              label={'Spell slot level 4'}
              value={
                data?.spellcasting.spell_slots_level_4?.toString() ??
                ' not found'
              }
            />
            <StyledLabeledValue
              style={styles.spellSlot}
              label={'Spell slot level 5'}
              value={
                data?.spellcasting.spell_slots_level_5?.toString() ??
                ' not found'
              }
            />
            <StyledLabeledValue
              style={styles.spellSlot}
              label={'Spell slot level 6'}
              value={
                data?.spellcasting.spell_slots_level_6?.toString() ??
                ' not found'
              }
            />
            <StyledLabeledValue
              style={styles.spellSlot}
              label={'Spell slot level 7'}
              value={
                data?.spellcasting.spell_slots_level_7?.toString() ??
                ' not found'
              }
            />
            <StyledLabeledValue
              style={styles.spellSlot}
              label={'Spell slot level 8'}
              value={
                data?.spellcasting.spell_slots_level_8?.toString() ??
                ' not found'
              }
            />
            <StyledLabeledValue
              style={styles.spellSlot}
              label={'Spell slot level 9'}
              value={
                data?.spellcasting.spell_slots_level_9?.toString() ??
                ' not found'
              }
            />
          </View>
        </View>
      )}
      {/* {data &&
        data.class_specific &&
        classSpecificToString(data.class_specific)} */}
    </>
  );
}
const styles = StyleSheet.create({
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap', // Permette agli elementi di andare a capo
    alignContent: 'center',
    justifyContent: 'center',
    width: 300, // Larghezza fissa del contenitore grid
    marginHorizontal: 'auto',
    marginVertical: 'auto',
  },
  spellSlot: {
    width: '50%', // Metà della larghezza del contenitore per avere 2 elementi per riga
    padding: 10,
  },
  space: {
    padding: 20,
  },
  little: {
    padding: 5,
  },
});