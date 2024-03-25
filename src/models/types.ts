import {
  ClassIndexRequest,
  RacesRequest,
  SpellRequest,
  TraitsRequest,
  LanguageRequest,
  FeaturesRequest,
  Subclasstypes,
  SubracesRequest,
  EquipmentItemRequest,
  AlignmentRequest,
} from '../types/requests';

export type GameModel = {
  id: Realm.BSON.ObjectId;
  name: string;
  description?: string;
  players: PlayerModel[];
};

export type PlayerModel = {
  id?: Realm.BSON.ObjectId;
  character_name: string;
  player_name: string;
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
  extra_proficiencies?: string[];
  ps: number;
  hit_die: number;
  weapon: WeaponModel[];
  armor: ArmorModel[];
  spells: SpellRequest[];
  traits: TraitsRequest[];
  proficiencies: string[];
  //start
  languages: LanguageRequest[];
  //end
  features: FeaturesRequest[];
  subclass: Subclasstypes;
  subrace: SubracesRequest;
};

export type ArmorModel = {
  index: EquipmentItemRequest;
  quantity: number;
};

export type WeaponModel = {
  index: EquipmentItemRequest;
  quantity: number;
};
