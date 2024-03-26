import React from 'react';
import {DescriptionText} from '../ui/texts/DescriptionText';
import {Senses} from '../../types/responses';
import {PrimaryText} from '../ui/texts/PrimaryText';

type Props = {
  senses: Senses;
};

export const MonsterSenses = ({senses}: Props) => {
  return (
    <>
      {senses.blindsight && (
        <PrimaryText>
          Blindsight
          <DescriptionText>{senses.blindsight}</DescriptionText>
        </PrimaryText>
      )}
      {senses.darkvision && (
        <PrimaryText>
          Darkvision
          <DescriptionText>{senses.darkvision}</DescriptionText>
        </PrimaryText>
      )}
      {senses.passive_perception && (
        <PrimaryText>
          Passive Perception
          <DescriptionText>{senses.passive_perception}</DescriptionText>
        </PrimaryText>
      )}
      {senses.tremorsense && (
        <PrimaryText>
          Tremorsense
          <DescriptionText>{senses.tremorsense}</DescriptionText>
        </PrimaryText>
      )}
      {senses.truesight && (
        <PrimaryText>
          Truesight
          <DescriptionText>{senses.truesight}</DescriptionText>
        </PrimaryText>
      )}
    </>
  );
};
