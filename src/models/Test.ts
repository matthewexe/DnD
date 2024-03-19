import Realm from 'realm';
import {ObjectSchema} from 'realm';

export class EmbeddedTest extends Realm.Object<EmbeddedTest> {
  description!: string;

  static schema: ObjectSchema = {
    name: 'EmbeddedTest',
    embedded: true,
    properties: {
      description: 'string',
    },
  };
}

export default class Test extends Realm.Object<Test> {
  id!: Realm.BSON.UUID;
  name!: string;
  // description?: Realm.List<string>;
  embedded?: EmbeddedTest;

  static schema: ObjectSchema = {
    name: 'Test',
    properties: {
      id: 'uuid',
      name: 'string',
      embedded: 'EmbeddedTest?',
      // description: 'string?[]',
    },

    primaryKey: 'id',
  };
}
