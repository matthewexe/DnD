import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useGetRacesByIndexQuery} from '../../../services/api';
import {RacesRequest, TraitsRequest} from '../../../types/requests';
import {StyledSubtitle} from '../../ui/texts/StyledSubtitle';
import {StyledText} from '../../ui/texts/StyledText';
import {StyledLabeledValue} from '../../ui/texts/StyledLabeledValue';
import {convertFootToMeters} from '../../../utils/convertFootToMeters';
import RaceTrait from './RaceTrait';
import {ProficiencyReferenceOption} from 'types/responses';
import CheckSubrace from './CheckSubrace';

type Props = {
  input: RacesRequest;
};
export default function Race({input}: Props) {
  const {data, error, isLoading, isFetching} = useGetRacesByIndexQuery({
    index: input,
  });

  if (error) return <Text>error in fetching</Text>;
  if (isLoading) return <Text>loading...</Text>;
  if (isFetching) return <Text>wait for response from the server</Text>;

  return (
    <>
      <View>
        <StyledLabeledValue
          label="Name"
          value={data?.name ?? 'race not available'}
        />

        <StyledSubtitle>Speed</StyledSubtitle>
        {data && data.speed && (
          <StyledText>
            {data.speed} foot or {convertFootToMeters(data.speed)}
          </StyledText>
        )}

        <StyledLabeledValue
          label="Stature"
          value={data?.size ?? 'stature not available'}
        />
        {data && data.languages && (
          <StyledLabeledValue
            label={'Languages'}
            value={data?.languages?.map((language, index) => (
              <StyledText key={index}>
                {language.name}
                {'\n'}
              </StyledText>
            ))}
          />
        )}
        <StyledSubtitle>Traits:</StyledSubtitle>
        {data?.traits?.map(traits => (
          <>
            <RaceTrait input={traits.index as TraitsRequest} />
          </>
        ))}
        <StyledSubtitle>Race Bonuses</StyledSubtitle>
        {data?.ability_bonuses.map((choice, index) => (
          <StyledText key={index}>
            {choice.ability_score.name ?? 'not available'} +{choice.bonus}
          </StyledText>
        ))}
        {/*NB: per ogni razza ci sono ipoteticamente dei bonus da aggiungere su determinate caratteriistiche "index"  di un certo amount "bonus". */}
        {data && data.starting_proficiencies.length > 0 && (
          <StyledLabeledValue
            label={'Proficiencies'}
            value={data.starting_proficiencies.map(choice => (
              <StyledText>
                {choice.name}
                {'\n'}
              </StyledText>
            ))}
          />
        )}

        {/* <StyledSubtitle>Traits of the breed:</StyledSubtitle> */}
        {/* <TraitByRace input={input} /> */}

        {data && data.starting_proficiency_options && (
          <StyledLabeledValue
            label={'Available options'}
            value={data.starting_proficiency_options.choose.toString() ?? '0'}
          />
        )}
        {data &&
          data.starting_proficiency_options &&
          data.starting_proficiency_options.desc && (
            <StyledSubtitle>
              {data.starting_proficiency_options.desc}
            </StyledSubtitle>
          )}
        {data?.starting_proficiency_options?.from.options.map(
          (option, index) => (
            <StyledText key={index}>
              -{(option as ProficiencyReferenceOption).item.name}
            </StyledText>
          ),
        ) ?? <StyledText>Proficiency options not available</StyledText>}

        {/*INIZIO DESCRIZIONE (STRINGHE) la parte meno importante a livello implementativo. */}
        <StyledSubtitle>Race description:</StyledSubtitle>
        <StyledLabeledValue
          label="Language"
          value={data?.language_desc ?? 'Language description not available'}
        />
        <StyledLabeledValue
          label="Your racial alignment"
          value={data?.alignment ?? 'Alignment not available'}
        />
        <StyledLabeledValue
          label="The tendency of your species"
          value={data?.age ?? 'Age description not available'}
        />
        <StyledLabeledValue
          label="The size of your species"
          value={data?.size_description ?? 'Height description not available'}
        />
        <View style={styles.space} />
        <CheckSubrace input={input} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  space: {
    padding: 20, // Distanzia i bottoni l'uno dall'altro
  },
  little: {
    padding: 10,
  },
});
