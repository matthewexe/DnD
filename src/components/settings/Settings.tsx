import React, {useEffect, useRef, useState} from 'react';
import {NewPlayerView} from '../../views/NewPlayerView';
import {useRealm} from '@realm/react';
import {Settings as SettingsModel} from '../../models/Settings';
import {getLanguages, Language, LanguageCode} from '../../types/languages';
import {StyledMenu} from '../ui/StyledMenu';
import {StyledText} from '../ui/texts/StyledText';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState, store} from '../../store';
import {setProperty} from '../../store/settings';
import {StyledSubtitle} from '../ui/texts/StyledSubtitle';

export const Settings = () => {
  const realm = useRealm();

  const {language} = useSelector((state: RootState) => state.settings);
  const [languages, setLanguages] = useState<[string, LanguageCode][]>(
    getLanguages(),
  );

  const dispatch = useDispatch<AppDispatch>();

  const updateLanguage = (language: Language) => {
    console.log(language);
    // Update DB
    realm.write(() => {
      realm.objects<SettingsModel>('Settings')[0].language = language;
    });

    // Update state
    dispatch(
      setProperty({
        property: 'language',
        value: language,
      }),
    );
  };

  return (
    <NewPlayerView title="Settings" errorOnPress={() => {}}>
      <StyledText>Settings: {language}</StyledText>
      <StyledSubtitle>Language</StyledSubtitle>
      <StyledText>Select Language</StyledText>
      <StyledMenu
        data={languages}
        onSelect={item => updateLanguage(item[0])}
        defaultButtonText={language}
        rowTextForSelection={item => item[0]}
        buttonTextAfterSelection={item => item[0]}
        search
      />
    </NewPlayerView>
  );
};
