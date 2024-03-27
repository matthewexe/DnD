import React from 'react';
import {DescriptionText} from '../ui/texts/DescriptionText';
import {PrimaryText} from '../ui/texts/PrimaryText';
import {MonsterAction} from '../../types/responses';

type Props = {
  actions: MonsterAction;
};

export const MonsterActions = ({actions}: Props) => {
  return (
    <>
      {actions.name && (
        <PrimaryText>
          Name:{'\t\t\t'}
          <DescriptionText>{actions.name}</DescriptionText>
        </PrimaryText>
      )}
      {actions.desc && <DescriptionText>{actions.desc}</DescriptionText>}
    </>
  );
};
