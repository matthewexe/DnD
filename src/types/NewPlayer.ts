// types base on ./src/models/Game.ts
import {
  AlignmentRequest,
  ClassIndexRequest,
  EquipmentItemRequest,
  FeaturesRequest,
  LanguageRequest,
  RacesRequest,
  SpellRequest,
  Subclasstypes,
  SubracesRequest,
  TraitsRequest,
} from './requests';

export type NewGame = {
  id: number;
  name: string;
  description: string;
  players: NewPlayer[];
};

export type NewPlayer = {
  id: number;
  player_name: string;
  character_name: string;
  class: ClassIndexRequest;
  race: RacesRequest;
  background: string;
  alignment: AlignmentRequest;
  level: number;
  experience: number;
  ability_scores: number[];
  saving_throws: number[];
  ability_choices: string[];
  ca: number;
  speed: number;
  money: number[];
  extra_proficiencies: string[];
  ps: number;
  hit_die: number;
  weapon: Weapon[];
  armor: Armor[];
  spells: SpellRequest[];
  traits: TraitsRequest[];
  proficiencies: string[];
  languages: LanguageRequest[];
  features: FeaturesRequest[];
  subclass: Subclasstypes;
  subrace: SubracesRequest;
};

export type Weapon = {
  index: EquipmentItemRequest;
  quantity: number;
};

export type Armor = {
  index: EquipmentItemRequest;
  quantity: number;
};
