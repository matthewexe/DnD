import Realm from 'realm';

export class Settings extends Realm.Object<Settings> {
  language: string = 'en';
}
