import React from 'react';
import {HomeScreenProps} from '../../../routes/HomeProps';
import {useRealm} from '@realm/react';

type Props = HomeScreenProps<'GameDetail'>;

export const GameDetail = () => {
  const realm = useRealm();
};
