import {StyledText} from '../../ui/texts/StyledText';
import React, {useEffect, useRef} from 'react';
import {HomeScreenProps} from '../../../routes/HomeProps';
import {NewPlayerView} from '../../../views/NewPlayerView';
import {useQuery} from '@realm/react';
import {PlayerModel} from '../../../models/types';
import {
  useGetClassByIndexQuery,
  useGetFeaturesByClassQuery,
  useGetRacesByIndexQuery,
  useGetSubclassQuery,
  useGetSubRacesByIndexQuery,
  useGetTraitByIndexQuery,
} from '../../../services/api';
import {UtilPDF} from '../../../utils/pdf';
import {getProfBonus} from '../../../helper/proficiencyBonus';
import {hp, maxHp} from '../../../utils/hp';
import {calculateModifier} from '../../../utils/calculateModifier';

type Props = HomeScreenProps<'PlayerCard'>;

export const DownloadScheda = ({route, navigation}: Props) => {
  const userData = useQuery<PlayerModel>('Player', collection =>
    collection.filtered('id = $0', route.params.playerId),
  )[0];

  const {data: dataClass, loading: loadingClass} = useGetClassByIndexQuery({
    index: userData.class,
  });

  const {data: subclassData, loading: loadingSubclass} = useGetSubclassQuery({
    index: userData.subclass,
  });

  const {data: dataRace, loading: loadingRace} = useGetRacesByIndexQuery({
    index: userData.race,
  });

  const {data: subraceData, loading: loadingSubrace} =
    useGetSubRacesByIndexQuery({
      index: userData.subrace,
    });

  const {data: featuresData, loading: loadingFeatures} =
    useGetFeaturesByClassQuery({
      index: userData.class,
    });

  const {data: traitsData, loading: loadingTraits} = useGetTraitByIndexQuery({
    index: userData.race,
  });

  let pdf = useRef(new UtilPDF());

  useEffect(() => {
    if (
      loadingClass ||
      loadingFeatures ||
      loadingRace ||
      loadingSubclass ||
      loadingSubrace ||
      loadingTraits
    )
      return;

    pdf.current.init().then(loadedPdf => {
      pdf.current = loadedPdf
        .setCharacterName(userData.character_name)
        .setPlayerName(userData.player_name)
        .setAbilityScore('STR', userData.ability_scores[0])
        .setAbilityScore('DEX', userData.ability_scores[1])
        .setAbilityScore('CON', userData.ability_scores[2])
        .setAbilityScore('INT', userData.ability_scores[3])
        .setAbilityScore('WIS', userData.ability_scores[4])
        .setAbilityScore('CHA', userData.ability_scores[5])
        .setBonusProficiency(getProfBonus(userData.level))
        .setClassAndLevel(dataClass?.name ?? '', userData.level)
        .setSpeed(dataRace?.speed ?? 0)
        .setRace(dataRace?.name ?? '')
        .setExperience(userData.experience)
        .setBackground(userData.background)
        .setAlignment(userData.alignment)
        .setBackground(userData.background)
        .setFeatures(
          featuresData?.results.map(feature => feature.name ?? '') ?? [],
        )
        .setTraits(traitsData?.results.map(trait => trait.name ?? '') ?? [])
        .setLanguages(dataRace?.languages.map(lang => lang.name ?? '') ?? [])
        .setHitDie(dataClass?.hit_die ?? 0)
        .setMoney('COPPER', userData.money[0])
        .setMoney('SILVER', userData.money[1])
        .setMoney('ELECTRUM', userData.money[2])
        .setMoney('GOLD', userData.money[3])
        .setMoney('PLATINUM', userData.money[4])
        .setHpActual(
          hp(
            calculateModifier(userData.ability_scores[2]),
            dataClass?.hit_die ?? 0,
            userData.level,
          ),
        )
        .setHpMax(
          maxHp(
            calculateModifier(userData.ability_scores[2]),
            dataClass?.hit_die ?? 0,
            userData.level,
          ),
        )
        .setOtherProficiencies(
          userData.proficiencies.concat(
            dataRace?.starting_proficiencies.map(v => v.name ?? '') ?? [],
          ),
        );

      for (
        let index = 0;
        index < Math.min(5, userData.equipments.length);
        index++
      ) {
        const equipment = userData.equipments[index];
        pdf.current.addEquipment(equipment.index, equipment.quantity);
      }

      pdf.current
        .save(`${UtilPDF.paths.downloads}/scheda.pdf`)
        .then(() => {
          console.log('PDF saved');
        })
        .catch(err => {
          console.log('Error saving PDF', err);
        });
    });
  }, [
    dataClass,
    dataRace,
    subraceData,
    subclassData,
    userData,
    loadingClass,
    loadingFeatures,
    loadingRace,
    loadingSubclass,
    loadingSubrace,
    loadingTraits,
    featuresData?.results,
    traitsData?.results,
  ]);

  return (
    <NewPlayerView title="Player Card" errorOnPress={() => {}}>
      <StyledText>Player card</StyledText>
    </NewPlayerView>
  );
};
