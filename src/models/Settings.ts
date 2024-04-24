import Realm from 'realm';
import {Language, LanguageCode} from '../types/languages';

export class Settings extends Realm.Object<Settings> {
  language: LanguageCode = 'en';

  static schema: Realm.ObjectSchema = {
    name: 'Settings',
    properties: {
      language: {type: 'string', default: 'en'},
    },
  };
}
