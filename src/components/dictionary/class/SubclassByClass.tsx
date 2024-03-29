import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {useGetSubClassesAvilableByIndexQuery} from '../../../services/api';
import {ClassIndexRequest, Subclasstypes} from '../../../types/requests';
import {StyledSubtitle} from '../../ui/texts/StyledSubtitle';
import {StyledText} from '../../ui/texts/StyledText';
import {SelectMenu} from '../../ui/SelectMenu';
import {APIReference} from '../../../types/responses';
import SubclassForLevel from './SubclassForLevel';

type Props = {
  input: ClassIndexRequest;
};
export default function SubclassComponent({input}: Props) {
  const {data, error, isLoading, isFetching} =
    useGetSubClassesAvilableByIndexQuery({
      index: input,
    });

  if (error) return <Text>error in fetching</Text>;
  if (isLoading) return <Text>loading...</Text>;
  if (isFetching) <Text>attendi risposta dal server</Text>;
  return (
    <View>
      <StyledSubtitle>Sottoclasse</StyledSubtitle>
      <StyledText>Possibili scelte: {data?.count}</StyledText>
      {data && data.results && (
        <SelectMenu
          label="Scegli la tua sottoclasse"
          data={data.results}
          onSelect={(item: APIReference) => {
            setSelectedClass(item.index);
            onSelectedValue(item.index ?? '');
          }}
        />
      )}
      {selectedClass && (
        <SubclassForLevel input={selectedClass as Subclasstypes} />
      )}
    </View>
  );
}
