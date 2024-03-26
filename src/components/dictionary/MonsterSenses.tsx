import React from 'react';
import {DescriptionText} from '../ui/texts/DescriptionText';
import {Senses} from '../../types/responses';
import {PrimaryText} from '../ui/texts/PrimaryText';
import {convertFootToMeters} from '../../utils/convertFootToMeters';
import {extractDigits} from '../../utils/extractDigits';

type Props = {
  senses: Senses;
};

export const MonsterSenses = ({senses}: Props) => {
  return (
    <>
      {senses.blindsight && (
        <PrimaryText>
          Blindsight:{'\t\t\t'}
          <DescriptionText>{senses.blindsight}</DescriptionText>
        </PrimaryText>
      )}
      {senses.darkvision && (
        <PrimaryText>
          Darkvision:{'\t\t\t'}
          <DescriptionText>
            {senses.darkvision} or{' '}
            {convertFootToMeters(extractDigits(senses.darkvision))}
          </DescriptionText>
        </PrimaryText>
      )}
      {senses.passive_perception && (
        <PrimaryText>
          Passive Perception:{'\t\t\t'}
          <DescriptionText>{senses.passive_perception}</DescriptionText>
        </PrimaryText>
      )}
      {senses.tremorsense && (
        <PrimaryText>
          Tremorsense:{'\t\t\t'}
          <DescriptionText>{senses.tremorsense}</DescriptionText>
        </PrimaryText>
      )}
      {senses.truesight && (
        <PrimaryText>
          Truesight:{'\t\t\t'}
          <DescriptionText>{senses.truesight}</DescriptionText>
        </PrimaryText>
      )}
    </>
  );
};
