import React from 'react';
import {Text} from 'react-native';
import {useGetClassByIndexQuery} from '../services/api';
import {ApiFieldsAdapter} from '../helpers/adapter';

export const Test = () => {
  const {data} = useGetClassByIndexQuery({index: 'barbarian'});

  console.log(
    data
      ? data.proficiency_choices.map(value =>
          value.from.options.map(item =>
            ApiFieldsAdapter.proficiencyChoices(item).reduce(
              (prev, cur) => prev + cur,
            ),
          ),
        )
      : null,
  );

  return <Text>Test</Text>;
};
