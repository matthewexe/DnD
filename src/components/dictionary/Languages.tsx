import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {
  useGetAbilityScoreQuery,
  useGetLanguageByIndexQuery,
} from '../../services/api';
import {
  AbilityScoreRequest,
  ConditionRequest,
  LanguageRequest,
} from '../../types/requests';
import {StyledLabel} from '../ui/texts/LabeldValueStyle';
import {StyledText} from '../ui/texts/StyledText';
import SkillComponent from './Skills';
import {DescriptionText} from '../ui/texts/DescriptionText';
import {PrimaryText} from '../ui/texts/PrimaryText';

type Props = {
  input: LanguageRequest;
};
export default function LanguagesComponent({input}: Props) {
  const {data, error, isLoading, isFetching} = useGetLanguageByIndexQuery({
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
            label={'Linguaggio selezionato:'}
            value={data.name}></StyledLabel>
        )}
        {data && data.desc && <DescriptionText>{data.desc}</DescriptionText>}
        <View style={styles.container}></View>
        {data && data.typical_speakers && (
          <StyledLabel
            label={'Those who typically speak this language are:'}
            value={data.typical_speakers.join('\n')}></StyledLabel>
        )}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
  },
});
