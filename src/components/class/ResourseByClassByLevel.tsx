import React from 'react';
import {Text, View} from 'react-native';
import {useGetResourcesByClassByLevelQuery} from '../../services/api';
import {ClassIndexRequest} from '../../types/requests';
import FeaturesByClassByLevelComponent from './FeaturesByClassByLevel';
import {LabeledValue} from '../LabeledValue';
import {classSpecificToString} from '../../helper/classSpecific';

export default function ResourceByClassByLevelComponent({
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
  if (isFetching) return <Text>wait for response from the server</Text>;
  return (
    <>
      <Text>
        At the level {data?.level} you have {data?.ability_score_bonuses ?? 0}
        bonus skill points
      </Text>
      <Text>
        Proficiency Bonus: {data?.prof_bonus ?? 'Not found by the server'}
      </Text>
      <Text>Characteristics:</Text>
      {data?.features.map((choice, index) => (
        <>
          <Text key={index}>{choice.name}</Text>
          <FeaturesByClassByLevelComponent input={input} level={level} />
        </>
      ))}
      {data && data.spellcasting && (
        <View>
          <Text>
            You have available {data?.spellcasting.cantrips_known ?? 0} cantrips
          </Text>
          <LabeledValue
            label={'Level 1 Spell Slots:'}
            value={
              data?.spellcasting.spell_slots_level_1 ?? ' not found on server'
            }
          />
          <LabeledValue
            label={'Level 2 Spell Slots:'}
            value={
              data?.spellcasting.spell_slots_level_2 ?? 'not found on server'
            }
          />
          <LabeledValue
            label={'Level 3 Spell Slots:'}
            value={
              data?.spellcasting.spell_slots_level_3 ?? ' not found on server'
            }
          />
          <LabeledValue
            label={'Level 4 Spell Slots:'}
            value={
              data?.spellcasting.spell_slots_level_4 ?? ' not found on server'
            }
          />
          <LabeledValue
            label={'Level 5 Spell Slots:'}
            value={
              data?.spellcasting.spell_slots_level_5 ?? ' not found on server'
            }
          />
          <LabeledValue
            label={'Level 6 Spell Slots:'}
            value={
              data?.spellcasting.spell_slots_level_6 ?? ' not found on server'
            }
          />
          <LabeledValue
            label={'Level 7 Spell Slots:'}
            value={
              data?.spellcasting.spell_slots_level_7 ?? ' not found on server'
            }
          />
          <LabeledValue
            label={'Level 8 Spell Slots:'}
            value={
              data?.spellcasting.spell_slots_level_8 ?? ' not found on server'
            }
          />
          <LabeledValue
            label={'Level 9 Spell Slots:'}
            value={
              data?.spellcasting.spell_slots_level_9 ?? ' not found on server'
            }
          />
        </View>
      )}
      {/*ASPETTO MATTEO PER LA CLASSE IN BASE ALLA CLASSE DEL GIOCO */}
      {data &&
        data.class_specific &&
        classSpecificToString(data.class_specific)}
    </>
  );
}
