import React, {useRef, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useGetCheckSubRacesByIndexByRaceQuery} from '../../../../services/api';
import {
  RacesRequest,
  SubraceIndexRequest,
  SubracesRequest,
} from '../../../../types/requests';
import {StyledText} from '../../../ui/texts/StyledText';
import Subrace from './Subrace';
import {StyledSubtitle} from '../../../ui/texts/StyledSubtitle';
import {SelectMenu} from '../../../ui/SelectMenu';

type Props = {
  input: RacesRequest;
  onSelectedValue: (value: SubracesRequest) => void;
};

//Serve per verificare se ci sono sottorazze disponibili si continua la ricerca, altrimenti si ignora
export default function CheckSubrace({input, onSelectedValue}: Props) {
  const {data, error, isLoading, isFetching} =
    useGetCheckSubRacesByIndexByRaceQuery({
      index: input,
    });

  const subraceRef = useRef<SubracesRequest | undefined>(undefined);

  const [subrace, setSubrace] = useState<SubracesRequest | undefined>(
    undefined,
  );

  if (error) return <Text>error in fetching</Text>;
  if (isLoading || isFetching) return <Text>loading...</Text>;

  return (
    <View>
      {(!data || !data.results) && <StyledText>No Subrace found</StyledText>}
      <StyledSubtitle>Subraces</StyledSubtitle>
      {data && data?.count === 0 && (
        <StyledText>There are currently no Subraces available </StyledText>
      )}
      {data && data.count !== 0 && (
        <SelectMenu
          label="Subraces Available"
          data={data?.results ?? []}
          onSelect={item => {
            onSelectedValue(item.index);
            setSubrace(item.index);
          }}
        />
      )}
      {subrace && <Subrace input={subrace} />}
    </View>
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
