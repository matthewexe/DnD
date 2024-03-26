import React from 'react';
import {ActionDc} from '../../types/responses';
import {DescriptionText} from '../ui/texts/DescriptionText';

type Props = {
  dc: ActionDc;
};

export const MonsterDC = ({dc}: Props) => {
  return (
    <>
      {dc.type && (
        <DescriptionText>{`${dc.type.name} ${dc.value}`}</DescriptionText>
      )}
      {dc.success && <DescriptionText>On Succes: {dc.success}</DescriptionText>}
    </>
  );
};
