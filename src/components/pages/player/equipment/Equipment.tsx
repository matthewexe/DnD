import React, {useEffect, useRef} from 'react';
import {HomeScreenProps} from '../../../../routes/HomeProps';
import {View} from 'react-native';
import {StyledSubtitle} from '../../../ui/texts/StyledSubtitle';
import {StyledText} from '../../../ui/texts/StyledText';
import {
  useGetClassByIndexQuery,
  useGetResourcesByClassByLevelQuery,
} from '../../../../services/api';
import {Options} from '../../../options/Options';
import {
  EquipmentConverter,
  snakeCaseToTitleCase,
} from '../../../../helper/fieldConverter';
import {NewPlayerView} from '../../../../views/NewPlayerView';
import {
  ClassIndexRequest,
  EquipmentItemRequest,
} from '../../../../types/requests';
import {StyledButton} from '../../../ui/StyledButton';
import {EquipmentModel} from '../../../../models/types';

type Props = HomeScreenProps<'NewPlayer_Equip'>;

export const Equipment = ({route, navigation}: Props) => {
  const {data, error, isLoading, isFetching} = useGetClassByIndexQuery({
    index: route.params.playerData.class,
  });

  const {
    data: spellData,
    isLoading: isLoadingSpell,
    isFetching: isFetchingSpell,
  } = useGetResourcesByClassByLevelQuery({
    index: route.params.playerData.class as ClassIndexRequest,
    class_level: route.params.playerData.level,
  });

  const optionalEquip = useRef<EquipmentModel[][]>([]);

  useEffect(() => {
    if (data) {
      optionalEquip.current = data.starting_equipment_options.map(() => []);
    }
  }, [data]);

  const userData = route.params.playerData;

  const onSelectedEquipment = (equip: EquipmentModel, index: number) => {
    if (optionalEquip.current[index].some(e => e.index === equip.index)) {
      optionalEquip.current[index] = optionalEquip.current[index].filter(
        e => e.index !== equip.index,
      );
    } else {
      optionalEquip.current[index].push(equip);
    }
  };

  // TODO: loading/error

  return (
    <NewPlayerView
      title="Equipment"
      loading={isLoading || isFetching || isLoadingSpell || isFetchingSpell}
      error={undefined}
      errorOnPress={() => {}}>
      <View>
        <StyledSubtitle>Starting Equipment</StyledSubtitle>
        {data?.starting_equipment?.map((choice, index) => (
          <StyledText key={index}>
            {choice.equipment.name} quantità:{choice.quantity}
          </StyledText>
        ))}
        <StyledSubtitle>Additional Equipment</StyledSubtitle>
        {data?.starting_equipment_options.map((value, index) => {
          const entries =
            EquipmentConverter.startingEquipmentOptionSetToCountedReferences(
              value.from,
            );

          return (
            <Options
              key={index}
              desc={value.desc}
              options={entries}
              onSelection={idx => {
                onSelectedEquipment(idx, index);
              }}
            />
          );
        })}

        {spellData?.spellcasting && (
          <StyledSubtitle>Spellcasting</StyledSubtitle>
        )}
        {spellData &&
          spellData.spellcasting &&
          Object.entries(spellData.spellcasting).map(([key, value]) => (
            <StyledText key={key}>
              {snakeCaseToTitleCase(key)}: {value}
            </StyledText>
          ))}
        <StyledButton
          text="Save"
          onPress={() => {
            // TODO: divide equipment between armor and weapons
            userData.equipments = optionalEquip.current.flat();
            navigation.navigate('NewPLayer_End', {
              gameId: route.params.gameId,
              playerData: userData,
            });
          }}
        />
      </View>
    </NewPlayerView>
  );
};
