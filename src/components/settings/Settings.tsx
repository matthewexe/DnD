import React, {useEffect, useRef} from 'react';
import {NewPlayerView} from '../../views/NewPlayerView';
import {useQuery, useRealm} from '@realm/react';
import {Settings as SettingsModel} from '../../models/Settings';
import {getLanguages, Language, LanguageCode} from '../../types/languages';
import {StyledMenu} from '../ui/StyledMenu';
import {StyledText} from '../ui/texts/StyledText';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState, store} from '../../store';
import {setProperty} from '../../store/settings';

export const Settings = () => {
  const realm = useRealm();

  const settings = useSelector((state: RootState) => state.settings);
  const languages = useRef<[string, LanguageCode][]>([]);

  const dispatch = useDispatch<AppDispatch>();

  const updateLanguage = (language: Language) => {
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

  useEffect(() => {
    languages.current = getLanguages();
  }, []);

  return (
    <NewPlayerView title="Settings" errorOnPress={() => {}}>
      <StyledText>Select Language</StyledText>
      <StyledMenu
        defaultValueByIndex={languages.current
          .map(item => item[0])
          .indexOf(settings.language)}
        data={languages.current}
        onSelect={updateLanguage}
        rowTextForSelection={item => item[0]}
      />
    </NewPlayerView>
  );
};
