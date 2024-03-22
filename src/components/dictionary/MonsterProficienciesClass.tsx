import React from 'react';
import {Proficiency} from '../../types/responses';
import {DescriptionText} from '../ui/texts/DescriptionText';

type Props = {
  proficiencies_class: Proficiency;
};

export const MonsterProficienciesClass = ({proficiencies_class}: Props) => {
  return (
    <>
      <DescriptionText>{proficiencies_class.name}</DescriptionText>
    </>
  );
};
