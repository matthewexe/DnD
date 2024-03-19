import Realm from 'realm';
import {ObjectSchema} from 'realm';
import {ClassIndexRequest} from '../types/requests';

export default class Test extends Realm.Object<Test> {
  id!: Realm.BSON.UUID;
  name!: string;
  description?: string;
  class!: ClassIndexRequest;

  static schema: ObjectSchema = {
    name: 'Test',
    properties: {
      id: 'uuid',
      name: 'string',
      description: 'string?',
      class: 'string',
    },

    primaryKey: 'id',
  };
}
