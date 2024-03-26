import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useGetMonsterByIndexQuery} from '../../services/api';
import {MonsterRequest} from '../../types/requests';
import {StyledLabel} from '../ui/texts/LabeldValueStyle';
import {DescriptionText} from '../ui/texts/DescriptionText';
import {PrimaryText} from '../ui/texts/PrimaryText';
import {MonsterArmorClass} from './MonsterArmorClass';
import {MonsterProficienciesClass} from './MonsterProficienciesClass';
import {convertFootToMeters} from '../../utils/convertFootToMeters';
import {MonsterConditionImmunities} from './MonsterCondition';
import {MonsterSenses} from './MonsterSenses';
import {MonsterSpecialAbilities} from './MonsterSpecialAbilities';
import {MonsterActions} from './MonsterActions';
import {MonsterLegendaryAction} from './MonsterLegendaryActions';
import {extractDigits} from '../../utils/extractDigits';
import {calculateModifier} from '../../utils/calculateModifier';

type Props = {
  input: MonsterRequest;
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
        <View style={styles.spece}></View>
        {data && data.challenge_rating && (
          <PrimaryText>Challenge Rating:</PrimaryText>
        )}
        <DescriptionText>
          {data?.challenge_rating ?? 'not found'}
        </DescriptionText>
        <View style={styles.spece}></View>
        {data && data.xp && (
          <PrimaryText>
            XP:{'\t\t\t'}
            <DescriptionText>{data.xp}</DescriptionText>
          </PrimaryText>
        )}
        {data && data.size && (
          <PrimaryText>
            Size:{'\t\t\t'}
            <DescriptionText>{data?.size ?? 'not specified'}</DescriptionText>
          </PrimaryText>
        )}
        {data && data.type && (
          <PrimaryText>
            Type:{'\t\t\t'}
            <DescriptionText>{data?.type ?? 'not found'}</DescriptionText>
          </PrimaryText>
        )}
        {data && data.alignment && (
          <PrimaryText>
            Alignment:{'\t\t\t'}
            <DescriptionText>{data?.alignment ?? 'not found'}</DescriptionText>
          </PrimaryText>
        )}

        {data &&
          data.armor_class &&
          data.armor_class.map(choice => (
            <MonsterArmorClass armor_class={choice} />
          ))}
        <PrimaryText>
          Hit Points:{'\t\t\t'}
          <DescriptionText>{data?.hit_points ?? 'not found'}</DescriptionText>
        </PrimaryText>
        <DescriptionText>
          Hit Points with dices:
          {data?.hit_points_roll ?? 'not found'}
        </DescriptionText>
        <View style={styles.spece}></View>
        {/* INIZIO SPEED */}
        <PrimaryText>Speed:</PrimaryText>
        {data && data.speed && data.speed.walk && (
          <DescriptionText>
            Walk speed:{'\t\t\t'}
            {data.speed.walk} or
            {convertFootToMeters(extractDigits(data.speed.walk ?? ' '))}
          </DescriptionText>
        )}
        {data && data.speed && data.speed.swim && (
          <DescriptionText>
            Swim speed:{'\t\t\t'}
            {data.speed.swim} or
            {convertFootToMeters(extractDigits(data.speed.swim ?? ' '))}
          </DescriptionText>
        )}
        {data && data.speed && data.speed.fly && (
          <DescriptionText>
            Fly speed:{'\t\t\t'}
            {data.speed.fly} or
            {convertFootToMeters(extractDigits(data.speed.fly ?? ' '))}
          </DescriptionText>
        )}
        {data && data.speed && data.speed.climb && (
          <DescriptionText>
            Climb speed:{'\t\t\t'}
            {data.speed.climb} or
            {convertFootToMeters(extractDigits(data.speed.climb ?? ' '))}
          </DescriptionText>
        )}
        {data && data.speed && data.speed.burrow && (
          <DescriptionText>
            Burrow speed:{'\t\t\t'}
            {data.speed.burrow} or
            {convertFootToMeters(extractDigits(data.speed.burrow ?? ' '))}
          </DescriptionText>
        )}
        {data && data.speed && data.speed.hover && (
          <DescriptionText>
            Benefit of Hover: When flying, the creature can halt its forward
            motion and hover in place as a move action. It can then fly in any
            direction, including straight down or straight up, at half speed,
            regardless of its maneuverability. If a creature begins its turn
            hovering, it can hover in place for the turn and take a full-round
            action. A hovering creature cannot make wing attacks, but it can
            attack with all other limbs and appendages it could use in a full
            attack. The creature can instead use a breath weapon or cast a spell
            instead of making physical attacks, if it could normally do so. If a
            creature of Large size or larger hovers within 20 feet of the ground
            in an area with lots of loose debris, the draft from its wings
            creates a hemispherical cloud with a radius of 60 feet. The winds so
            generated can snuff torches, small campfires, exposed lanterns, and
            other small, open flames of non-magical origin. Clear vision within
            the cloud is limited to 10 feet. Creatures have concealment at 15 to
            20 feet (20% miss chance). At 25 feet or more, creatures have total
            concealment (50% miss chance, and opponents cannot use sight to
            locate the creature). Those caught in the cloud must succeed on a
            Concentration check (DC 10 + 1/2 creature’s HD) to cast a spell.
          </DescriptionText>
        )}
        {/* FINE SPEED  */}
        <View style={styles.spece}></View>

        {data && data.proficiency_bonus && (
          <PrimaryText>
            Proficiency Bonus:{'\t\t\t'}
            {data.proficiency_bonus < 0 && (
              <DescriptionText>-{data?.proficiency_bonus}</DescriptionText>
            )}
            {data.proficiency_bonus >= 0 && (
              <DescriptionText>+{data?.proficiency_bonus}</DescriptionText>
            )}
          </PrimaryText>
        )}

        <View style={styles.spece}></View>

        <StyledLabel label={'Ability scores'} value={''}></StyledLabel>
        <PrimaryText>
          Strength:{'\t\t\t'}
          <DescriptionText>
            {data?.strength ?? 'not found'} {'\t\t\t'}Mod:{' '}
            {calculateModifier(data?.strength ?? -1)}
          </DescriptionText>
        </PrimaryText>

        <PrimaryText>
          Dexterity{'\t\t\t'}
          <DescriptionText>
            {data?.dexterity ?? 'not found'} {'\t\t\t'}Mod:{' '}
            {calculateModifier(data?.dexterity ?? -1)}
          </DescriptionText>
        </PrimaryText>

        <PrimaryText>
          Constitution{'\t\t\t'}
          <DescriptionText>
            {data?.constitution ?? 'not found'} {'\t\t\t'}Mod:{' '}
            {calculateModifier(data?.constitution ?? -1)}
          </DescriptionText>
        </PrimaryText>

        <PrimaryText>
          Intelligence{'\t\t\t'}
          <DescriptionText>
            {data?.intelligence ?? 'not found'} {'\t\t\t'}Mod:{' '}
            {calculateModifier(data?.intelligence ?? -1)}
          </DescriptionText>
        </PrimaryText>

        <PrimaryText>
          Wisdom{'\t\t\t'}
          <DescriptionText>
            {data?.wisdom ?? 'not found'} {'\t\t\t'}Mod:{' '}
            {calculateModifier(data?.wisdom ?? -1)}
          </DescriptionText>
        </PrimaryText>

        <PrimaryText>
          Charisma{'\t\t\t'}
          <DescriptionText>
            {data?.charisma ?? 'not found'} {'\t\t\t'}Mod:{' '}
            {calculateModifier(data?.charisma ?? -1)}
          </DescriptionText>
        </PrimaryText>

        {/* FINE SPEED */}

        <View style={styles.spece}></View>

        {data && data.senses && (
          <StyledLabel label={'Senses:'} value={''}></StyledLabel>
        )}
        {data && data.senses && <MonsterSenses senses={data.senses} />}

        <View style={styles.spece}></View>

        <StyledLabel label={'Proficiencies'} value={''}></StyledLabel>
        {data &&
          data.proficiencies.length > 0 &&
          data.proficiencies.map(choice => (
            <>
              <DescriptionText>
                <MonsterProficienciesClass
                  proficiencies_class={choice.proficiency}
                />{' '}
                + {choice.value}
              </DescriptionText>
            </>
          ))}
        {data && data.damage_vulnerabilities.length > 0 && (
          <StyledLabel
            label={'Damage Vulnerabilities'}
            value={data.damage_vulnerabilities.join('\n')}></StyledLabel>
        )}
        {data && data.damage_resistances.length > 0 && (
          <StyledLabel
            label={'Damage Resistances'}
            value={data.damage_resistances.join('\n')}></StyledLabel>
        )}
        {data && data.damage_immunities.length > 0 && (
          <StyledLabel
            label={'Damage Immunities'}
            value={data.damage_immunities.join('\n')}></StyledLabel>
        )}
        {data &&
          data.condition_immunities.length > 0 && (
            <StyledLabel
              label={'Condition Immunities'}
              value={''}></StyledLabel>
          ) && (
            <MonsterConditionImmunities
              condition_immunities={data.condition_immunities}
            />
          )}

        {data && data.languages && (
          <StyledLabel label={'Languages:'} value={''}></StyledLabel>
        )}
        {data && data.languages && (
          <DescriptionText>{data.languages}</DescriptionText>
        )}

        <View style={styles.spece}></View>

        {data && data.special_abilities && (
          <StyledLabel label={'Special Abilities'} value={''}></StyledLabel>
        )}
        {data &&
          data.special_abilities &&
          data.special_abilities.map(choice => (
            <MonsterSpecialAbilities special_abilities={choice} />
          ))}

        {data && data.actions && <MonsterActions actions={data.actions} />}

        {data && data.subtype && (
          <StyledLabel label={'Subtype:'} value={data.subtype}></StyledLabel>
        )}

        {data && data.reactions && (
          <StyledLabel label={'Reactions'} value={''}></StyledLabel>
        )}
        {data &&
          data.reactions &&
          data.reactions.map(
            choice =>
              choice.name && (
                <PrimaryText>
                  {choice.name}
                  <DescriptionText>{choice.desc}</DescriptionText>
                </PrimaryText>
              ),
          )}

        {data && data.legendary_actions && (
          <MonsterLegendaryAction action={data.legendary_actions} />
        )}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
  },
  spece: {
    padding: 20,
  },
});
