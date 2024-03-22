import React, {useState} from 'react';
import {InputText} from '../ui/InputText';
import {StyleSheet, Text, View} from 'react-native';
import {NewPlayerNavigationProps} from '../../routes/NewPlayerParamList';
import {SelectMenu} from '../ui/SelectMenu';
import {useGetEndpointResourceQuery} from '../../services/api';
import {ClassIndexRequest} from '../../types/requests';
import {StyledButton} from '../ui/StyledButton';
import {StyledSubtitle} from '../ui/texts/StyledSubtitle';
import StyledTitle from '../ui/texts/StyledTitle';
import {Loading} from './Loading';

type Props = NewPlayerNavigationProps<'ClassChoice'>;

export const ClassChoice = ({route, navigation}: Props) => {
  const {data: classData, isLoading: isLoadingClass} =
    useGetEndpointResourceQuery('classes');

  const [languague, setLanguage] = useState('l');
  const [exp, setExperience] = useState(0);
  const [selectedClass, setClass] = useState<ClassIndexRequest>('barbarian');

  if (isLoadingClass) {
    return <Loading />;
  }
  return (
    <>
      <StyledTitle>{'Class Choice'}</StyledTitle>
      <Text />
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
      <View style={styles.rowStyle}>
        <StyledButton
          text="<   Back"
          onPress={() => {
            navigation.goBack();
          }}
        />
        <StyledButton
          text="Next   >"
          onPress={() => {
            navigation.navigate('EquipmentChoice', {
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

const styles = StyleSheet.create({
  rowStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    padding: 13,
    margin: -3,
  },
});
