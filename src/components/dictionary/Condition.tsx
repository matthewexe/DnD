import React from 'react';
import {Text, View} from 'react-native';
import {useGetConditionQuery} from '../../services/api';
import {ConditionRequest} from '../../types/requests';
import {StyledLabel} from '../ui/texts/LabeldValueStyle';

type Props = {
  input: ConditionRequest;
};
export default function ConditionComponent({input}: Props) {
  const {data, error, isLoading, isFetching} = useGetConditionQuery({
    index: input,
  });

  if (error) return <Text>error in fetching</Text>;
  if (isLoading) return <Text>loading...</Text>;
  if (isFetching) return <Text>wait for response from the server</Text>;
  return (
    <>
      <View>
        {data && data.desc && (
          <StyledLabel
            label={data.name}
            value={data.desc.join('\n')}></StyledLabel>
        )}
      </View>
    </>
  );
}
