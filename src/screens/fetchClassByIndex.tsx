import {Text} from 'react-native';
import {useGetClassByIndexQuery} from '../services/api';
import {ClassIndexRequest} from '../types/requests';
import {Class, EquipmentOptionSet} from '../types/responses';

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
      (<Text>Nome:</Text>
      <Text>{data?.name ?? 'classe non disponibile'}</Text>
      <Text>Dado Vita:</Text>
      <Text>{data?.hit_die}</Text>
      <Text>Scegli le tue Abilità:</Text>
      {data?.proficiency_choices?.map((choice, index) => (
        <Text key={index}>
          <Text>Scegli al massimo {choice.choose} abilità</Text>
          <Text>{choice.desc}</Text>
          {choice.from.options.map((option, optionIndex) => (
            <Text key={optionIndex}>{option.item.name}</Text>
          ))}
        </Text>
      ))}
      <Text>Abilità di base:</Text>
      {data?.proficiencies?.map((choice, index) => (
        <Text key={index}>{choice.name}</Text>
      ))}
      <Text>Tiri salvezza:</Text>
      {data?.saving_throws?.map((choice, index) => (
        <Text key={index}>{choice.name}</Text>
      ))}
      <Text>Equipaggiamento iniziale:</Text>
      {data?.starting_equipment?.map((choice, index) => (
        <Text key={index}>
          {choice.equipment.name}quantità:{choice.quantity}
        </Text>
      ))}
      <Text>Scegli ulteriore equipaggiamento:</Text>
      {data?.starting_equipment_options?.map((choice, index) => (
        <>
          <Text key={index}>
            {choice.desc} quantità:{choice.choose}
          </Text>
          {(choice.from as EquipmentOptionSet).options.map((option, index) => (

          ))}
        </>
      ))}
      {/* ulteriore test per prendere quel pezzo di opzioni ma non va... 
      {data?.starting_equipment_options?.map((option, index) => (
        <Text key={index}>
          <Text>{option.desc}</Text>
          {option.type === 'equipment' &&
            option.choose === 1 &&
            option.from.options.map((equipOption, equipIndex) => {
              if (equipOption.option_type === 'counted_reference') {
                return (
                  <Text key={equipIndex}>
                    {equipOption.count} x {equipOption.of.name}
                  </Text>
                );
              } else if (equipOption.option_type === 'choice') {
                // Qui gestiamo il caso 'choice' diversamente
                return (
                  <Text key={equipIndex}>
                    Choose {equipOption.choice.choose}:{' '}
                    {equipOption.choice.desc}
                  </Text>
                );
              }
              return null; // Per sicurezza, anche se ogni opzione dovrebbe essere o 'counted_reference' o 'choice'
            })}
        </Text>
      ))}
      */}
      )
    </>
  );
}
