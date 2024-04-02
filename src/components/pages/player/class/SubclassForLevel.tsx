import React from 'react';
import {Text, View} from 'react-native';
import Features from './Features';
import {useGetSubClassesforLevelQuery} from '../../../../services/api';
import {Subclasstypes, FeaturesRequest} from '../../../../types/requests';
import {LabeledValue} from '../../../ui/LabeledValue';
import {StyledText} from '../../../ui/texts/StyledText';
import {StyledAccordionItem} from '../../../ui/StyledAccordion';

type Props = {
  input: Subclasstypes;
  level: number;
};
export default function SubclassForLevel({input, level}: Props) {
  const {data, error, isLoading, isFetching} = useGetSubClassesforLevelQuery({
    index: input,
  });

  if (error) return <Text>error in fetching</Text>;
  if (isLoading) return <Text>loading...</Text>;
  if (isFetching) <Text>attendi risposta dal server</Text>;
  return (
    <View>
      {data &&
        data
          .filter(item => item.level <= level)
          .map(item => (
            <StyledAccordionItem title={`Livello ${item.level}`}>
              {item.features.map(choice => (
                <View>
                  <StyledText>{choice.name}</StyledText>
                  <Features input={choice.index as FeaturesRequest} />
                </View>
              ))}
            </StyledAccordionItem>
          ))}
    </View>
  );
}
