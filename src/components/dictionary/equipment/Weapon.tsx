import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useGetWeaponQuery} from '../../../services/api';
import {EquipmentItemRequest} from '../../../types/requests';
import {StyledSubtitle} from '../../../components/ui/texts/StyledSubtitle';
import {StyledText} from '../../../components/ui/texts/StyledText';
import {StyledLabeledValue} from '../../../components/ui/texts/StyledLabeledValue';
import {converterLbToKg} from '../../../helper/converterLbToKg';
import {convertFootToMeters} from '../../../utils/convertFootToMeters';
import {extractDigits} from '../../../utils/extractDigits';

export default function Weapon({input}: {input: EquipmentItemRequest}) {
  const {data, error, isLoading, isFetching} = useGetWeaponQuery({
    index: input,
  });

  if (error) return <Text>error in fetching</Text>;
  if (isLoading) return <Text>loading...</Text>;
  if (isFetching) return <Text>wait for response from the server</Text>;
  return (
    <>
      {data && (
        <>
          <StyledSubtitle>{data.name}</StyledSubtitle>
          <View style={styles.littlespace} />
        </>
      )}
      {data && (
        <StyledLabeledValue
          label={'Range'}
          value={`${data.range.normal.toString()} ft  or ${convertFootToMeters(
            data.range.normal,
          )}`}
        />
      )}
      {data && data.range && data.range.long && (
        <>
          <StyledLabeledValue
            label={'Long Range'}
            value={`${data.range.long.toString()} ft  or ${convertFootToMeters(
              data.range.normal,
            )}`}
          />
        </>
      )}
      {data && data.category_range && (
        <>
          <StyledSubtitle>Weapon type</StyledSubtitle>
          <View style={styles.bit} />
          <StyledText>
            {data?.category_range.toString() ?? 'not available'}
          </StyledText>
          <View style={styles.littlespace} />
        </>
      )}
      <StyledLabeledValue
        label={'Cost'}
        value={`${data?.cost.quantity} ${data?.cost.unit}`}
      />
      <View style={styles.littlespace} />

      <StyledSubtitle>Damage & Type</StyledSubtitle>
      <View style={styles.bit} />
      <StyledText>
        {`${data?.damage?.damage_dice}  ${data?.damage?.damage_type.name}`}
      </StyledText>
      <View style={styles.littlespace} />

      {data && data.two_handed_damage && (
        <StyledLabeledValue
          label={'Two Handed Damage'}
          value={`${data?.two_handed_damage?.damage_dice}  ${data?.two_handed_damage?.damage_type.name}`}
        />
      )}
      {data && data.throw_range && (
        <>
          <StyledSubtitle>Throwable</StyledSubtitle>
          <View style={styles.bit} />
          <StyledText>
            {`${data?.throw_range?.normal ?? 0} / ${
              data?.throw_range?.long ?? 0
            } ft  or  ${extractDigits(
              convertFootToMeters(data?.throw_range?.normal ?? 0),
            )} /${convertFootToMeters(data?.throw_range?.long ?? 0)}`}
          </StyledText>
          <View style={styles.littlespace} />
        </>
      )}
      <StyledLabeledValue
        label={'Weight'}
        value={`${
          data?.weight?.toString() ?? 'not specified'
        } lb  /  ${converterLbToKg(data?.weight ?? 0)} kg`}
      />
      {data && data.desc && data.desc.length > 0 && (
        <>
          <StyledSubtitle>Description</StyledSubtitle>
          <StyledText>-{data.desc?.join('\n-')}</StyledText>
        </>
      )}

      {data && data.special && data.special?.length > 0 && (
        <>
          <StyledSubtitle>Specials</StyledSubtitle>
          <StyledText>-{data.special?.join('\n-')}</StyledText>
        </>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  bit: {
    padding: 5,
  },
  littlespace: {
    margin: 10, // Distanzia i bottoni l'uno dall'altro
  },
});
