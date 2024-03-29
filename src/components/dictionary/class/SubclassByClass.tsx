import React from 'react';
import {Text, View} from 'react-native';
import {useGetSubClassesAvilableByIndexQuery} from '../../../services/api';
import {ClassIndexRequest} from '../../../types/requests';
import {StyledSubtitle} from '../../ui/texts/StyledSubtitle';
import {StyledText} from '../../ui/texts/StyledText';

type Props = {
  input: ClassIndexRequest;
};
export default function SubclassByClass({input}: Props) {
  const {data, error, isLoading, isFetching} =
    useGetSubClassesAvilableByIndexQuery({
      index: input,
    });

  if (error) return <Text>error in fetching</Text>;
  if (isLoading) return <Text>loading...</Text>;
  if (isFetching) <Text>attendi risposta dal server</Text>;
  return (
    <View>
      <StyledSubtitle>Subclasses</StyledSubtitle>
      <StyledText>Possible choices: {data?.count}</StyledText>
      {data &&
        data.results &&
        data.results.map(choice => <StyledText>- {choice.name}</StyledText>)}
    </View>
  );
}
