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
  id!: Realm.BSON.UUID;
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
  weapon!: Realm.List<Weapon>;
  armor!: Realm.List<Armor>;
  spells!: Realm.List<SpellRequest>;
  traits!: Realm.List<TraitsRequest>;
  proficiencies!: Realm.List<string>;
  //start
  languages!: Realm.List<LanguageRequest>;
  //end
  features!: Realm.List<FeaturesRequest>;
  subclass!: Subclasstypes;

  static schema: ObjectSchema = {
    name: 'Player',
    properties: {
      id: 'uuid',
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
      extra_proficiencies: 'string[]?',
      ps: 'int',
      hit_die: 'int',
      weapon: 'Weapon[]',
      armor: 'Armor[]',
      spells: 'string[]',
      traits: 'string[]',
      proficiencies: 'string[]',
      features: 'string[]',
      subclass: 'string',
      game: {
        type: 'linkingObjects',
        objectType: 'Game',
        property: 'players',
      },

      primaryKey: 'id',
    },
  };
}

export class Armor extends Realm.Object<Armor> {
  index!: EquipmentItemRequest;
  quantity!: number;

  static schema: ObjectSchema = {
    name: 'Armor',
    embedded: true,
    properties: {
      index: 'string',
      //start edit
      quantity: 'int',
      //end edit
    },
  };
}

export class Weapon extends Realm.Object<Weapon> {
  index!: EquipmentItemRequest;
  quantity!: number;

  static schema: ObjectSchema = {
    name: 'Weapon',
    embedded: true,
    properties: {
      index: 'string',
      quantity: 'int',
    },
  };
}
