import React, {useRef} from 'react';
import {Text, View} from 'react-native';
import FeaturesByClassComponent from './FeaturesByClass';
import ProficiencyByClassComponent from './ProficiencyByClass';
import SubclassComponent from './SubclassByClass';
import {useGetClassByIndexQuery} from '../../../../services/api';
import {ClassIndexRequest, Subclasstypes} from '../../../../types/requests';
import {StyledSubtitle} from '../../../ui/texts/StyledSubtitle';
import {StyledText} from '../../../ui/texts/StyledText';
import {HomeScreenProps} from '../../../../routes/HomeProps';
import {StyledLabeledValue} from '../../../ui/texts/StyledLabeledValue';
import {StyledButton} from '../../../ui/StyledButton';
import {NewPlayerView} from '../../../../views/NewPlayerView';

type Props = HomeScreenProps<'NewPlayer_Class'>;

export default function ClassComponent({route, navigation}: Props) {
  const input = route.params.playerData.class as ClassIndexRequest;
  const userData = useRef(route.params.playerData);

  console.log(input);

  const {data, error, isLoading, isFetching} = useGetClassByIndexQuery({
    index: input,
  });

  if (error) return <Text>error in fetching</Text>;
  if (isLoading) return <Text>loading...</Text>;
  if (isFetching) <Text>attendi risposta dal server</Text>;
  return (
    <NewPlayerView title="Class">
      <View>
        <StyledLabeledValue
          label="Nome"
          value={data?.name ?? 'classe non disponibile'}
        />
        <StyledLabeledValue
          label={'Dado Vita'}
          value={data?.hit_die.toString() ?? 'mancante'}
        />
        <StyledSubtitle>Abilità di base:</StyledSubtitle>
        {data?.proficiencies?.map((choice, index) => (
          <StyledText key={index}>{choice.name}</StyledText>
        ))}

        <StyledSubtitle>Abilità</StyledSubtitle>
        <StyledText>Scegli le tue Abilità:</StyledText>
        {/* TODO: tabella per scegliere le abilità
        {data?.proficiency_choices?.map((choice, index) => (
          <View>
            <Text>Scegli al massimo {choice.choose} abilità</Text>
            <Text>{choice.desc}</Text>
            {choice.from.options.map((option, optionIndex) => (
              <ProficiencyComponent option={option} />
            ))}
          </View>
        ))} */}

        <StyledSubtitle>Tiri salvezza:</StyledSubtitle>
        {data?.saving_throws?.map((choice, index) => (
          <StyledText key={index}>{choice.name}</StyledText>
        ))}

        <FeaturesByClassComponent input={input} />
        <ProficiencyByClassComponent input={input} />
        <StyledSubtitle>Sottoclassi:</StyledSubtitle>
        <SubclassComponent
          input={input}
          onSelectedValue={item =>
            (userData.current.subclass = item as Subclasstypes)
          }
        />

        {/*Da Spostare nella pagina successiva */}
        {/* <StyledSubtitle>Equipaggiamento iniziale:</StyledSubtitle>
      {data?.starting_equipment?.map((choice, index) => (
        <StyledText key={index}>
          {choice.equipment.name} quantità:{choice.quantity}
        </StyledText>
      ))} */}
        {/*<Text>Scegli ulteriore equipaggiamento:</Text>
      {data?.starting_equipment_options?.map((choice, index) => (
        <EquipmentOptionComponent choice={choice} />
      ))} */}
      </View>
      <View style={[{alignItems: 'center', padding: 30}]}>
        <StyledButton
          text="Next"
          onPress={() =>
            navigation.navigate('NewPlayer_Equip', {
              gameId: route.params.gameId,
              playerData: userData.current,
            })
          }
        />
      </View>
    </NewPlayerView>
  );
}
