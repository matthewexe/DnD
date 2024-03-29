import React, {useRef} from 'react';
import {Text, View} from 'react-native';
import FeaturesByClassComponent from './FeaturesByClass';
import ProficiencyByClassComponent from './ProficiencyD';
import SubclassComponent from './SubclassByClass';
import {useGetClassByIndexQuery} from '../../../services/api';
import {ClassIndexRequest, Subclasstypes} from '../../../types/requests';
import {StyledSubtitle} from '../../ui/texts/StyledSubtitle';
import {StyledText} from '../../ui/texts/StyledText';
import {HomeScreenProps} from '../../../routes/HomeProps';
import {StyledLabeledValue} from '../../ui/texts/StyledLabeledValue';
import {StyledButton} from '../../ui/StyledButton';
import {NewPlayerView} from '../../../views/NewPlayerView';
import ProficiencyD from './ProficiencyD';

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
    <>
      <View>
        <StyledLabeledValue
          label="Name"
          value={data?.name ?? 'classe non disponibile'}
        />
        <StyledLabeledValue
          label={'Hit Die'}
          value={data?.hit_die.toString() ?? 'mancante'}
        />
        <StyledSubtitle>Base Abilities</StyledSubtitle>
        {data?.proficiencies?.map((choice, index) => (
          <StyledText key={index}>{choice.name}</StyledText>
        ))}

        <StyledSubtitle>Abilities</StyledSubtitle>
        <StyledText>Choose your abilities</StyledText>

        {data?.proficiency_choices?.map(choice => (
          <View>
            <StyledText>You can choose {choice.choose} abilities:</StyledText>
            <StyledText>{choice.desc}</StyledText>
            {choice &&
              choice.from &&
              choice.from.options &&
              choice.from.options.map(option => (
                <ProficiencyD input={option} />
              ))}
          </View>
        ))}

        <StyledSubtitle>Saving throws</StyledSubtitle>
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
    </>
  );
}
