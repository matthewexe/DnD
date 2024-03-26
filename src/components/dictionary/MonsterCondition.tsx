import React from 'react';
import {Condition} from '../../types/responses';
import {DescriptionText} from '../ui/texts/DescriptionText';
import {PrimaryText} from '../ui/texts/PrimaryText';

type Props = {
  condition_immunities: Condition[];
};

export const MonsterConditionImmunities = ({condition_immunities}: Props) => {
  return (
    <>
      {condition_immunities.map(choice => {
        choice.name && (
          <PrimaryText>
            Condition:
            <DescriptionText>{choice.name}</DescriptionText>
          </PrimaryText>
        );
        choice.desc && <DescriptionText>{choice.desc}</DescriptionText>;
      })}
    </>
  );
};
