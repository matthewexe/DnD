import React from 'react';
import {Text} from 'react-native';
import {useGetCheckSubRacesByIndexByRaceQuery} from '../../../services/api';
import {RacesRequest} from '../../../types/requests';
import {StyledText} from '../../ui/texts/StyledText';

type Props = {
  input: RacesRequest;
};

//Serve per verificare se ci sono sottorazze disponibili si continua la ricerca, altrimenti si ignora
export default function CheckSubrace({input}: Props) {
  const {data, error, isLoading, isFetching} =
    useGetCheckSubRacesByIndexByRaceQuery({
      index: input,
    });

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
                  <StyledText>{choice.name}</StyledText>
                </>
              ))}
            {/*  {data && 
               data.results &&
               data.results.map(choice => <Subrace input={choice.index} />)}*/}
          </>
        )}
      </>
    );
  }
}
