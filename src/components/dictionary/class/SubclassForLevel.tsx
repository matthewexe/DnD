import React from 'react';
import {Text} from 'react-native';
import Features from './Features';
import {useGetSubClassesforLevelQuery} from '../../../services/api';
import {Subclasstypes, FeaturesRequest} from '../../../types/requests';
import {LabeledValue} from '../../ui/LabeledValue';
import {StyledText} from '../../ui/texts/StyledText';

type Props = {
  input: Subclasstypes;
};
export default function SubclassForLevel({input}: Props) {
  const {data, error, isLoading, isFetching} = useGetSubClassesforLevelQuery({
    index: input,
  });

  if (error) return <Text>error in fetching</Text>;
  if (isLoading) return <Text>loading...</Text>;
  if (isFetching) <Text>attendi risposta dal server</Text>;
  return (
    <>
      <LabeledValue label={'Level:'} value={`${data?.level}`} />
      {data?.features.map(choice => (
        <>
          <StyledText>{choice.name}</StyledText>
          <Features input={choice.index as FeaturesRequest} />
        </>
      ))}
    </>
  );
}
