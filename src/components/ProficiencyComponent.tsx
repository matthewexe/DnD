import React from 'react';
import {
  ProficiencyChoiceOption,
  ProficiencyOption,
  ProficiencyReferenceOption,
} from '../types/responses';
import {Text} from 'react-native';

type Props = {
  option: ProficiencyOption;
};

export const ProficiencyComponent = ({option}: Props) => {
  if (option.option_type === 'reference') {
    const reference = option as ProficiencyReferenceOption;

    return <Text>{reference.item.name}</Text>;
  }

  const notReference = option as ProficiencyChoiceOption;

  return (
    <>
      <Text>Scegli{notReference.choice.choose} opzione:</Text>
      <Text>{notReference.choice.desc ?? 'no descrizione'}</Text>
    </>
  );
};
