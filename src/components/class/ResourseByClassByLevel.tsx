import React from 'react';
import {Text, View} from 'react-native';
import {useGetResourcesByClassByLevelQuery} from '../../services/api';
import {ClassIndexRequest} from '../../types/requests';
import FeaturesByClassByLevelComponent from './fetchFeaturesByClassByLevel';
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
  if (isFetching) <Text>attendi risposta dal server</Text>;
  return (
    <>
      <Text>
        Al livello {data?.level} hai {data?.ability_score_bonuses ?? 0} punti
        abilità bonus
      </Text>
      <Text>
        Bonus di competenza: {data?.prof_bonus ?? 'Non trovato dal server'}
      </Text>
      <Text>Caratteristiche:</Text>
      {data?.features.map((choice, index) => (
        <>
          <Text key={index}>{choice.name}</Text>
          <FeaturesByClassByLevelComponent input={input} level={level} />
        </>
      ))}
      {data && data.spellcasting && (
        <View>
          <Text>
            Hai disponibili {data?.spellcasting.cantrips_known ?? 0} trucchetti{' '}
          </Text>
          <LabeledValue
            label={'Slot incantesimi livello 1:'}
            value={
              data?.spellcasting.spell_slots_level_1 ??
              ' non trovato dal server'
            }
          />
          <LabeledValue
            label={'Slot incantesimi livello 2:'}
            value={
              data?.spellcasting.spell_slots_level_2 ??
              ' non trovato dal server'
            }
          />
          <LabeledValue
            label={'Slot incantesimi livello 3:'}
            value={
              data?.spellcasting.spell_slots_level_3 ??
              ' non trovato dal server'
            }
          />
          <LabeledValue
            label={'Slot incantesimi livello 4:'}
            value={
              data?.spellcasting.spell_slots_level_4 ??
              ' non trovato dal server'
            }
          />
          <LabeledValue
            label={'Slot incantesimi livello 5:'}
            value={
              data?.spellcasting.spell_slots_level_5 ??
              ' non trovato dal server'
            }
          />
          <LabeledValue
            label={'Slot incantesimi livello 6:'}
            value={
              data?.spellcasting.spell_slots_level_6 ??
              ' non trovato dal server'
            }
          />
          <LabeledValue
            label={'Slot incantesimi livello 7:'}
            value={
              data?.spellcasting.spell_slots_level_7 ??
              ' non trovato dal server'
            }
          />
          <LabeledValue
            label={'Slot incantesimi livello 8:'}
            value={
              data?.spellcasting.spell_slots_level_8 ??
              ' non trovato dal server'
            }
          />
          <LabeledValue
            label={'Slot incantesimi livello 9:'}
            value={
              data?.spellcasting.spell_slots_level_9 ??
              ' non trovato dal server'
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
