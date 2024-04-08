import {StyledText} from '../../ui/texts/StyledText';
import React, {useEffect, useRef} from 'react';
import {HomeScreenProps} from '../../../routes/HomeProps';
import {NewPlayerView} from '../../../views/NewPlayerView';
import {useQuery} from '@realm/react';
import {PlayerModel} from '../../../models/types';
import {
  useGetClassByIndexQuery,
  useGetRacesByIndexQuery,
  useGetSubclassQuery,
  useGetSubRacesByIndexQuery,
} from '../../../services/api';
import {UtilPDF} from '../../../utils/pdf';
import {getProfBonus} from '../../../helper/proficiencyBonus';

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

  let pdf = useRef(new UtilPDF());

  useEffect(() => {
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
        .save(`${UtilPDF.paths.downloads}/scheda.pdf`)
        .then(() => {
          console.log('PDF saved');
        })
        .catch(err => {
          console.log('Error saving PDF', err);
        });
    });
  }, [dataClass, dataRace, subraceData, subclassData, userData]);

  return (
    <NewPlayerView title="Player Card" errorOnPress={() => {}}>
      <StyledText>Player card</StyledText>
    </NewPlayerView>
  );
};
