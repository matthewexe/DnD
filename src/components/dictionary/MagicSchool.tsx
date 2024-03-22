import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {
  useGetAbilityScoreQuery,
  useGetLanguageByIndexQuery,
  useGetMagicSchoolQuery,
} from '../../services/api';
import {
  AbilityScoreRequest,
  ConditionRequest,
  LanguageRequest,
  MagicSchoolRequest,
} from '../../types/requests';
import {StyledLabel} from '../ui/texts/LabeldValueStyle';
import {StyledText} from '../ui/texts/StyledText';
import SkillComponent from './Skills';
import {DescriptionText} from '../ui/texts/DescriptionText';
import {PrimaryText} from '../ui/texts/PrimaryText';

type Props = {
  input: MagicSchoolRequest;
};
export default function MagicSchoolComponent({input}: Props) {
  const {data, error, isLoading, isFetching} = useGetMagicSchoolQuery({
    index: input,
  });

  if (error) return <Text>error in fetching</Text>;
  if (isLoading) return <Text>loading...</Text>;
  if (isFetching) return <Text>wait for response from the server</Text>;
  return (
    <>
      <View>
        {data && data.name && (
          <StyledLabel
            label={'Selected school:'}
            value={data.name}></StyledLabel>
        )}
        {data && data.desc && <DescriptionText>{data.desc}</DescriptionText>}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
  },
});
