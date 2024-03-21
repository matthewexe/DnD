import React from 'react';
import {Text, View} from 'react-native';
import {useGetDamageTypeQuery} from '../../services/api';
import {DamageTypeRequest} from '../../types/requests';
import {StyledLabel} from '../ui/texts/LabeldValueStyle';

type Props = {
  input: DamageTypeRequest;
};
export default function DamageTypeComponent({input}: Props) {
  const {data, error, isLoading, isFetching} = useGetDamageTypeQuery({
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
