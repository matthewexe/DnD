// Responses types of API https://5e-bits.github.io/docs/api/

// Standard Types

type APILevelReference = {
  index?: string;
  url?: string;
  level?: number;
};

type APINameReference = {
  index?: string;
  name?: string;
  url?: string;
};

type APIReference = APILevelReference | APINameReference;

type Choice = {
  desc?: string;
  choose?: number;
  type?: string;
  from?: object;
};

type Prerequisites = {
  ability_score?: APIReference;
  minimum_score?: number;
};

type Multiclassing = {
  prerequisites?: Prerequisites[];
  prerequisite_options?: Choice[];
  proficiencies?: APIReference[];
  proficiency_choices?: Choice[];
};

type SpellCasting = {
  level?: number;
  info?: {name?: string; desc?: string[]};
  spellcasting_ability?: APIReference[];
};

type SpellCastingLevel = {
  cantrips_known?: number;
  spells_known?: number;
  spell_slots_level_1?: number;
  spell_slots_level_2?: number;
  spell_slots_level_3?: number;
  spell_slots_level_4?: number;
  spell_slots_level_5?: number;
  spell_slots_level_6?: number;
  spell_slots_level_7?: number;
  spell_slots_level_8?: number;
  spell_slots_level_9?: number;
};

type StartingEquipment = {
  quantity?: number;
  equipment?: APIReference;
};

type DC = {
  dc_type?: APIReference;
  dc_value?: number;
  success_type?: string;
};

type Damage = {
  damage_dice?: string;
  damage_type?: APIReference;
};

type Action = {
  name: string;
  desc: string;
  action_options: Choice[];
  actions: {
    action_name: string;
    count: number;
    type: 'melee' | 'ranged' | 'ability' | 'magic';
  }[];
  options: Choice[];
  multiattack_type: string;
  attack_bonus: number;
  dc: DC;
  attacks: {name?: string; dc?: DC; damage?: Damage}[];
};

// Responses Types
export type ResourceListResponse = {
  count: number;
  results: APIReference[];
};

export type AbilityScoreResponse = APIReference & {
  full_name?: string;
  desc?: string[];
  skills?: APIReference[];
};

export type AlignmentResponse = APIReference & {
  desc?: string;
  abbreviation?: string;
};

export type BackgroundResponse = APIReference & {
  starting_proficiencies?: APIReference[];
  starting_equipment?: APIReference[];
  starting_equipment_options?: Choice[];
  language_options?: Choice;
  feature?: {name: string; desc: string};
  personality_traits?: object;
  ideals?: Choice[];
  bonds?: Choice[];
  flaws?: Choice[];
};

export type LanguageResponse = APIReference & {
  desc?: string;
  type?: string;
  script?: string;
  typical_speakers?: string[];
};

export type ProficiencyResponse = APIReference & {
  type?: string;
  classes?: APIReference[];
  races?: APIReference[];
  reference?: APIReference;
};

export type SkillResponse = APIReference & {
  desc?: string[];
  ability_score?: APIReference[];
};

export type ClassResponse = APIReference & {
  hit_die?: number;
  class_levels?: string;
  multi_claasing?: Multiclassing;
  spell_casting?: SpellCasting;
  spells?: string;
  starting_equipment?: StartingEquipment[];
  starting_equipment_options?: Choice[];
  proficiency_choices?: Choice[];
  proficiencies?: APIReference[];
  saving_throws?: APIReference[];
  subclasses?: APIReference[];
};

export type ClassResourceListResponse = ResourceListResponse;

export type ClassLevelResponse =
  | (APIReference & {
      ability_score_bonuses?: number;
      prof_bonus?: number;
      features?: APIReference[];
      spellcasting?: SpellCastingLevel;
      class_specific?: object;
    })
  | ResourceListResponse;

export type GameMechanicsResponse = APIReference & {
  desc?: string[] | string;
};

export type MagicResponse = APIReference & {
  desc?: string[];
  equipment_category?: APIReference;
  rarity?:
    | 'Varies'
    | 'Common'
    | 'Uncommon'
    | 'Rare'
    | 'Very Rare'
    | 'Legendary'
    | 'Artifact';
  variants?: APIReference[];
  variant?: APIReference;
};

export type WeaponResponse = APIReference;

export type EquipmentResponse = object;

export type EquipmentCategory = APIReference & {
  equipment?: APIReference[];
};

export type FeatResponse = APIReference & {
  desc?: string[];
  prerequisites?: Prerequisites;
};

export type FeatureResponse = APIReference & {
  level?: number;
  desc?: string[];
  class?: APIReference;
  subclass?: APIReference;
  parent?: APIReference;
  prerequisites?: object[];
  feature_specific?: any;
};

