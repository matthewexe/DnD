export type Player = {
  id: number;
  name: string;
  alignment: string;
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
  weapon: Weapon[];
  armor: Armor[];
  spells: string[];
  traits: string[];
  proficincies: string[];
  features: string[];
  subclass: string;
  game: number;
};

type Weapon = {
  index: string;
  quantity: number;
};

type Armor = {
  index: string;
  quantity: number;
};

export type Game = {
  id: number;
  name: string;
  players: Player[];
};
