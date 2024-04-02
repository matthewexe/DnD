import React from 'react';
import {Text, View} from 'react-native';
import {useGetSubclassResourcesQuery} from '../../../services/api';
import {FeaturesRequest, Subclasstypes} from '../../../types/requests';
import {StyledLabeledValue} from '../../../components/ui/texts/StyledLabeledValue';
import Features from '../class/Features';

type Props = {
  input: Subclasstypes;
};
export default function SubclassResources({input}: Props) {
  const {data, error, isLoading, isFetching} = useGetSubclassResourcesQuery({
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
        {data &&
          data.map(choice => (
            <>
              <StyledLabeledValue
                label={'Level'}
                value={choice.level.toString()}
              />
              {choice.features.map(item => (
                <Features input={item.index as FeaturesRequest} />
              ))}
            </>
          ))}
      </View>
    </>
  );
}
