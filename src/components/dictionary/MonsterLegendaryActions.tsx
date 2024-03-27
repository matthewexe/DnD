import React from 'react';
import {DescriptionText} from '../ui/texts/DescriptionText';
import {PrimaryText} from '../ui/texts/PrimaryText';
import {LegendaryAction} from '../../types/responses';
import {MonsterDC} from './MonsterDc';
import {StyleSheet, View} from 'react-native';
import {customTheme2} from '../../constants/theme';

type Props = {
  action: LegendaryAction;
};

export const MonsterLegendaryAction = ({action}: Props) => {
  return (
    <>
      <PrimaryText>{action.name}:</PrimaryText>
      <DescriptionText>{action.desc}</DescriptionText>
      {action.damage &&
        action.damage.length > 0 &&
        action.damage.map(action => (
          <PrimaryText>{`${action.damage_dice} ${action.damage_type.name}`}</PrimaryText>
        ))}
      {action.dc && <MonsterDC dc={action.dc} />}
      <View style={styles.spece}></View>
      <View style={styles.primaryTextContainer}></View>
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
