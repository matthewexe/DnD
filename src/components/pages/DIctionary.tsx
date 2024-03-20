import React, {useState} from 'react';
import {AlignmentRequest, ClassIndexRequest} from '../../types/requests';

type Props = {
  alignament: AlignmentRequest;
  class: ClassIndexRequest;
};

export const BasicInfo = ({navigation}: Props) => {
  const {
    data: raceData,
    isLoading: isLoadingRace,
    error: raceError,
  } = useGetEndpointResourceQuery('races');

  const [raceState, setRace] = useState<RaceIndexRequest>('dragonborn');

  if (isLoadingRace) {
    return <Text>Loading...</Text>;
  }
  if (raceError) {
    //return Error;
  }

  return (
    <>
      <StyledSubtitle>Basic Information</StyledSubtitle>
      <View style={styles.rowStyle}>
        <StyledText>ciao</StyledText>
        <Text
          style={{
            width: 110,
          }}
        />
        <StyledButton text="< Cancel" onPress={navigation.goBack} />
      </View>
      <Text />
      <InputText label="Player Name" placeholder="Enter Player Name" />
      <Text />
      <InputText label="Character Name" placeholder="Enter Character Name" />
      <Text />
      <Text />
      <SelectMenu
        label="Character Race"
        onSelect={item => {
          setRace(item.index);
        }}
        data={raceData?.results ?? []}
      />
      <Text />
      <Text />
      <View style={{alignSelf: 'center'}}>
        <StyledButton
          text="Next"
          onPress={() => {
            navigation.navigate('Race', {
              class: 'barbarian',
              race: raceState,
              level: 1,
              userData: {class: undefined, race: raceState},
            });
          }}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  rowStyle: {
    flexDirection: 'row',
  },
});
