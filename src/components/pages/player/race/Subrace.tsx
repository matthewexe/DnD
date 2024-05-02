import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {useGetSubRacesByIndexQuery} from '../../../../services/api';
import {SubracesRequest} from '../../../../types/requests';
import {TraitsRequest} from '../../../../types/requests';
import RaceTrait from './Trait';
import {StyledText} from '../../../ui/texts/StyledText';
import {StyledSubtitle} from '../../../ui/texts/StyledSubtitle';
import {View} from 'react-native';

type Props = {
  input: SubracesRequest;
};

export default function Subrace({input}: Props) {
  const {data, error, isLoading, isFetching} = useGetSubRacesByIndexQuery({
    index: input,
  });

  if (error) {
    return <Text>error in fetching</Text>;
  }
  if (isLoading || isFetching) {
    return <Text>loading...</Text>;
  }

  return (
    <>
      <StyledSubtitle>The subrace {data?.name} has available:</StyledSubtitle>
      <StyledText>{data?.desc}</StyledText>
      <StyledSubtitle>Your skills:</StyledSubtitle>
      {data?.ability_bonuses.map((choice, ability_score) => (
        <>
          <StyledText key={ability_score}>
            {choice.bonus} bonus point in:
          </StyledText>
          <StyledText key={ability_score}>
            {choice.ability_score.name}
          </StyledText>
        </>
      ))}
      <View style={styles.container} />
      {data?.starting_proficiencies.map((choice, index) => (
        <StyledText key={index}>- {choice.name}</StyledText>
      ))}
      <View style={styles.container} />
      {data && data.language_options && (
        <StyledText>
          You can choose {data?.language_options?.choose} lenguages:
        </StyledText>
      )}
      {data?.language_options?.from.options.map((choice, index) => (
        <StyledText key={index}>- {choice.item.name}</StyledText>
      ))}
      {data && data.racial_traits.length > 0 && (
        <StyledSubtitle>Racial Traits</StyledSubtitle>
      )}
      {data?.racial_traits.map(choice => (
        <>
          <View style={styles.container} />
          <RaceTrait input={choice.index as TraitsRequest} />
        </>
      ))}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
