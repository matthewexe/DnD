import React, {useEffect, useRef} from 'react';
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
import {SelectableTable} from '../../../table/SelectableTable';
import {ProficiencyConverter} from '../../../../helper/fieldConverter';

type Props = HomeScreenProps<'NewPlayer_Class'>;

export default function ClassComponent({route, navigation}: Props) {
  const input = route.params.playerData.class as ClassIndexRequest;
  const userData = useRef(route.params.playerData);
  const [proficiencyChoices, setProficiencyChoices] = React.useState<
    ProficiencyConverter.NamedReference[][]
  >([]);

  const proficiencies = useRef<string[][]>([]);

  const {data, error, isLoading, isFetching} = useGetClassByIndexQuery({
    index: input,
  });

  useEffect(() => {
    if (data) {
      setProficiencyChoices(
        data.proficiency_choices.map(choice =>
          ProficiencyConverter.ProficiencyOptionsToIndex(choice.from.options),
        ),
      );
    }
  }, [data]);

  if (error) return <Text>error in fetching</Text>;
  if (isLoading) return <Text>loading...</Text>;
  if (isFetching) <Text>attendi risposta dal server</Text>;
  return (
    <NewPlayerView
      title="Class"
      loading={false}
      error={undefined}
      errorOnPress={() => {}}>
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

        {proficiencyChoices.map((choice, index) => {
          return (
            <>
              <StyledText key={index}>
                Scegli {data?.proficiency_choices[index].choose ?? 1} abilità
                trà le seguenti:
              </StyledText>
              <SelectableTable
                key={index}
                head={['descrizione']}
                data={choice.map(value => [value.name])}
                max_selectbale={data?.proficiency_choices[index].choose ?? 1}
                onValueChange={value => {
                  proficiencies.current[index] = value.map(
                    stringArr => proficiencyChoices[index][stringArr].index,
                  );
                  console.log(proficiencies.current);
                }}
              />
            </>
          );
        })}

        <StyledSubtitle>Tiri salvezza:</StyledSubtitle>
        {data?.saving_throws?.map((choice, index) => (
          <StyledText key={index}>{choice.name}</StyledText>
        ))}

        <FeaturesByClassComponent input={input} />
        <ProficiencyByClassComponent input={input} />
        <StyledSubtitle>Sottoclassi:</StyledSubtitle>
        <SubclassComponent
          input={input}
          onSelectedValue={item => {
            userData.current.subclass = item as Subclasstypes;
          }}
          level={userData.current.level}
        />
      </View>
      <View style={[{alignItems: 'center', padding: 30}]}>
        <StyledButton
          text="Next"
          onPress={() => {
            proficiencies.current
              .filter(item => item !== undefined)
              .flat()
              .forEach(item => {
                userData.current.proficiencies.push(item);
              });
            navigation.navigate('NewPlayer_Equip', {
              gameId: route.params.gameId,
              playerData: userData.current,
            });
          }}
        />
      </View>
    </NewPlayerView>
  );
}
