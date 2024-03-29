import React from 'react';
import {
  ProficiencyChoiceOption,
  ProficiencyOption,
  ProficiencyReferenceOption,
} from '../../../types/responses';
import {StyledText} from '../../../components/ui/texts/StyledText';

type Props = {
  input: ProficiencyOption;
};

export const Proficiency = ({input}: Props) => {
  if (input.option_type === 'reference') {
    const reference = input as ProficiencyReferenceOption;

    return <StyledText>- {reference.item.name}</StyledText>;
  }

  const notReference = input as ProficiencyChoiceOption;

  return (
    <>
      <StyledText>Choose{notReference.choice.choose} options:</StyledText>
      <StyledText>{notReference.choice.desc ?? 'no descrizione'}</StyledText>
    </>
  );
};
