import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useGetMonsterByIndexQuery} from '../../services/api';
import {MagicSchoolRequest} from '../../types/requests';
import {StyledLabel} from '../ui/texts/LabeldValueStyle';
import {DescriptionText} from '../ui/texts/DescriptionText';
import {PrimaryText} from '../ui/texts/PrimaryText';
import {MonsterArmorClass} from './MonsterArmorClass';
import { MonsterProficienciesClass } from './MonsterProficienciesClass';

type Props = {
  input: MagicSchoolRequest;
};
export default function MonsterComponent({input}: Props) {
  const {data, error, isLoading, isFetching} = useGetMonsterByIndexQuery({
    index: input,
  });

  if (error) return <Text>error in fetching</Text>;
  if (isLoading) return <Text>loading...</Text>;
  if (isFetching) return <Text>wait for response from the server</Text>;
  return (
    <>
      <View>
        <StyledLabel
          label={'Selected Monster:'}
          value={data?.name ?? 'not found'}></StyledLabel>
        {data && data.challenge_rating && (
          <PrimaryText>
            Challenge Rate
            <DescriptionText>
              {data?.challenge_rating ?? 'not found'}
            </DescriptionText>
          </PrimaryText>
        )}
        {data && data.size && (
          <PrimaryText>
            Size:
            <DescriptionText>{data?.size ?? 'not specified'}</DescriptionText>
          </PrimaryText>
        )}
        {data && data.type && (
          <PrimaryText>
            Type:
            <DescriptionText>{data?.type ?? 'not found'}</DescriptionText>
          </PrimaryText>
        )}
        {data && data.alignment && (
          <PrimaryText>
            Alignment:
            <DescriptionText>{data?.alignment ?? 'not found'}</DescriptionText>
          </PrimaryText>
        )}
        {data && data.armor_class && (
          <PrimaryText>
            Armor Class:
            {data.armor_class.map(choice => (
              <MonsterArmorClass armor_class={choice} />
            ))}
          </PrimaryText>
        )}
        <PrimaryText>
          Hit Dice:
          <DescriptionText>
            {data?.hit_points ?? 'not found'} or with dices:{' '}
            {data?.hit_points_roll ?? 'not found'}
          </DescriptionText>
        </PrimaryText>
        {/* INIZIO SPEED */}
        <PrimaryText>
          Speed:
          {data && data.speed && data.speed.walk && 
            <DescriptionText>Walk speed:{data.speed.walk} (convertipiediinmetri())</DescriptionText>ciao
          }
          {data && data.speed && data.speed.swim && 
            <DescriptionText>Swim speed:{data.speed.swim} (convertipiediinmetri())</DescriptionText>ciao
          }
          {data && data.speed && data.speed.fly && 
            <DescriptionText>Fly speed:{data.speed.fly} (convertipiediinmetri())</DescriptionText>ciao
            }
            {data && data.speed && data.speed.climb && 
            <DescriptionText>Climb speed:{data.speed.climb} (convertipiediinmetri())</DescriptionText>ciao
            }
            {data && data.speed && data.speed.burrow && 
            <DescriptionText>Burrow speed:{data.speed.burrow} (convertipiediinmetri())</DescriptionText>ciao
            }
            {data && data.speed && data.speed.hover && 
            <DescriptionText>Benefit of Hover:

            When flying, the creature can halt its forward motion and hover in place as a move action. It can then fly in any direction, including straight down or straight up, at half speed, regardless of its maneuverability.
            
            If a creature begins its turn hovering, it can hover in place for the turn and take a full-round action. A hovering creature cannot make wing attacks, but it can attack with all other limbs and appendages it could use in a full attack. The creature can instead use a breath weapon or cast a spell instead of making physical attacks, if it could normally do so.
            
            If a creature of Large size or larger hovers within 20 feet of the ground in an area with lots of loose debris, the draft from its wings creates a hemispherical cloud with a radius of 60 feet. The winds so generated can snuff torches, small campfires, exposed lanterns, and other small, open flames of non-magical origin. Clear vision within the cloud is limited to 10 feet. Creatures have concealment at 15 to 20 feet (20% miss chance). At 25 feet or more, creatures have total concealment (50% miss chance, and opponents cannot use sight to locate the creature).
            
            Those caught in the cloud must succeed on a Concentration check (DC 10 + 1/2 creature’s HD) to cast a spell. </DescriptionText>
            }
        </PrimaryText>
        <StyledLabel label={'Ability scores'} value={''}></StyledLabel>
        <PrimaryText>Strength<DescriptionText>{data?.strength?? "not found"}</DescriptionText></PrimaryText>
            MODIFICATORE, CHIAMARE LA UTIL---------------------------------------------------------
        <PrimaryText>Dexterity<DescriptionText>{data?.dexterity?? "not found"}</DescriptionText></PrimaryText>
             MODIFICATORE, CHIAMARE LA UTIL---------------------------------------------------------
        <PrimaryText>Constitution<DescriptionText>{data?.constitution?? "not found"}</DescriptionText></PrimaryText>
            MODIFICATORE, CHIAMARE LA UTIL---------------------------------------------------------
        <PrimaryText>Intelligence<DescriptionText>{data?.intelligence?? "not found"}</DescriptionText></PrimaryText>
            MODIFICATORE, CHIAMARE LA UTIL--------------------------------------------------------- 
        <PrimaryText>Wisdom<DescriptionText>{data?.wisdom?? "not found"}</DescriptionText></PrimaryText>
            MODIFICATORE, CHIAMARE LA UTIL--------------------------------------------------------- 
        <PrimaryText>Charisma<DescriptionText>{data?.charisma?? "not found"}</DescriptionText></PrimaryText>
            MODIFICATORE, CHIAMARE LA UTIL--------------------------------------------------------- 
            {/* FINE SPEED */}
        <StyledLabel label={'Proficiencies'} value={''}></StyledLabel>
        {data && data.proficiencies.length >0 && data.proficiencies.map((choice)=>(
            <>
            <DescriptionText>+ {choice.value}</DescriptionText>
            <MonsterProficienciesClass proficiencies_class={choice.proficiency}/>
            </>
        ))}
        
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
  },
});
