import Realm from 'realm';
import {Language} from '../types/languages';

export class Settings extends Realm.Object<Settings> {
  language: Language = 'English';

  static schema: Realm.ObjectSchema = {
    name: 'Settings',
    properties: {
      language: {type: 'string', default: 'English'},
    },
  };
}
