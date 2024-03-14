import {Text, View} from 'react-native';
import {useGetClassByIndexQuery} from '../services/api';
import {ClassIndexRequest} from '../types/requests';
import {ProficiencyComponent} from '../Components/ProficiencyComponent';
import {LabeledValue} from '../Components/LabeledValue';

export default function ClassComponent(input: ClassIndexRequest) {
  const {data, error, isLoading, isFetching} = useGetClassByIndexQuery({
    index: input,
  });

  if (error) return <Text>error in fetching</Text>;
  if (isLoading) return <Text>loading...</Text>;
  //se il result precedente non va bene
  if (isFetching) <Text>attendi risposta dal server</Text>;
  return (
    <>
      <LabeledValue
        label="Nome"
        value={data?.name ?? 'classe non disponibile'}
      />
      <LabeledValue label={'Dado Vita:'} value={data?.hit_die ?? 'mancante'} />
      <Text>Scegli le tue Abilità:</Text>
      {data?.proficiency_choices?.map((choice, index) => (
        <View>
          <Text>Scegli al massimo {choice.choose} abilità</Text>
          <Text>{choice.desc}</Text>
          {choice.from.options.map((option, optionIndex) => (
            <ProficiencyComponent option={option} />
          ))}
        </View>
      ))}
      <Text>Abilità di base:</Text>
      {data?.proficiencies?.map((choice, index) => (
        <Text key={index}>{choice.name}</Text>
      ))}
      <Text>Tiri salvezza:</Text>
      {data?.saving_throws?.map((choice, index) => (
        <Text key={index}>{choice.name}</Text>
      ))}
      {/*Da Spostare nella pagina successiva */}
      <Text>Equipaggiamento iniziale:</Text>
      {data?.starting_equipment?.map((choice, index) => (
        <Text key={index}>
          {choice.equipment.name} quantità:{choice.quantity}
        </Text>
      ))}
      {/*<Text>Scegli ulteriore equipaggiamento:</Text>
      {data?.starting_equipment_options?.map((choice, index) => (
        <EquipmentOptionComponent choice={choice} />
      ))} */}
    </>
  );
}
