import React from 'react';
import {DescriptionText} from '../ui/texts/DescriptionText';
import {PrimaryText} from '../ui/texts/PrimaryText';
import {LegendaryAction} from '../../types/responses';
import {MonsterDC} from './MonsterDc';

type Props = {
  action: LegendaryAction[];
};

export const MonsterLegendaryAction = ({action}: Props) => {
  return (
    <>
      {action.map(choice => {
        <PrimaryText>
          {choice.name}
          <DescriptionText>{choice.desc}</DescriptionText>
        </PrimaryText>;
        choice.damage &&
          choice.damage.length > 0 &&
          choice.damage.map(choice => (
            <PrimaryText>{`${choice.damage_dice} ${choice.damage_type}`}</PrimaryText>
          ));
        choice.dc && <MonsterDC dc={choice.dc} />;
      })}
    </>
  );
};
