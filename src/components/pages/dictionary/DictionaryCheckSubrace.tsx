import React from 'react';
import {Text} from 'react-native';
import {useGetCheckSubRacesByIndexByRaceQuery} from '../../../services/api';
import {RaceIndexRequest, SubraceIndexRequest} from '../../../types/requests';
import SubraceByIndexComponent from './DictionarySubrace';
import {StyledText} from '../../ui/texts/StyledText';
import {APIReference} from '../../../types/responses';
import {SelectMenu} from '../../ui/SelectMenu';

type Props = {
  input: RaceIndexRequest;
  onSelectedValue: (item: SubraceIndexRequest) => void;
};

//Serve per verificare se ci sono sottorazze disponibili si continua la ricerca, altrimenti si ignora
export default function SubraceByRace({input, onSelectedValue}: Props) {
  const {data, error, isLoading, isFetching} =
    useGetCheckSubRacesByIndexByRaceQuery({
      index: input,
    });

  const [selectedSubrace, setSelectedSubrace] = React.useState<string>('');

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
            <StyledText>You have at your disposal:</StyledText>
            <SelectMenu
              data={data?.results}
              onSelect={(item: APIReference) => {
                onSelectedValue(
                  (item.index ?? 'high-elf') as SubraceIndexRequest,
                );
                setSelectedSubrace(item.index ?? '');
              }}
              label="Subraces"
            />
            <SubraceByIndexComponent
              input={selectedSubrace as SubraceIndexRequest}
            />
          </>
        )}
      </>
    );
  }
}
