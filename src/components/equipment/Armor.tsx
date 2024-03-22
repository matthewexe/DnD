import {Text} from 'react-native';
import {useGetArmorQuery, useGetWeaponQuery} from '../../services/api';
import React from 'react';
import {LabeledValue} from '../ui/LabeledValue';
import {EquipmentItemRequest} from '../../types/requests';

export default function Armors({input}: {input: EquipmentItemRequest}) {
  const {data, error, isLoading, isFetching} = useGetArmorQuery({
    index: input,
  });

  if (error) return <Text>error in fetching</Text>;
  if (isLoading) return <Text>loading...</Text>;
  //se il result precedente non va bene
  if (isFetching) <Text>attendi risposta dal server</Text>;

  //GREEDY
  // Verifica diretta se dex_bonus è true, tenendo conto che potrebbe essere anche undefined
  const dexBonusIsTrue = !!data?.armor_class.dex_bonus;

  const stealthDisadvantageIsTrue = !!data?.stealth_disadvantage;
  let bonus = '';
  let stealth = '';
  // Usa dexBonusIsTrue in un'istruzione if o direttamente in JSX.
  if (dexBonusIsTrue) {
    bonus = "Puoi aggiungere il tuo bonus destrezza sull'armatura";
  } else {
    bonus = "Non puoi aggiungere la destrezza all'armatura";
  }
  if (stealthDisadvantageIsTrue) {
    stealth = 'Hai svantaggio nelle prove furtive';
  } else {
    stealth = 'Non hai alcuno svantaggio nelle prove di furtività';
  }
  return (
    <>
      <LabeledValue
        label="Armatura"
        value={data?.armor_category ?? 'non specificata'}
      />
      <LabeledValue
        label="Valore armatura base:"
        value={data?.armor_class.base ?? 'non specificata'}
      />
      <Text>{bonus}</Text>
      <LabeledValue
        label={"Forza minima per indossare l'armatura: "}
        value={data?.str_minimum ?? 'Non definita'}
      />
      <Text>{stealth}</Text>
      <Text>
        Costo: {data?.cost.quantity} {data?.cost.unit}
      </Text>
      <LabeledValue label={'Peso'} value={data?.weight ?? 'Non specificato'} />
    </>
  );
}
