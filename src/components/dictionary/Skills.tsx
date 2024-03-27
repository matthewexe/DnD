import React from 'react';
import {Text, View} from 'react-native';
import {useGetSkillByIndexQuery} from '../../services/api';
import {SkillRequest} from '../../types/requests';
import {DescriptionText} from '../ui/texts/DescriptionText';

type Props = {
  input: SkillRequest;
};
export default function SkillComponent({input}: Props) {
  const {data, error, isLoading, isFetching} = useGetSkillByIndexQuery({
    index: input,
  });

  if (error) return <Text>error in fetching</Text>;
  if (isLoading) return <Text>loading...</Text>;
  if (isFetching) return <Text>wait for response from the server</Text>;
  return (
    <>
      <View>
        {data && data.desc && (
          <DescriptionText>
            {data.desc.join('\n') ?? 'Not found'}
          </DescriptionText>
        )}
      </View>
    </>
  );
}