export type MonsterResourceListResponse = ResourceListResponse;

export type MonsterResponse = APIReference & {
  desc?: string[];
  charisma?: number;
  constitution?: number;
  dexterity?: number;
  intelligence?: number;
  strength?: number;
  wisdom?: number;
  image?: string;
  size?: 'Tiny' | 'Small' | 'Medium' | 'Large' | 'Huge' | 'Gargantuan';
  type?: string;
  subtype?: string;
  alignment?:
    | 'chaotic evil'
    | 'chaotic good'
    | 'chaotic neutral'
    | 'lawful evil'
    | 'lawful good'
    | 'lawful neutral'
    | 'neutral evil'
    | 'neutral good'
    | 'neutral'
    | 'any alignment'
    | 'unaligned';
  armor_class?: object[];
  hit_points?: number;
  hit_dice?: string;
  hit_points_roll?: number;
  actions?: Action[];
  legendary_actions?: Action[];
  challenge_rating?: number;
  condition_immunities?: APIReference[];
  damage_immunities?: string[];
  damage_resistance?: string[];
  damage_vulnerabilities?: string[];
  forms?: APIReference[];
  languages?: string;
  proficiencies?: {value: number; proficiency: APIReference}[];
  reactions?: Action[];
  senses?: {
    passive_perception: string;
    blindsight: string;
    darkvision: string;
    tremorsense: string;
    truesight: string;
  };
  special_abilities?: Action[];
  speed?: {
    walk?: string;
    burrow?: string;
    climb?: string;
    fly?: string;
    swim?: string;
  };
  xp?: number;
};

export type RaceResponse = APIReference & {
  speed?: number;
  ability_bonuses?: {bonus: number; ability_score: APIReference[]};
  alignment?: string;
  age?: string;
  size?: string;
  size_description?: string;
  starting_proficiencies?: APIReference[];
  starting_proficiency_options?: Choice[];
  languages?: APIReference[];
  language_desc?: string;
  language_options?: Choice;
  traits?: APIReference[];
  subraces?: APIReference[];
};

export type SubracesByRaceResponse = ResourceListResponse;

export type ProficiencyByRaceResponse = ResourceListResponse;

export type TraitsByRaceResponse = ResourceListResponse;

export type RuleSectionResponse = APIReference & {
  desc?: string[];
};

export type RuleResponse = RuleSectionResponse & {
  subsections?: RuleSectionResponse[];
};

export type SpellResourceListResponse = ResourceListResponse;

export type SpellResponse = APIReference & {
  desc?: string[];
  higher_level?: string[];
  range?: string;
  components?: ('V' | 'S' | 'M')[];
  material?: string;
  area_of_effect?: {
    size: number;
    type: 'sphere' | 'cone' | 'cylinder' | 'line' | 'cube';
  };
  ritual?: boolean;
  duration?: string;
  concentration?: boolean;
  casting_time?: string;
  level?: number;
  attack_type?: string;
  damage?: {damage_type: APIReference; damage_at_slot_level: object};
  school?: APIReference;
  classes?: APIReference[];
  subclasses?: APIReference[];
  url?: string;
};

export type SubclassByIndexResponse = APIReference & {
  desc?: string;
  class?: APIReference;
  subclass_flavor?: string;
  subclass_levels?: string;
  spells?: {prerequisites: APIReference & {type: string}; spell: APIReference};
};

export type SubclassFeatureResponse = ResourceListResponse;

export type SubclassAllLevelResourceResponse = APIReference & {
  features?: APIReference[];
  class?: APIReference;
  subclass?: APIReference;
};

export type SubclassLevelResourceResponse = APIReference & {
  ability_score_bonuses?: number;
  prof_bonus?: number;
  features?: APIReference[];
  spellcasting?: SpellCastingLevel;
  classspecific?: any;
};

export type SubclassFeatureSpellLevelResposne = ResourceListResponse;

export type SubraceIndexResponse = APIReference & {
  desc?: string;
  race?: APIReference;
  ability_score?: {bonus?: number; ability_score?: APIReference};
  starting_proficiencies?: APIReference[];
  languages?: APIReference[];
  language_options?: Choice[];
  racial_traits?: APIReference[];
};

export type SubraceProficienciesResponse = ResourceListResponse;

export type SubraceTraitsResponse = ResourceListResponse;

export type TraitsIndex = APIReference & {
  desc?: string;
  races?: APIReference[];
  subraces?: APIReference[];
  proficiencies?: APIReference[];
  proficiency_choices?: Choice[];
  languages_options?: Choice[];
  trait_specific?: any;
};
