import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import Features from './Features';
import {useGetSubClassesforLevelQuery} from '../../../../services/api';
import {Subclasstypes, FeaturesRequest} from '../../../../types/requests';
import {StyledAccordionItem} from '../../../ui/StyledAccordion';
import FontAwesome6Icon from 'react-native-vector-icons/FontAwesome6';

type Props = {
  input: Subclasstypes;
  level: number;
};
export default function SubclassForLevel({input, level}: Props) {
  const {data, error, isLoading, isFetching} = useGetSubClassesforLevelQuery({
    index: input,
  });

  if (error) return <Text>error in fetching</Text>;
  if (isLoading || isFetching) return <Text>loading...</Text>;

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <View>
      {data &&
        data
          .filter(item => item.level <= level)
          .map(item => (
            <StyledAccordionItem
              title={`Level ${item.level}`}
              icon={collapsed => {
                const name = collapsed ? 'plus' : 'xmark';
                return <FontAwesome6Icon name={name} size={16} />;
              }}>
              {item.features.map(choice => (
                <View>
                  <Features input={choice.index as FeaturesRequest} />
                </View>
              ))}
            </StyledAccordionItem>
          ))}
    </View>
  );
}
