import React from 'react';
import {Condition} from '../../types/responses';
import {DescriptionText} from '../ui/texts/DescriptionText';
import {PrimaryText} from '../ui/texts/PrimaryText';

type Props = {
  condition_immunities: Condition;
};

export const MonsterConditionImmunities = ({condition_immunities}: Props) => {
  return (
    <>
      {condition_immunities.name && (
        <PrimaryText>
          Condition:{'\t\t\t'}
          <DescriptionText>{condition_immunities.name}</DescriptionText>
        </PrimaryText>
      )}
      {condition_immunities.desc && (
        <DescriptionText>{condition_immunities.desc}</DescriptionText>
      )}
    </>
  );
};
