import React from 'react';
import {
  ProficiencyChoice,
  ProficiencyReferenceOption,
} from '../../types/responses';
import {DescriptionText} from '../ui/texts/DescriptionText';
import {StyleSheet, View} from 'react-native';
import {customTheme2} from '../../constants/theme';

type Props = {
  choice: ProficiencyChoice;
};

export const MulticlassProficiencyChoices = ({choice}: Props) => {
  return (
    <>
      <View style={styles.primaryTextContainer} />
      <DescriptionText>
        You can choose:{'\t\t'} {choice.choose}
        {'\t\t'} {choice.desc}
      </DescriptionText>
      {choice.from.options.map(sel => (
        <DescriptionText>
          {(sel as ProficiencyReferenceOption).item.name}
        </DescriptionText>
      ))}
    </>
  );
};

const styles = StyleSheet.create({
  primaryTextContainer: {
    borderBottomColor: customTheme2.colors.primary,
    borderBottomWidth: 1,
    padding: 20,
    backgroundColor: 'transparent',
  },
});
