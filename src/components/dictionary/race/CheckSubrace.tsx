import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useGetCheckSubRacesByIndexByRaceQuery} from '../../../services/api';
import {RacesRequest, SubraceIndexRequest} from '../../../types/requests';
import {StyledText} from '../../ui/texts/StyledText';
import Subrace from './Subrace';
import {StyledSubtitle} from '../../../components/ui/texts/StyledSubtitle';

type Props = {
  input: RacesRequest;
};

//Serve per verificare se ci sono sottorazze disponibili si continua la ricerca, altrimenti si ignora
export default function CheckSubrace({input}: Props) {
  const {data, error, isLoading, isFetching} =
    useGetCheckSubRacesByIndexByRaceQuery({
      index: input,
    });
  console.log(input);
  if (error) return <Text>error in fetching</Text>;
  if (isLoading) return <Text>loading...</Text>;
  if (isFetching) return <Text>wait for response from the server</Text>;
  if (data?.count === 0) {
    return (
      <>
        <StyledText>There are currently no Subraces available </StyledText>
      </>
    );
  } else {
    return (
      <>
        {(!data || !data.results) && <StyledText>No Subrace found</StyledText>}
        <StyledSubtitle>Subraces</StyledSubtitle>
        <View style={styles.little} />
        {data && data.results && (
          <>
            {data && data.count && (
              <StyledText>
                You have at your disposal {data.count} choices:
              </StyledText>
            )}
            {data &&
              data.results &&
              data.results.map(choice => (
                <>
                  <StyledText>-{choice.name}</StyledText>
                </>
              ))}
            <View style={styles.space} />
            {data &&
              data.results &&
              data.results.map(choice => (
                <Subrace input={choice.index as SubraceIndexRequest} />
              ))}
          </>
        )}
      </>
    );
  }
}

const styles = StyleSheet.create({
  space: {
    padding: 20, // Distanzia i bottoni l'uno dall'altro
  },
  little: {
    padding: 10,
  },
});
