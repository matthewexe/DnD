import React from 'react';
import {Text, View} from 'react-native';
import {useGetFeaturesQuery} from '../../services/api';
import {FeaturesRequest} from '../../types/requests';
import {StyledLabel} from '../ui/texts/LabeldValueStyle';
import {PrimaryText} from '../ui/texts/PrimaryText';
import {DescriptionText} from '../ui/texts/DescriptionText';

type Props = {
  input: FeaturesRequest;
};
export default function FeaturesComponent({input}: Props) {
  const {data, error, isLoading, isFetching} = useGetFeaturesQuery({
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
            label={'Selected Feature:'}
            value={data.name}></StyledLabel>
        )}
        {data && data.class && (
          <PrimaryText>
            Available only for {data?.class.name} class from level{' '}
            {data.level ?? 'not specified'}
          </PrimaryText>
        )}
        {data && data.prerequisites.length > 0 && (
          <StyledLabel label={'Prerequisites:'} value={''}></StyledLabel>
        )}
        {data &&
          data.prerequisites.length > 0 &&
          data.prerequisites.map(choice => (
            <>
              {choice.type && (
                <DescriptionText>Type:{choice.type}</DescriptionText>
              )}
              {choice.level && (
                <DescriptionText>Livello:{choice.level}</DescriptionText>
              )}
            </>
          ))}
        {/* dqw ----------------------------------------------------------------------------------------------------------------------*/}
        {data && data.desc && (
          <StyledLabel
            label={'Description:'}
            value={data.desc.join('\n')}></StyledLabel>
        )}
        {data && data.subclass && (
          <StyledLabel
            label={'Available also for Subclass:'}
            value={data.subclass.name}></StyledLabel>
        )}
      </View>
    </>
  );
}
