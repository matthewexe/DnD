import React, {useState} from 'react';
import {InputText} from '../InputText';
import {Text, View} from 'react-native';
import {NewPlayerNavigationProps} from '../../routes/NewPlayerParamList';
import {SelectMenu} from '../SelectMenu';
import {useGetEndpointResourceQuery} from '../../services/api';
import {ClassIndexRequest} from '../../types/requests';
import {StyledButton} from '../ui/buttons/StyledButton';
import {StyledSubtitle} from '../ui/texts/StyledSubtitle';

type Props = NewPlayerNavigationProps<'ClassChoice'>;

export const ClassChoice = ({route, navigation}: Props) => {
  const {data: classData, isLoading: isLoadingClass} =
    useGetEndpointResourceQuery('classes');

  const [languague, setLanguage] = useState('l');
  const [exp, setExperience] = useState(0);
  const [selectedClass, setClass] = useState<ClassIndexRequest>('barbarian');

  if (isLoadingClass) {
    return <Text>Loading...</Text>;
  }
  return (
    <>
      <StyledSubtitle>{'Class Choice'}</StyledSubtitle>
      <SelectMenu
        label="Character Class"
        onSelect={item => {
          setClass(item.index);
        }}
        data={classData?.results ?? []}
      />
      <Text />
      {/* spazio per le sottoclassi */}
      <Text />
      <View style={{flexDirection: 'row', alignSelf: 'center'}}>
        <InputText
          label="Character Level"
          placeholder="Enter Character Level"
          onChangeText={input => {
            setClass(input);
          }}
        />
        <Text
          style={{
            width: 20,
          }}
        />
        <InputText label="Character XP" placeholder="Enter Character XP" />
        <Text
          style={{
            width: 7,
          }}
        />
      </View>
      <Text />
      <View style={{alignSelf: 'center'}}>
        <StyledButton
          text="Next"
          onPress={() => {
            navigation.navigate('ClassInfo', {
              class: selectedClass,
              race: 'dragonborn',
              level: 3,
              userData: {class: undefined, race: undefined},
            });
          }}
        />
      </View>
    </>
  );
};
