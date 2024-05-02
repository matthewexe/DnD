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

  return (
    <NewPlayerView
      title="Class"
      loading={isLoading || isFetching}
      error={error ? 'Networking error' : undefined}
      errorOnPress={() => {}}>
      <View>
        <StyledLabeledValue
          label="Name"
          value={data?.name ?? 'classe non disponibile'}
        />
        <StyledLabeledValue
          label={'Hit die'}
          value={data?.hit_die.toString() ?? 'mancante'}
        />
        <StyledSubtitle>Proficiencies</StyledSubtitle>
        {data?.proficiencies?.map((choice, index) => (
          <StyledText key={index}>{choice.name}</StyledText>
        ))}

        {proficiencyChoices.map((choice, index) => {
          return (
            <>
              <StyledText key={index}>
                Choose {data?.proficiency_choices[index].choose ?? 1} abilities
                from the following options:
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

        <StyledSubtitle>Saving throws</StyledSubtitle>
        {data?.saving_throws?.map((choice, index) => (
          <StyledText key={index}>{choice.name}</StyledText>
        ))}

        <FeaturesByClassComponent input={input} />
        <ProficiencyByClassComponent input={input} />
        <StyledSubtitle>Subclasses</StyledSubtitle>
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
          icon="arrow-right"
          onPress={() => {
            proficiencies.current
              .filter(item => item !== undefined)
              .flat()
              .forEach(item => {
                userData.current.proficiencies.push(item);
              });
            navigation.navigate('NewPlayer_AbilityScores', {
              gameId: route.params.gameId,
              playerData: userData.current,
            });
          }}
        />
      </View>
    </NewPlayerView>
  );
}
