import React from 'react';
import {DescriptionText} from '../ui/texts/DescriptionText';
import {PrimaryText} from '../ui/texts/PrimaryText';
import {MonsterAction} from '../../types/responses';

type Props = {
  actions: MonsterAction[];
};

export const MonsterActions = ({actions}: Props) => {
  return (
    <>
      {actions.map(choice => {
        choice.name && (
          <PrimaryText>
            Name:<DescriptionText>{choice.name}</DescriptionText>
          </PrimaryText>
        ),
          choice.desc && <DescriptionText>{choice.desc}</DescriptionText>;
      })}
    </>
  );
};
