import {Realm} from '@realm/react';
import {ObjectSchema} from 'realm';
import {
  ClassIndexRequest,
  EquipmentItemRequest,
  FeaturesRequest,
  LanguageRequest,
  RacesRequest,
  SpellRequest,
  Subclasstypes,
  SubracesRequest,
  TraitsRequest,
} from '../types/requests';

export class Game extends Realm.Object<Game> {
  id!: Realm.BSON.ObjectId;
  name!: string;
  description?: string;
  players!: Realm.List<Player>;

  static schema: ObjectSchema = {
    name: 'Game',
    properties: {
      id: 'objectId',
      name: 'string',
      description: 'string?',
      players: 'Player[]',
    },

    primaryKey: 'id',
  };
}

export class Player extends Realm.Object<Player> {
  id!: Realm.BSON.ObjectId;
  character_name!: string;
  player_name!: string;
  class!: ClassIndexRequest;
  race!: RacesRequest;
  background!: string;
  alignment!: string;
  level!: number;
  experience!: number;
  ability_scores!: Realm.List<number>;
  saving_throws!: Realm.List<number>;
  ability_choices!: Realm.List<string>;
  ca!: number;
  speed!: number;
  money!: number[];
  extra_proficiencies?: string[];
  ps!: number;
  hit_die!: number;
  equipments!: Realm.List<Equipment>;
  spells!: Realm.List<SpellRequest>;
  traits!: Realm.List<TraitsRequest>;
  proficiencies!: Realm.List<string>;
  //start
  languages!: Realm.List<LanguageRequest>;
  //end
  features!: Realm.List<FeaturesRequest>;
  subclass!: Subclasstypes;
  subrace!: SubracesRequest;

  static schema: ObjectSchema = {
    name: 'Player',
    properties: {
      id: 'objectId',
      character_name: 'string',
      player_name: 'string',
      class: 'string',
      race: 'string',
      background: 'string',
      alignment: 'string',
      level: 'int',
      experience: 'int',
      ability_scores: 'int[]',
      saving_throws: 'int[]',
      ability_choices: 'string[]',
      ca: 'int',
      speed: 'int',
      money: 'int[]',
      extra_proficiencies: 'string?[]',
      ps: 'int',
      hit_die: 'int',
      equipments: 'Equipment[]',
      spells: 'string[]',
      traits: 'string[]',
      proficiencies: 'string[]',
      features: 'string[]',
      subclass: 'string',
      subrace: 'string',
      game: {
        type: 'linkingObjects',
        objectType: 'Game',
        property: 'players',
      },
    },
    primaryKey: 'id',
  };
}

export class Equipment extends Realm.Object<Equipment> {
  index!: EquipmentItemRequest;
  quantity!: number;

  static schema: ObjectSchema = {
    name: 'Equipment',
    embedded: true,
    properties: {
      index: 'string',
      quantity: 'int',
    },
  };
}
