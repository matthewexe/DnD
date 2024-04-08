import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {useGetSpellsQuery} from '../../../services/api';
import {SpellRequest} from '../../../types/requests';
import {StyledText} from '../../../components/ui/texts/StyledText';
import {View} from 'react-native';
import {StyledLabeledValue} from '../../../components/ui/texts/StyledLabeledValue';
import {extractDigits} from '../../../utils/extractDigits';
import {convertFootToMeters} from '../../../utils/convertFootToMeters';
import {StyledSubtitle} from '../../../components/ui/texts/StyledSubtitle';

export default function Spell({input}: {input: SpellRequest}) {
  const {data, error, isLoading, isFetching} = useGetSpellsQuery({
    index: input,
  });

  if (error) return <Text>error in fetching</Text>;
  if (isLoading) return <Text>loading...</Text>;
  if (isFetching) return <Text>wait for response from the server</Text>;
  return (
    <>
      {data && <StyledSubtitle>{data.name}</StyledSubtitle>}
      <View style={styles.little} />
      <StyledText>
        School: {data?.school.name}
        {'  '}(lv {data?.level})
      </StyledText>

      <View style={styles.space} />

      {data && data.desc && data.desc.length > 0 && (
        <StyledText>-{data.desc.join('\n-')}</StyledText>
      )}

      <View style={styles.little} />

      {data && data.ritual && (
        <>
          <View style={styles.little}>
            <StyledText>This spell is a Ritual</StyledText>
          </View>
        </>
      )}
      {data && data.concentration && (
        <StyledText>Concentration required</StyledText>
      )}
      {data && data.attack_type && (
        <StyledText>Attack type: {data.attack_type}</StyledText>
      )}

      <StyledLabeledValue
        label={'Casting time'}
        value={data?.casting_time ?? 'Not specified'}
      />
      {/*RANGE da matteo*/}
      {data && data.range && (
        <StyledLabeledValue
          label={'Range'}
          value={`${data.range} or ${convertFootToMeters(
            extractDigits(data.range),
          )}`}
        />
      )}
      <StyledLabeledValue
        label={'Components'}
        value={`${data?.components?.join(',') ?? ' '} `}
      />
      {data && data.material && (
        <StyledLabeledValue
          label={'Materials'}
          value={data?.material ?? 'Material not specified'}
        />
      )}
      <StyledLabeledValue
        label={'Duration'}
        value={data?.duration ?? 'not found'}
      />

      {data && data.area_of_effect && (
        <StyledLabeledValue
          label={'Area of ​​effect'}
          value={`Typology ${data?.area_of_effect.type} Size ${data?.area_of_effect?.size}`}
        />
      )}
      {data && data.damage && (
        <StyledLabeledValue
          label={'Damage type'}
          value={data?.damage.damage_type?.name ?? 'not specified'}
        />
      )}
      {data && data.higher_level && data.higher_level.length > 0 && (
        <>
          <StyledLabeledValue
            label={'Higher Level Cast'}
            value={data.higher_level.join('\n-')}
          />
        </>
      )}
      {data &&
        data.damage &&
        data.damage.damage_at_slot_level &&
        data.damage.damage_at_slot_level.length > 0 && (
          <StyledLabeledValue
            label={'Increased damage to levels'}
            value={`${data.damage.damage_at_slot_level.map(key => (
              <StyledText>
                {key.level} {key.damage}
              </StyledText>
            ))}`}
          />
        )}
      {data &&
        data.damage &&
        data.damage.damage_at_character_level &&
        data.damage.damage_at_character_level.length > 0 && (
          <StyledLabeledValue
            label={'Damage increased at character levels'}
            value={`${data.damage.damage_at_character_level.map(key => (
              <StyledText>
                {key.level}
                {key.damage}
              </StyledText>
            ))}`}
          />
        )}
      {data && data.dc && data.dc.type && data.dc.type.name && (
        <StyledLabeledValue
          label={'Saving throw up'}
          value={`${data?.dc.type.name} If you pass: ${
            data?.dc.success ?? 'not specified'
          }`}
        />
      )}
      {data && data.desc && data.desc.length > 0 && (
        <StyledLabeledValue
          label={'Description'}
          value={data?.desc.join('\n') ?? 'Description not available'}
        />
      )}
      <View style={styles.more} />
    </>
  );
}

const styles = StyleSheet.create({
  more: {
    padding: 20,
  },
  space: {
    padding: 15, // Distanzia i bottoni l'uno dall'altro
  },
  little: {
    padding: 8,
  },
});
