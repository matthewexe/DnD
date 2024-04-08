import React, {useState} from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import {SelectMenu} from '../../ui/SelectMenu';
import {useGetEquipmentResourceQuery} from '../../../services/api';
import {EquipmentItemRequest, ItemType} from '../../../types/requests';
import StyledTitle from '../../ui/texts/StyledTitle';
import {SafeAreaView} from 'react-native-safe-area-context';
import {determineItemType} from '../../../helper/determineItemType';
import MagicItemsArmor from '../../dictionary/equipment/MagicItems';
import Weapon from '../../../components/dictionary/equipment/Weapon';

export const DictionaryWeapon = () => {
  const {data: classData, isLoading: isLoadingClass} =
    useGetEquipmentResourceQuery('equipment-categories/weapon');

  const [weaponState, setWeapon] = useState<EquipmentItemRequest>('club');
  const [typeState, setType] = useState<ItemType>('equipment');

  if (isLoadingClass) {
    return <Text>Loading...</Text>;
  }

  return (
    <>
      <SafeAreaView style={styles.safeview}>
        <ScrollView>
          <StyledTitle>Weapons</StyledTitle>
          <View style={styles.container}>
            <View
              style={{
                width: 200,
                height: 200,
              }}>
              <Image
                source={require('@assets/weapons.png')} // Sostituisci con il percorso corretto
                style={{width: '100%', height: '100%', borderRadius: 1000}} // Stili per l'immagine per farla adattare alla View
              />
            </View>
            <SelectMenu
              label=""
              onSelect={item => {
                setWeapon(item.index);
                setType(determineItemType(item.url));
              }}
              data={classData?.equipment ?? []}
            />
          </View>
          <View style={styles.container}>
            {typeState === 'equipment' ? (
              <Weapon input={weaponState} />
            ) : (
              <MagicItemsArmor input={weaponState} />
            )}
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  rowStyle: {
    flexDirection: 'row',
  },
  container: {
    alignSelf: 'center',
    alignItems: 'center',
    padding: 30,
    flexDirection: 'column', // o 'column' per bottoni verticali
    justifyContent: 'space-between', // Distribuisce uniformemente lo spazio
  },
  button: {
    margin: 10, // Distanzia i bottoni l'uno dall'altro
  },
  safeview: {
    bottom: 10,
  },
});
