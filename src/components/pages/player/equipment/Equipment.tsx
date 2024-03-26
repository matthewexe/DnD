import React from 'react';
import {HomeScreenProps} from '../../../../routes/HomeProps';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ScrollView} from 'react-native-gesture-handler';
import StyledTitle from '../../../ui/texts/StyledTitle';
import {View} from 'react-native';
import {StyledSubtitle} from '../../../ui/texts/StyledSubtitle';
import {StyledText} from '../../../ui/texts/StyledText';
import {useGetClassByIndexQuery} from '../../../../services/api';

type Props = HomeScreenProps<'NewPlayer_Equip'>;

export const Equipment = ({route, navigation}: Props) => {
  const {data, error, isLoading, isFetching} = useGetClassByIndexQuery({
    index: route.params.playerData.class,
  });

  const userData = route.params.playerData;

  // TODO: loading/error

  return (
    <SafeAreaView>
      <ScrollView>
        <StyledTitle>Equipment</StyledTitle>
        <View>
          <StyledSubtitle>Starting Equipment</StyledSubtitle>
          {data?.starting_equipment?.map((choice, index) => (
            <StyledText key={index}>
              {choice.equipment.name} quantità:{choice.quantity}
            </StyledText>
          ))}
          <StyledSubtitle>Additional Equipment</StyledSubtitle>
          {/* TODO: tabella di scelta per l'equipaggiamento
          <Text>Scegli ulteriore equipaggiamento:</Text>
      {data?.starting_equipment_options?.map((choice, index) => (
        <EquipmentOptionComponent choice={choice} />
      ))} */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
