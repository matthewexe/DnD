// Responses types of API https://5e-bits.github.io/docs/api/

// Standard Types
export type APILevelReference = {
  index?: string;
  url?: string;
  level?: number;
};

export type APINameReference = {
  index?: string;
  name?: string;
  url?: string;
};

export type APIReference = APILevelReference | APINameReference;

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

//****************** */
// Common  Section
//***************** */

/**
 * @link https://5e-bits.github.io/docs/api/get-all-resource-ur-ls
 */
export type AllResourceResponse = object;

/**
 * @link https://5e-bits.github.io/docs/api/get-list-of-all-available-resources-for-an-endpoint
 */
export type ResourceListResponse = {
  count: number;
  results: APIReference[];
};

//*********************** */
// Character Data Section
//*********************** */

/**
 * @link https://5e-bits.github.io/docs/api/get-an-ability-score-by-index
 */
export type AbilityScoreResponse = APIReference & {
  full_name?: string;
  desc?: string[];
  skills?: APIReference[];
};

/**
 * @link https://5e-bits.github.io/docs/api/get-an-alignment-by-index
 */
export type AlignmentResponse = APIReference & {
  desc?: string;
  abbreviation?: string;
};

/**
 * @link https://5e-bits.github.io/docs/api/get-a-background-by-index
 */
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

/**
 * @link https://5e-bits.github.io/docs/api/get-a-language-by-index
 */
export type LanguageResponse = APIReference & {
  desc?: string;
  type?: string;
  script?: string;
  typical_speakers?: string[];
};

/**
 * @link https://5e-bits.github.io/docs/api/get-a-proficiency-by-index
 */
export type ProficiencyResponse = APIReference & {
  type?: string;
  classes?: APIReference[];
  races?: APIReference[];
  reference?: APIReference;
};

/**
 * @link https://5e-bits.github.io/docs/api/get-a-skill-by-index
 */
export type SkillResponse = APIReference & {
  desc?: string[];
  ability_score?: APIReference[];
};

//****************** */
// Class Section
//***************** */

/**
 * @link https://5e-bits.github.io/docs/api/get-a-class-by-index
 */
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

/**
 * @link https://5e-bits.github.io/docs/api/get-spellcasting-info-for-a-class
 */
export type ClassSpellcastingResponse =
  | {
      level?: number;
      info?: {name?: string; desc?: string[]};
      spellcasting_ability?: APIReference[];
    }
  | {error: string};

/**
 * @link https://5e-bits.github.io/docs/api/get-multiclassing-resource-for-a-class
 */
export type ClassMultiCastingResponse = Multiclassing;

//*************************** */
// ClassResource List Section
//*************************** */

/**
 * @link https://5e-bits.github.io/docs/api/get-subclasses-available-for-a-class
 * @link https://5e-bits.github.io/docs/api/get-spells-available-for-a-class
 * @link https://5e-bits.github.io/docs/api/get-features-available-for-a-class
 * @link https://5e-bits.github.io/docs/api/get-proficiencies-available-for-a-class
 */
export type ClassResourceListResponse = ResourceListResponse;

//*************************** */
// Class Level Section
//*************************** */

/**
 * @link https://5e-bits.github.io/docs/api/get-all-level-resources-for-a-class
 * @link https://5e-bits.github.io/docs/api/get-level-resource-for-a-class-and-level
 */
export type ClassLevelResourceResponse = APIReference & {
  ability_score_bonuses?: number;
  prof_bonus?: number;
  features?: APIReference[];
  spellcasting?: SpellCastingLevel;
  class_specific?: object;
};

/**
 * @link https://5e-bits.github.io/docs/api/get-features-available-to-a-class-at-the-requested-level
 */
export type ClassLevelFeatureResponse = ResourceListResponse;

/**
 * @link https://5e-bits.github.io/docs/api/get-spells-of-the-requested-level-available-to-the-class
 */
export type ClassLevelSpellResponse = ResourceListResponse;

//****************** */
// Game Mechanics Section
//***************** */

/**
 * @link https://5e-bits.github.io/docs/api/get-a-condition-by-index
 * @link https://5e-bits.github.io/docs/api/get-a-damage-type-by-index
 * @link https://5e-bits.github.io/docs/api/get-a-magic-school-by-index
 */
export type GameMechanicsResponse = APIReference & {
  desc?: string[] | string;
};

//****************** */
// Equipment Section
//***************** */

/**
 * @link https://5e-bits.github.io/docs/api/get-an-equipment-item-by-index
 */
export type EquipmentResponse = object;

/**
 * @link https://5e-bits.github.io/docs/api/get-an-equipment-category-by-index
 */
export type EquipmentCategory = APIReference & {
  equipment?: APIReference[];
};

/**
 * @link https://5e-bits.github.io/docs/api/get-a-magic-item-by-index
 */
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

/**
 * @link https://5e-bits.github.io/docs/api/get-a-weapon-by-index
 */
