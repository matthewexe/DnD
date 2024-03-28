import React from 'react';
import {Text, View} from 'react-native';
import {useGetAbilityScoreQuery} from '../../services/api';
import {AbilityScoreRequest, SkillRequest} from '../../types/requests';
import {StyledLabel} from '../ui/texts/LabeldValueStyle';
import {StyledText} from '../ui/texts/StyledText';
import SkillComponent from './Skills';
import {PrimaryText} from '../ui/texts/PrimaryText';
import {StyledSubtitle} from '../ui/texts/StyledSubtitle';

type Props = {
  input: AbilityScoreRequest;
};
export default function AbilityScoresComponent({input}: Props) {
  const {data, error, isLoading, isFetching} = useGetAbilityScoreQuery({
    index: input,
  });

  if (error) {
    return <Text>error in fetching</Text>;
  }
  if (isLoading) {
    return <Text>loading...</Text>;
  }
  if (isFetching) {
    return <Text>wait for response from the server</Text>;
  }
  return (
    <>
      <View>
        {data && data.full_name && (
          <>
            <StyledLabel label={'Selected Ability:'} value="" />
            <PrimaryText>{data.full_name}</PrimaryText>
          </>
        )}
        <StyledLabel
          label={'Description:'}
          value={data?.desc.join('\n') ?? 'not found'}
        />
        {data && data.skills.length > 0 && (
          <StyledLabel label={'Available skills:'} value={' '} />
        )}
        {data &&
          data.skills &&
          data.skills.map(choice => (
            <>
              <StyledSubtitle>{choice.name}</StyledSubtitle>
              <SkillComponent input={choice.index as SkillRequest} />
            </>
          ))}
      </View>
    </>
  );
}
