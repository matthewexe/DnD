import React from 'react';
import {Text, View} from 'react-native';
import {useGetMulticlassingQuery} from '../../services/api';
import {ClassIndexRequest} from '../../types/requests';
import {LabeledValue} from '../LabeledValue';
import {ProficiencyReferenceOption} from '../../types/responses';

type Props = {
  input: ClassIndexRequest;
};
export default function ClassComponent({input}: Props) {
  const {data, error, isLoading, isFetching} = useGetMulticlassingQuery({
    index: input,
  });

  if (error) return <Text>error in fetching</Text>;
  if (isLoading) return <Text>loading...</Text>;
  if (isFetching) return <Text>wait for response from the server</Text>;
  return (
    <>
      <Text>To be able to multiclass you must have:</Text>
      {data &&
        data.prerequisites &&
        data.prerequisites.map((choice, index) => (
          <Text>
            minimum score {choice.ability_score.name}
            {choice.minimum_score}
          </Text>
        ))}
      <Text>Proficiencies</Text>
      {data &&
        data.proficiencies &&
        data.proficiencies.map(choice => <Text>{choice.name}</Text>)}
      {data && data.proficiency_choices && (
        <View>
          {data.proficiency_choices.map(choice => (
            <>
              <Text>
                you can choose {choice.choose} {choice.desc}
              </Text>
              {choice.from.options.map(sel => (
                <Text>{(sel as ProficiencyReferenceOption).item.name}</Text>
              ))}

              {/* VERIFICA SE IL BRDO HA LE CHOICE ANCHE SUGLI STRUMENTI */}
            </>
          ))}
        </View>
      )}
    </>
  );
}
