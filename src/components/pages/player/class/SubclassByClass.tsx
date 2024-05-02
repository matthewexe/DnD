import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {useGetSubClassesAvilableByIndexQuery} from '../../../../services/api';
import {ClassIndexRequest, Subclasstypes} from '../../../../types/requests';
import {StyledSubtitle} from '../../../ui/texts/StyledSubtitle';
import {StyledText} from '../../../ui/texts/StyledText';
import {SelectMenu} from '../../../ui/SelectMenu';
import {APIReference} from '../../../../types/responses';
import SubclassForLevel from './SubclassForLevel';

type Props = {
  input: ClassIndexRequest;
  level: number;
  onSelectedValue: (value: string) => void;
};
export default function SubclassComponent({
  input,
  level,
  onSelectedValue,
}: Props) {
  const {data, error, isLoading, isFetching} =
    useGetSubClassesAvilableByIndexQuery({
      index: input,
    });

  const [selectedClass, setSelectedClass] = useState<string | undefined>(
    undefined,
  );

  if (error) return <Text>error in fetching</Text>;
  if (isLoading || isFetching) return <Text>loading...</Text>;

  return (
    <View>
      <StyledText>You can choose {data?.count} subclasses</StyledText>
      {data && data.results && (
        <SelectMenu
          label="Choose your subclass"
          data={data.results}
          onSelect={(item: APIReference) => {
            setSelectedClass(item.index);
            onSelectedValue(item.index ?? '');
          }}
        />
      )}
      {selectedClass && (
        <SubclassForLevel
          input={selectedClass as Subclasstypes}
          level={level}
        />
      )}
    </View>
  );
}