export type WeaponResponse = APIReference;

//****************** */
// Feat Section
//***************** */

/**
 * @link https://5e-bits.github.io/docs/api/get-a-feat-by-index
 */
export type FeatResponse = APIReference & {
  desc?: string[];
  prerequisites?: Prerequisites;
};

//****************** */
// Feature Section
//***************** */

/**
 * @link https://5e-bits.github.io/docs/api/get-a-feature-by-index
 */
export type FeatureResponse = APIReference & {
  level?: number;
  desc?: string[];
  class?: APIReference;
  subclass?: APIReference;
  parent?: APIReference;
  prerequisites?: object[];
  feature_specific?: any;
};

//****************** */
// Monster Section
//***************** */

/**
 * @linkhttps://5e-bits.github.io/docs/api/get-list-of-monsters-with-optional-filtering
 */
export type MonsterResourceListResponse = ResourceListResponse;

/**
 * @link https://5e-bits.github.io/docs/api/get-a-monster-by-index
 */
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

//**************** */
// Races Section
//**************** */

/**
 * @link https://5e-bits.github.io/docs/api/get-a-race-by-index
 */
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

/**
 * @link https://5e-bits.github.io/docs/api/get-subraces-available-for-a-race
 */
export type RaceSubracesResponse = ResourceListResponse;

/**
 * @link https://5e-bits.github.io/docs/api/get-proficiencies-available-for-a-race
 */
export type RaceProficiencyResponse = ResourceListResponse;

/**
 * @link https://5e-bits.github.io/docs/api/get-traits-available-for-a-race
 */
export type RaceTraitsResponse = ResourceListResponse;

//**************** */
// Rule Section
//**************** */

/**
 * @link https://5e-bits.github.io/docs/api/get-a-rule-section-by-index
 */
export type RuleSectionResponse = APIReference & {
  desc?: string[];
};

/**
 * @link https://5e-bits.github.io/docs/api/get-a-rule-by-index
 */
export type RuleResponse = RuleSectionResponse & {
  subsections?: RuleSectionResponse[];
};

//**************** */
// Spells Section
//**************** */

/**
 * @link https://5e-bits.github.io/docs/api/get-list-of-spells-with-optional-filtering
 */
export type SpellResourceListResponse = ResourceListResponse;

/**
 * @link https://5e-bits.github.io/docs/api/get-a-spell-by-index
 */
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

//**************** */
// Subclass Section
//**************** */

/**
 * @link https://5e-bits.github.io/docs/api/get-a-subclass-by-index
 */
export type SubclassByIndexResponse = APIReference & {
  desc?: string;
  class?: APIReference;
  subclass_flavor?: string;
  subclass_levels?: string;
  spells?: {prerequisites: APIReference & {type: string}; spell: APIReference};
};

/**
 * @link https://5e-bits.github.io/docs/api/get-features-available-for-a-subclass
 */
export type SubclassFeatureResponse = ResourceListResponse;

/**
 * @link https://5e-bits.github.io/docs/api/get-all-level-resources-for-a-subclass
 */
export type SubclassAllLevelResourceResponse = APIReference & {
  features?: APIReference[];
  class?: APIReference;
  subclass?: APIReference;
};

/**
 * @link https://5e-bits.github.io/docs/api/get-level-resources-for-a-subclass-and-level
 */
export type SubclassLevelResourceResponse = APIReference & {
  ability_score_bonuses?: number;
  prof_bonus?: number;
  features?: APIReference[];
  spellcasting?: SpellCastingLevel;
  classspecific?: any;
};

/**
 * @link https://5e-bits.github.io/docs/api/get-features-of-the-requested-spell-level-available-to-the-class
 */
export type SubclassFeatureSpellLevelResponse = ResourceListResponse;

//**************** */
// Subrace Section
//**************** */

/**
 * @link https://5e-bits.github.io/docs/api/get-a-subrace-by-index
 */
export type SubraceIndexResponse = APIReference & {
  desc?: string;
  race?: APIReference;
  ability_score?: {bonus?: number; ability_score?: APIReference};
  starting_proficiencies?: APIReference[];
  languages?: APIReference[];
  language_options?: Choice[];
  racial_traits?: APIReference[];
};

/**
 * @link https://5e-bits.github.io/docs/api/get-proficiencies-available-for-a-subrace
 */
export type SubraceProficienciesResponse = ResourceListResponse;

/**
 * @link https://5e-bits.github.io/docs/api/get-traits-available-for-a-subrace
 */
export type SubraceTraitsResponse = ResourceListResponse;

//**************** */
// Trait Section
//**************** */

/**
 * @link https://5e-bits.github.io/docs/api/get-a-trait-by-index
 */
export type TraitsIndexResponse = APIReference & {
  desc?: string;
  races?: APIReference[];
  subraces?: APIReference[];
  proficiencies?: APIReference[];
  proficiency_choices?: Choice[];
  languages_options?: Choice[];
  trait_specific?: any;
};
