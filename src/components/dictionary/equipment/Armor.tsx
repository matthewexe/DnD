import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useGetArmorQuery} from '../../../services/api';
import {ArmorRequest} from '../../../types/requests';
import {StyledLabeledValue} from '../../../components/ui/texts/StyledLabeledValue';
import {StyledText} from '../../../components/ui/texts/StyledText';
import {StyledSubtitle} from '../../../components/ui/texts/StyledSubtitle';
type Props = {
  input: ArmorRequest;
};

export default function Armor({input}: Props) {
  const {data, error, isLoading, isFetching} = useGetArmorQuery({
    index: input,
  });
  // console.log(itemtype);
  // console.log(input);
  if (error) return <Text>error in fetching</Text>;
  if (isLoading) return <Text>loading...</Text>;
  if (isFetching) return <Text>wait for response from the server</Text>;

  //GREEDY
  // Verifica diretta se dex_bonus è true, tenendo conto che potrebbe essere anche undefined
  const dexBonusIsTrue = !!data?.armor_class.dex_bonus;

  const stealthDisadvantageIsTrue = !!data?.stealth_disadvantage;
  let bonus = '';
  let stealth = '';
  // Usa dexBonusIsTrue in un'istruzione if o direttamente in JSX.
  if (dexBonusIsTrue) {
    bonus = 'You can add your dexterity bonus on the armor';
  } else {
    bonus = 'You cannot add dexterity to armor';
  }
  if (stealthDisadvantageIsTrue) {
    stealth = 'You have disadvantage on stealth checks';
  } else {
    stealth = 'You have no disadvantage on stealth checks';
  }

  return (
    <>
      <StyledSubtitle>Armor type</StyledSubtitle>
      <View style={styles.bit} />
      <StyledText>
        {(data?.armor_category as unknown as string) ?? 'not specified'}
      </StyledText>
      <View style={styles.littlespace} />

      <StyledSubtitle>Base armor value</StyledSubtitle>
      <View style={styles.bit} />
      <StyledText>
        {'CA ' + data?.armor_class.base.toString() ?? 'not specified'}
      </StyledText>
      <View style={styles.littlespace} />

      <StyledSubtitle>Bonus</StyledSubtitle>
      <View style={styles.bit} />
      <StyledText>{bonus}</StyledText>
      <View style={styles.littlespace} />

      <StyledLabeledValue
        label={'Minimum strength to wear armor '}
        value={data?.str_minimum.toString() ?? 'Not defined'}
      />
      <View style={styles.littlespace} />

      <StyledSubtitle>Stealth</StyledSubtitle>
      <View style={styles.bit} />
      <StyledText>{stealth}</StyledText>
      <View style={styles.littlespace} />

      <StyledLabeledValue
        label={`Cost`}
        value={`${data?.cost.quantity}${data?.cost.unit ?? 'not specified'}`}
      />
      <View style={styles.littlespace} />
      <StyledLabeledValue
        label={'Weight'}
        value={data?.weight?.toString() ?? 'Not specified'}
      />
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
