import React from 'react';
import {Text, View} from 'react-native';
import {useGetClassByIndexQuery} from '../../services/api';
import {ClassIndexRequest} from '../../types/requests';
import {ProficiencyComponent} from '../ProficiencyComponent';
import {LabeledValue} from '../LabeledValue';
import FeaturesByClassComponent from './FeaturesByClass';
import ProficiencyByClassComponent from './ProficiencyByClass';
import SubclassComponent from './SubclassByClass';
import {ScrollView} from 'react-native-gesture-handler';

type Props = {
  input: ClassIndexRequest;
};
export default function ClassComponent({input}: Props) {
  const {data, error, isLoading, isFetching} = useGetClassByIndexQuery({
    index: input,
  });

  if (error) return <Text>error in fetching</Text>;
  if (isLoading) return <Text>loading...</Text>;
  if (isFetching) return <Text>wait for response from the server</Text>;
  return (
    <>
      <LabeledValue label="Name" value={data?.name ?? 'class not available'} />
      <LabeledValue label={'Hit Dice:'} value={data?.hit_die ?? 'missing'} />
      {/*Scegli le abilità---->CONTROLLARE SE FA anche il secondo round di choices,vedi api */}
      {data?.proficiency_choices?.map((choice, index) => (
        <View>
          <Text>{choice.desc}</Text>
          <Text>Choose as much as possible {choice.choose} ability</Text>
          {choice.from.options.map((option, optionIndex) => (
            <ProficiencyComponent option={option} />
          ))}
        </View>
      ))}
      <Text>Basic Skills:</Text>
      {data?.proficiencies?.map((choice, index) => (
        <Text key={index}>{choice.name}</Text>
      ))}
      <Text>You have proficiencies with this saving throws:</Text>
      {data?.saving_throws?.map((choice, index) => (
        <Text key={index}>{choice.name}</Text>
      ))}

      <FeaturesByClassComponent input={input} />
      <ProficiencyByClassComponent input={input} />
      <Text>Subclasses:</Text>
      <SubclassComponent input={input} />

      {/*Da Spostare nella pagina successiva */}
      <Text>Starting equipment:</Text>
      {data?.starting_equipment?.map((choice, index) => (
        <Text key={index}>
          {choice.equipment.name} amount:{choice.quantity}
        </Text>
      ))}
      {/*<Text>Scegli ulteriore equipaggiamento:</Text>
      {data?.starting_equipment_options?.map((choice, index) => (
        <EquipmentOptionComponent choice={choice} />
      ))} */}
    </>
  );
}
