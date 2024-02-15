export type AbilityScore = {
  __typename?: 'AbilityScore';
  desc: string[];
  full_name: string;
  index: string;
  name: string;
  skills: Skill[];
};

export type Skill = {
  __typename?: 'Skill';
  ability_score: AbilityScore;
  desc: string[];
  index: string;
  name: string;
};

export type Alignment = {
  __typename?: 'Alignment';
  abbreviation: string;
  desc: string;
  index: string;
  name: string;
};

export type Condition = {
  __typename?: 'Condition';
  desc: string[];
  index: string;
  name: string;
};

export type DamageType = {
  __typename?: 'DamageType';
  desc: string[];
  index: string;
  name: string;
};

export type WeaponProperty = {
  __typename?: 'WeaponProperty';
  desc: string[];
  index: string;
  name: string;
};

export enum Currency {
  Cp = 'CP',
  Gp = 'GP',
  Sp = 'SP',
}

export type Cost = {
  __typename?: 'Cost';
  quantity: number;
  unit: Currency;
};

export type EquipmentCategory = {
  __typename?: 'EquipmentCategory';
  equipment: IEquipmentBase[];
  index: string;
  name: string;
};

export type IEquipmentBase = {
  desc?: string[] | null;
  equipment_category: EquipmentCategory;
  index: string;
  name: string;
};

export enum MagicItemRarity {
  Artifact = 'ARTIFACT',
  Common = 'COMMON',
  Legendary = 'LEGENDARY',
  Rare = 'RARE',
  Uncommon = 'UNCOMMON',
  Varies = 'VARIES',
  VeryRare = 'VERY_RARE',
}

export type MagicItem = IEquipmentBase & {
  __typename?: 'MagicItem';
  desc: string[];
  equipment_category: EquipmentCategory;
  index: string;
  name: string;
  rarity: MagicItemRarity;
};

export type IEquipment = {
  cost: Cost;
  desc?: string[] | null;
  equipment_category: EquipmentCategory;
  index: string;
  name: string;
  weight?: number | null;
};

export type Tool = IEquipment &
  IEquipmentBase & {
    __typename?: 'Tool';
    cost: Cost;
    desc?: string[] | null;
    equipment_category: EquipmentCategory;
    index: string;
    name: string;
    tool_category: EquipmentCategory;
    weight?: number | null;
  };

export type IGear = {
  cost: Cost;
  desc?: string[] | null;
  equipment_category: EquipmentCategory;
  gear_category: EquipmentCategory;
  index: string;
  name: string;
  weight?: number | null;
};

export type Gear = IEquipment &
  IEquipmentBase &
  IGear & {
    __typename?: 'Gear';
    cost: Cost;
    desc?: string[] | null;
    equipment_category: EquipmentCategory;
    gear_category: EquipmentCategory;
    index: string;
    name: string;
    weight?: number | null;
  };

export type PackQuantity = {
  __typename?: 'PackQuantity';
  item: IEquipment;
  quantity: number;
};

export type Quantity = {
  __typename?: 'Quantity';
  equipment: IEquipment;
  quantity: number;
};

export type Pack = IEquipment &
  IEquipmentBase &
  IGear & {
    __typename?: 'Pack';
    contents: PackQuantity[];
    cost: Cost;
    desc?: string[] | null;
    equipment_category: EquipmentCategory;
    gear_category: EquipmentCategory;
    index: string;
    name: string;
    weight?: number | null;
  };

export type Ammunition = IEquipment &
  IEquipmentBase &
  IGear & {
    __typename?: 'Ammunition';
    cost: Cost;
    desc?: string[] | null;
    equipment_category: EquipmentCategory;
    gear_category: EquipmentCategory;
    index: string;
    name: string;
    quantity: number;
    weight?: number | null;
  };

export type Damage = {
  __typename?: 'Damage';
  damage_dice: string;
  damage_type: DamageType;
};

export type Range = {
  __typename?: 'Range';
  long?: number | null;
  normal: number;
};

export enum WeaponRange {
  Melee = 'MELEE',
  Ranged = 'RANGED',
}

export type Weapon = IEquipment &
  IEquipmentBase & {
    __typename?: 'Weapon';
    category_range: EquipmentCategory;
    cost: Cost;
    damage?: Damage | null;
    desc?: string[] | null;
    equipment_category: EquipmentCategory;
    index: string;
    name: string;
    properties: WeaponProperty[];
    range: Range;
    special?: string[] | null;
    throw_range?: Range | null;
    two_handed_damage?: Damage | null;
    weapon_category: EquipmentCategory;
    weapon_range: WeaponRange;
    weight?: number | null;
  };

export type ArmorClass = {
  __typename?: 'ArmorClass';
  base: number;
  dex_bonus: boolean;
  max_bonus?: number | null;
};

export type Armor = IEquipment &
  IEquipmentBase & {
    __typename?: 'Armor';
    armor_category: EquipmentCategory;
    armor_class: ArmorClass;
    cost: Cost;
    desc?: string[] | null;
    equipment_category: EquipmentCategory;
    index: string;
    name: string;
    stealth_disadvantage: boolean;
    str_minimum: number;
    weight?: number | null;
  };

////////////////////////////////////////////////////////////////

export type Speed = {
  __typename?: 'Speed';
  quantity: number;
  unit: string;
};

export type Vehicle = IEquipment &
  IEquipmentBase & {
    __typename?: 'Vehicle';
    capacity?: string | null;
    cost: Cost;
    desc?: string[] | null;
    equipment_category: EquipmentCategory;
    index: string;
    name: string;
    speed?: Speed | null;
    vehicle_category: EquipmentCategory;
    weight?: number | null;
  };

export type AbilityScorePrerequisite = {
  __typename?: 'AbilityScorePrerequisite';
  ability_score: AbilityScore;
  minimum_score: number;
};

export type Feat = {
  __typename?: 'Feat';
  desc: string[];
  index: string;
  name: string;
  prerequisites: AbilityScorePrerequisite[];
};

export enum LanguageType {
  Exotic = 'EXOTIC',
  Standard = 'STANDARD',
}

export enum LanguageScript {
  Celestial = 'CELESTIAL',
  Common = 'COMMON',
  Draconic = 'DRACONIC',
  Dwarvish = 'DWARVISH',
  Elvish = 'ELVISH',
  Infernal = 'INFERNAL',
}

export type Language = {
  __typename?: 'Language';
  desc?: string | null;
  index: string;
  name: string;
  script?: LanguageScript | null;
  type: LanguageType;
  typical_speakers: string[];
};

export type Rule = {
  __typename?: 'Rule';
  desc: string;
  index: string;
  name: string;
  subsections: RuleSection[];
};

export type RuleSection = {
  __typename?: 'RuleSection';
  desc: string;
  index: string;
  name: string;
};

export type AreaOfEffect = {
  __typename?: 'AreaOfEffect';
  size: number;
  type: AreaOfEffectType;
};

export enum AreaOfEffectType {
  Cone = 'CONE',
  Cube = 'CUBE',
  Cylinder = 'CYLINDER',
  Line = 'LINE',
  Sphere = 'SPHERE',
}

export enum SpellComponent {
  M = 'M',
  S = 'S',
  V = 'V',
}

export type DamageAtLevel = {
  __typename?: 'DamageAtLevel';
  damage: string;
  level: number;
};

export type SpellDamage = {
  __typename?: 'SpellDamage';
  damage_at_character_level?: DamageAtLevel[] | null;
  damage_at_slot_level?: DamageAtLevel[] | null;
  damage_type?: DamageType | null;
};

export type HealingAtLevel = {
  __typename?: 'HealingAtLevel';
  healing: string;
  level: number;
};

export enum DcSuccess {
  Half = 'HALF',
  None = 'NONE',
  Other = 'OTHER',
}

export type SpellDc = {
  __typename?: 'SpellDc';
  desc?: string | null;
  success: DcSuccess;
  type: AbilityScore;
};

export type MagicSchool = {
  __typename?: 'MagicSchool';
  desc: string;
  index: string;
  name: string;
  spells: Spell[];
};

export enum SpellAttackType {
  Melee = 'MELEE',
  Ranged = 'RANGED',
}

export type Spell = {
  __typename?: 'Spell';
  area_of_effect?: AreaOfEffect | null;
  attack_type?: SpellAttackType | null;
  casting_time: string;
  classes: Class[];
  components?: SpellComponent[] | null;
  concentration: boolean;
  damage?: SpellDamage | null;
  dc?: SpellDc | null;
  desc: string[];
  duration: string;
  heal_at_slot_level?: HealingAtLevel[] | null;
  higher_level?: string[] | null;
  index: string;
  level: number;
  material?: string | null;
  name: string;
  range: string;
  ritual: boolean;
  school: MagicSchool;
  subclasses: Subclass[];
};

export type ProficiencyReference =
  | AbilityScore
  | Ammunition
  | Armor
  | EquipmentCategory
  | Gear
  | Pack
  | Skill
  | Tool
  | Vehicle
  | Weapon;

export enum ProficiencyType {
  Armor = 'ARMOR',
  ArtisansTools = 'ARTISANS_TOOLS',
  GamingSets = 'GAMING_SETS',
  MusicalInstruments = 'MUSICAL_INSTRUMENTS',
  Other = 'OTHER',
  SavingThrows = 'SAVING_THROWS',
  Skills = 'SKILLS',
  Vehicles = 'VEHICLES',
  Weapons = 'WEAPONS',
}

export type Proficiency = {
  __typename?: 'Proficiency';
  classes: Class[];
  index: string;
  name: string;
  races: ProficiencyRace[];
  reference: ProficiencyReference;
  type: ProficiencyType;
};

export type ActionDc = {
  __typename?: 'ActionDc';
  success: DcSuccess;
  type: AbilityScore;
  value: number;
};

export type LegendaryAction = {
  __typename?: 'LegendaryAction';
  damage?: Damage[] | null;
  dc?: ActionDc | null;
  desc: string;
  name: string;
};

export type MonsterProficiency = {
  __typename?: 'MonsterProficiency';
  proficiency: Proficiency;
  value: number;
};

export type Reaction = {
  __typename?: 'Reaction';
  dc?: ActionDc | null;
  desc: string;
  name: string;
};

export type Senses = {
  __typename?: 'Senses';
  blindsight?: string | null;
  darkvision?: string | null;
  passive_perception: number;
  tremorsense?: string | null;
  truesight?: string | null;
};

export enum RestType {
  Long = 'LONG',
  Short = 'SHORT',
}

export enum UsageType {
  AtWill = 'AT_WILL',
  PerDay = 'PER_DAY',
  PerRest = 'PER_REST',
  RechargeAfterRest = 'RECHARGE_AFTER_REST',
  RechargeOnRoll = 'RECHARGE_ON_ROLL',
}

export type Usage = {
  __typename?: 'Usage';
  dice?: string | null;
  min_value?: number | null;
  rest_types?: RestType[] | null;
  times?: number | null;
  type: UsageType;
};

export type MonsterSpellSlot = {
  __typename?: 'MonsterSpellSlot';
  level: number;
  slots: number;
};

export type MonsterSpell = {
  __typename?: 'MonsterSpell';
  spell: Spell;
  usage?: Usage | null;
};

export type MonsterSpellcasting = {
  __typename?: 'MonsterSpellcasting';
  ability: AbilityScore;
  components_required?: SpellComponent[] | null;
  dc?: number | null;
  level?: number | null;
  modifier?: number | null;
  school?: string | null;
  slots?: MonsterSpellSlot[] | null;
  spells: MonsterSpell[];
};

export type SpecialAbility = {
  __typename?: 'SpecialAbility';
  damage?: Damage[] | null;
  dc?: ActionDc | null;
  desc: string;
  name: string;
  spellcasting?: MonsterSpellcasting | null;
  usage?: Usage | null;
};

export type MonsterSpeed = {
  __typename?: 'MonsterSpeed';
  burrow?: string | null;
  climb?: string | null;
  fly?: string | null;
  hover?: boolean | null;
  swim?: string | null;
  walk?: string | null;
};

export enum Size {
  Gargantuan = 'GARGANTUAN',
  Huge = 'HUGE',
  Large = 'LARGE',
  Medium = 'MEDIUM',
  Small = 'SMALL',
  Tiny = 'TINY',
}

export enum MonsterType {
  Aberration = 'ABERRATION',
  Beast = 'BEAST',
  Celestial = 'CELESTIAL',
  Construct = 'CONSTRUCT',
  Dragon = 'DRAGON',
  Elemental = 'ELEMENTAL',
  Fey = 'FEY',
  Fiend = 'FIEND',
  Giant = 'GIANT',
  Humanoid = 'HUMANOID',
  Monstrosity = 'MONSTROSITY',
  Ooze = 'OOZE',
  Plant = 'PLANT',
  Swarm = 'SWARM',
  Undead = 'UNDEAD',
}

export enum MonsterSubtype {
  AnyRace = 'ANY_RACE',
  Demon = 'DEMON',
  Devil = 'DEVIL',
  Dwarf = 'DWARF',
  Elf = 'ELF',
  Gnoll = 'GNOLL',
  Gnome = 'GNOME',
  Goblinoid = 'GOBLINOID',
  Grimlock = 'GRIMLOCK',
  Human = 'HUMAN',
  Kobold = 'KOBOLD',
  Lizardfolk = 'LIZARDFOLK',
  Merfolk = 'MERFOLK',
  Orc = 'ORC',
  Sahuagin = 'SAHUAGIN',
  Shapechanger = 'SHAPECHANGER',
  Titan = 'TITAN',
}

export type ActionOption = {
  __typename?: 'ActionOption';
  action_name: string;
  count: number | string;
  option_type: string;
  type?: string | null;
};

export type MultipleActionOption = {
  __typename?: 'MultipleActionOption';
  items: ActionOption[];
  option_type: string;
};

export type MonsterActionOption = ActionOption | MultipleActionOption;

export type MonsterActionOptionSet = {
  __typename?: 'MonsterActionOptionSet';
  option_set_type: string;
  options: MonsterActionOption[];
};

export type MonsterActionChoice = {
  __typename?: 'MonsterActionChoice';
  choose: number;
  from: MonsterActionOptionSet;
  type: string;
};

export type Action = {
  __typename?: 'Action';
  action_name: string;
  count: number | string;
  type: string;
};

export type Attack = {
  __typename?: 'Attack';
  damage?: Damage[] | null;
  dc: ActionDc;
  name: string;
};

export type DamageOption = {
  __typename?: 'DamageOption';
  damage_dice: string;
  damage_type: DamageType;
  notes?: string | null;
  option_type: string;
};

export type DamageOptionSet = {
  __typename?: 'DamageOptionSet';
  option_set_type: string;
  options: DamageOption[];
};

export type ActionDamage = {
  __typename?: 'ActionDamage';
  choose?: number | null;
  damage_dice?: string | null;
  damage_type?: DamageType | null;
  dc?: ActionDc | null;
  from?: DamageOptionSet | null;
  type?: string | null;
};

export type BreathOption = {
  __typename?: 'BreathOption';
  damage?: Damage[] | null;
  dc: ActionDc;
  name: string;
  option_type: string;
};

export type BreathOptionSet = {
  __typename?: 'BreathOptionSet';
  option_set_type: string;
  options: BreathOption[];
};

export type BreathChoice = {
  __typename?: 'BreathChoice';
  choose: number;
  from: BreathOptionSet;
  type: string;
};

export type MonsterAction = {
  __typename?: 'MonsterAction';
  action_options?: MonsterActionChoice | null;
  actions?: Action[] | null;
  attack_bonus?: number | null;
  attacks?: Attack[] | null;
  damage?: ActionDamage[] | null;
  dc?: ActionDc | null;
  desc: string;
  multiattack_type?: string | null;
  name: string;
  options?: BreathChoice | null;
  usage?: Usage | null;
};

export enum MonsterArmorClassType {
  Armor = 'armor',
  Condition = 'condition',
  Dex = 'dex',
  Natural = 'natural',
  Spell = 'spell',
}

export type MonsterArmorClass = {
  __typename?: 'MonsterArmorClass';
  armor?: Armor[] | null;
  condition?: Condition | null;
  desc?: string | null;
  spell?: Spell | null;
  type: MonsterArmorClassType;
  value: number;
};

export type Monster = {
  __typename?: 'Monster';
  actions?: MonsterAction[] | null;
  alignment: string;
  armor_class?: MonsterArmorClass[] | null;
  challenge_rating: number;
  charisma: number;
  condition_immunities: Condition[];
  constitution: number;
  damage_immunities: string[];
  damage_resistances: string[];
  damage_vulnerabilities: string[];
  desc?: string | null;
  dexterity: number;
  forms?: Monster[] | null;
  hit_dice: string;
  hit_points: number;
  hit_points_roll: string;
  image?: string | null;
  index: string;
  intelligence: number;
  languages: string;
  legendary_actions?: LegendaryAction[] | null;
  name: string;
  proficiencies: MonsterProficiency[];
  proficiency_bonus: number;
  reactions?: Reaction[] | null;
  senses: Senses;
  size: Size;
  special_abilities?: SpecialAbility[] | null;
  speed: MonsterSpeed;
  strength: number;
  subtype?: MonsterSubtype | null;
  type: MonsterType;
  wisdom: number;
  xp: number;
};

export type ProficiencyReferenceOption = {
  __typename?: 'ProficiencyReferenceOption';
  item: Proficiency;
  option_type: string;
};

export type ProficiencyChoiceOption = {
  __typename?: 'ProficiencyChoiceOption';
  choice: ProficiencyChoice;
  option_type: string;
};

export type ProficiencyOption =
  | ProficiencyChoiceOption
  | ProficiencyReferenceOption;

export type ProficiencyOptionSet = {
  __typename?: 'ProficiencyOptionSet';
  option_set_type: string;
  options: ProficiencyOption[];
};

export type ProficiencyChoice = {
  __typename?: 'ProficiencyChoice';
  choose: number;
  desc?: string | null;
  from: ProficiencyOptionSet;
  type: string;
};

export type BreathWeaponDc = {
  __typename?: 'BreathWeaponDc';
  success: DcSuccess;
  type: AbilityScore;
};

export type BreathWeaponUsage = {
  __typename?: 'BreathWeaponUsage';
  times: number;
  type: UsageType;
};

export type BreathWeaponDamage = {
  __typename?: 'BreathWeaponDamage';
  damage_at_character_level: DamageAtLevel[];
  damage_type: DamageType;
};

export type BreathWeaponTrait = {
  __typename?: 'BreathWeaponTrait';
  area_of_effect: AreaOfEffect;
  damage: BreathWeaponDamage[];
  dc: BreathWeaponDc;
  desc: string;
  name: string;
  usage: BreathWeaponUsage;
};

export type SpellOption = {
  __typename?: 'SpellOption';
  item: Spell;
  option_type: string;
};

export type SpellOptionSet = {
  __typename?: 'SpellOptionSet';
  option_set_type: string;
  options: SpellOption[];
};

export type SpellChoice = {
  __typename?: 'SpellChoice';
  choose: number;
  from: SpellOptionSet;
  type: string;
};

export type TraitOption = {
  __typename?: 'TraitOption';
  item: Trait;
  option_type: string;
};

export type TraitOptionSet = {
  __typename?: 'TraitOptionSet';
  option_set_type: string;
  options: TraitOption[];
};

export type TraitChoice = {
  __typename?: 'TraitChoice';
  choose: number;
  from: TraitOptionSet;
  type: string;
};

export type TraitSpecific = {
  __typename?: 'TraitSpecific';
  breath_weapon?: BreathWeaponTrait | null;
  damage_type?: DamageType | null;
  spell_options?: SpellChoice | null;
  subtrait_options?: TraitChoice | null;
};

export type Trait = {
  __typename?: 'Trait';
  desc: string[];
  index: string;
  language_options?: LanguageChoice | null;
  name: string;
  parent?: Trait | null;
  proficiencies: Proficiency[];
  proficiency_choices?: ProficiencyChoice | null;
  races: Race[] | null;
  subraces: Subrace[];
  trait_specific?: TraitSpecific | null;
};

export type AbilityBonus = {
  __typename?: 'AbilityBonus';
  ability_score: AbilityScore;
  bonus: number;
};

export type AbilityBonusOption = {
  __typename?: 'AbilityBonusOption';
  ability_score: AbilityScore;
  bonus: number;
  option_type: string;
};

export type AbilityBonusOptionSet = {
  __typename?: 'AbilityBonusOptionSet';
  option_set_type: string;
  options: AbilityBonusOption[];
};

export type AbilityBonusChoice = {
  __typename?: 'AbilityBonusChoice';
  choose: number;
  from: AbilityBonusOptionSet;
  type: string;
};

export type LanguageOption = {
  __typename?: 'LanguageOption';
  item: Language;
  option_type: string;
};

export type LanguageOptionSet = {
  __typename?: 'LanguageOptionSet';
  option_set_type: string;
  options: LanguageOption[];
};

export type LanguageChoice = {
  __typename?: 'LanguageChoice';
  choose: number;
  from: LanguageOptionSet;
  type: string;
};

export type Race = ProficiencyRace & {
  __typename?: 'Race';
  ability_bonus_options?: AbilityBonusChoice | null;
  ability_bonuses: AbilityBonus[];
  age: string;
  alignment: string;
  index: string;
  language_desc: string;
  language_options?: LanguageChoice | null;
  languages: Language[];
  name: string;
  size: Size;
  size_description: string;
  speed: number;
  starting_proficiencies: Proficiency[];
  starting_proficiency_options?: ProficiencyChoice | null;
  subraces: Subrace[];
  traits: Trait[];
};

export type Subrace = ProficiencyRace & {
  __typename?: 'Subrace';
  ability_bonuses: AbilityBonus[];
  desc: string;
  index: string;
  language_options?: LanguageChoice | null;
  name: string;
  race: Race;
  racial_traits: Trait[];
  starting_proficiencies: Proficiency[];
};

export type ProficiencyRace = {
  ability_bonuses: AbilityBonus[];
  index: string;
  name: string;
};

export type BackgroundFeature = {
  __typename?: 'BackgroundFeature';
  desc: string[];
  name: string;
};

export type EquipmentCategoryOptionSet = {
  __typename?: 'EquipmentCategoryOptionSet';
  equipment_category: EquipmentCategory;
  option_set_type: string;
};

export type EquipmentCategoryChoice = {
  __typename?: 'EquipmentCategoryChoice';
  choose: number;
  from: EquipmentCategoryOptionSet;
  type: string;
};

export type IdealOption = {
  __typename?: 'IdealOption';
  alignments: Alignment[];
  desc: string;
  option_type: string;
};

export type IdealOptionSet = {
  __typename?: 'IdealOptionSet';
  option_set_type: string;
  options: IdealOption[];
};

export type IdealChoice = {
  __typename?: 'IdealChoice';
  choose: number;
  from: IdealOptionSet;
  type: string;
};

export type StringOption = {
  __typename?: 'StringOption';
  option_type: string;
  string: string;
};

export type StringOptionSet = {
  __typename?: 'StringOptionSet';
  option_set_type: string;
  options: StringOption[];
};

export type StringChoice = {
  __typename?: 'StringChoice';
  choose: number;
  from: StringOptionSet;
  type: string;
};

export type Background = {
  __typename?: 'Background';
  bonds: StringChoice;
  feature: BackgroundFeature;
  flaws: StringChoice;
  ideals: IdealChoice;
  index: string;
  language_options: LanguageChoice;
  name: string;
  personality_traits: StringChoice;
  starting_equipment: Quantity[];
  starting_equipment_options: EquipmentCategoryChoice[];
  starting_proficiencies: Proficiency[];
};

export type SpellcastingInfo = {
  __typename?: 'SpellcastingInfo';
  desc: string[];
  name: string;
};

export type ClassSpellcasting = {
  __typename?: 'ClassSpellcasting';
  info: SpellcastingInfo[];
  level: number;
  spellcasting_ability: AbilityScore;
};

export type PrerequisiteOption = {
  __typename?: 'PrerequisiteOption';
  ability_score: AbilityScore;
  minimum_score: number;
  option_type: string;
};

export type PrerequisiteOptionSet = {
  __typename?: 'PrerequisiteOptionSet';
  option_set_type: string;
  options: PrerequisiteOption[];
};

export type PrerequisiteChoice = {
  __typename?: 'PrerequisiteChoice';
  choose: number;
  from: PrerequisiteOptionSet;
  type: string;
};

export type Multiclassing = {
  __typename?: 'Multiclassing';
  prerequisite_options?: PrerequisiteChoice | null;
  prerequisites?: AbilityScorePrerequisite[] | null;
  proficiencies: Proficiency[];
  proficiency_choices?: ProficiencyChoice[] | null;
};

export type ProficiencyPrerequisite = {
  __typename?: 'ProficiencyPrerequisite';
  proficiency: Proficiency;
  type: string;
};

export type CountedReferenceOption = {
  __typename?: 'CountedReferenceOption';
  count: number;
  of: IEquipment;
  option_type: string;
  prerequisites?: ProficiencyPrerequisite[] | null;
};

export type EquipmentCategoryChoiceOption = {
  __typename?: 'EquipmentCategoryChoiceOption';
  choice: EquipmentCategoryChoice;
  option_type: string;
};

export type EquipmentMultipleItem =
  | CountedReferenceOption
  | EquipmentCategoryChoiceOption;

export type EquipmentMultipleOption = {
  __typename?: 'EquipmentMultipleOption';
  items: EquipmentMultipleItem[];
  option_type: string;
};

export type EquipmentOption =
  | CountedReferenceOption
  | EquipmentCategoryChoiceOption
  | EquipmentMultipleOption;

export type EquipmentOptionSet = {
  __typename?: 'EquipmentOptionSet';
  option_set_type: string;
  options: EquipmentOption[];
};

export type StartingEquipmentOptionSet =
  | EquipmentCategoryOptionSet
  | EquipmentOptionSet;

export type StartingEquipmentChoice = {
  __typename?: 'StartingEquipmentChoice';
  choose: number;
  desc: string;
  from: StartingEquipmentOptionSet;
  type: string;
};

export type Class = {
  __typename?: 'Class';
  class_levels: Level[];
  hit_die: number;
  index: string;
  multi_classing: Multiclassing;
  name: string;
  proficiencies: Proficiency[];
  proficiency_choices: ProficiencyChoice[];
  saving_throws: AbilityScore[];
  spellcasting?: ClassSpellcasting | null;
  spells?: Spell[] | null;
  starting_equipment: Quantity[];
  starting_equipment_options: StartingEquipmentChoice[];
  subclasses: Subclass[];
};

export type FeaturePrerequisite = {
  __typename?: 'FeaturePrerequisite';
  feature?: Feature | null;
  level?: number | null;
  spell?: Spell | null;
  type: string;
};

export type FeatureOption = {
  __typename?: 'FeatureOption';
  item: Feature;
  option_type: string;
};

export type FeatureOptionSet = {
  __typename?: 'FeatureOptionSet';
  option_set_type: string;
  options: FeatureOption[];
};

export type FeatureChoice = {
  __typename?: 'FeatureChoice';
  choose: number;
  from: FeatureOptionSet;
  type: string;
};

export type ExpertiseMultipleOption = {
  __typename?: 'ExpertiseMultipleOption';
  items: ProficiencyOption[];
  option_type: string;
};

export type ExpertiseOption =
  | ExpertiseMultipleOption
  | ProficiencyChoiceOption
  | ProficiencyReferenceOption;

export type ExpertiseOptionSet = {
  __typename?: 'ExpertiseOptionSet';
  option_set_type: string;
  options: ExpertiseOption[];
};

export type ExpertiseChoice = {
  __typename?: 'ExpertiseChoice';
  choose: number;
  from: ExpertiseOptionSet;
  type: string;
};

export type FeatureSpecific = {
  __typename?: 'FeatureSpecific';
  expertise_options?: ExpertiseChoice | null;
  invocations?: Feature[] | null;
  subfeature_options?: FeatureChoice | null;
};

export type Feature = {
  __typename?: 'Feature';
  class: Class;
  desc: string[];
  feature_specific?: FeatureSpecific | null;
  index: string;
  level: number;
  name: string;
  parent?: Feature | null;
  prerequisites: FeaturePrerequisite[];
  reference?: string | null;
  subclass?: Subclass | null;
};

export type LevelSpellcasting = {
  __typename?: 'LevelSpellcasting';
  cantrips_known?: number | null;
  spell_slots_level_1?: number | null;
  spell_slots_level_2?: number | null;
  spell_slots_level_3?: number | null;
  spell_slots_level_4?: number | null;
  spell_slots_level_5?: number | null;
  spell_slots_level_6?: number | null;
  spell_slots_level_7?: number | null;
  spell_slots_level_8?: number | null;
  spell_slots_level_9?: number | null;
  spells_known?: number | null;
};

export type Dice = {
  __typename?: 'Dice';
  dice_count: number;
  dice_value: number;
};

export type BarbarianSpecific = {
  __typename?: 'BarbarianSpecific';
  brutal_critical_dice: number;
  rage_count: number;
  rage_damage_bonus: number;
};

export type BardSpecific = {
  __typename?: 'BardSpecific';
  bardic_inspiration_die: number;
  magical_secrets_max_5: number;
  magical_secrets_max_7: number;
  magical_secrets_max_9: number;
  song_of_rest_die: number;
};

export type ClericSpecific = {
  __typename?: 'ClericSpecific';
  channel_divinity_charges: number;
  destroy_undead_cr: number;
};

export type DruidSpecific = {
  __typename?: 'DruidSpecific';
  wild_shape_fly: boolean;
  wild_shape_max_cr: number;
  wild_shape_swim: boolean;
};

export type FighterSpecific = {
  __typename?: 'FighterSpecific';
  action_surges: number;
  extra_attacks: number;
  indomitable_uses: number;
};

export type MonkSpecific = {
  __typename?: 'MonkSpecific';
  ki_points: number;
  martial_arts: Dice;
  unarmored_movement: number;
};

export type PaladinSpecific = {
  __typename?: 'PaladinSpecific';
  aura_range: number;
};

export type RangerSpecific = {
  __typename?: 'RangerSpecific';
  favored_enemies: number;
  favored_terrain: number;
};

export type RogueSpecific = {
  __typename?: 'RogueSpecific';
  sneak_attack: Dice;
};

export type SpellSlotCreation = {
  __typename?: 'SpellSlotCreation';
  sorcery_point_cost: number;
  spell_slot_level: number;
};

export type SorcererSpecific = {
  __typename?: 'SorcererSpecific';
  creating_spell_slots: SpellSlotCreation[];
  metamagic_known: number;
  sorcery_points: number;
};

export type WarlockSpecific = {
  __typename?: 'WarlockSpecific';
  invocations_known: number;
  mystic_arcanum_level_6: number;
  mystic_arcanum_level_7: number;
  mystic_arcanum_level_8: number;
  mystic_arcanum_level_9: number;
};

export type WizardSpecific = {
  __typename?: 'WizardSpecific';
  arcane_recovery_levels: number;
};
export type ClassSpecific =
  | BarbarianSpecific
  | BardSpecific
  | ClericSpecific
  | DruidSpecific
  | FighterSpecific
  | MonkSpecific
  | PaladinSpecific
  | RangerSpecific
  | RogueSpecific
  | SorcererSpecific
  | WarlockSpecific
  | WizardSpecific;

export type DevotionSpecific = {
  __typename?: 'DevotionSpecific';
  aura_range: number;
};

export type LoreSpecific = {
  __typename?: 'LoreSpecific';
  additional_magical_secrets_max_lvl: number;
};

export type SubclassSpecific = DevotionSpecific | LoreSpecific;

export type Level = {
  __typename?: 'Level';
  ability_score_bonuses?: number | null;
  class: Class;
  class_specific?: ClassSpecific | null;
  features: Feature[];
  index: string;
  level: number;
  prof_bonus?: number | null;
  spellcasting?: LevelSpellcasting | null;
  subclass?: Subclass | null;
  subclass_specific?: SubclassSpecific | null;
};

export type SpellPrerequisite = Feature | Level;

export type SpellWithPrerequisite = {
  __typename?: 'SpellWithPrerequisite';
  prerequisites: SpellPrerequisite[] | null;
  spell: Spell;
};

export type Subclass = {
  __typename?: 'Subclass';
  class: Class;
  desc: string[];
  index: string;
  name: string;
  spells?: SpellWithPrerequisite[] | null;
  subclass_flavor: string;
  subclass_levels: Level[] | null;
};

export enum OrderByDirection {
  Ascending = 'ASCENDING',
  Descending = 'DESCENDING',
}

export enum SpellOrderBy {
  AreaOfEffectSize = 'AREA_OF_EFFECT_SIZE',
  Concentration = 'CONCENTRATION',
  Level = 'LEVEL',
  Name = 'NAME',
  Ritual = 'RITUAL',
  School = 'SCHOOL',
}

export enum EquipmentOrderBy {
  EquipmentCategory = 'EQUIPMENT_CATEGORY',
  Name = 'NAME',
  Weight = 'WEIGHT',
}

export enum ClassOrderBy {
  HitDie = 'HIT_DIE',
  Name = 'NAME',
}

export enum MagicItemOrderBy {
  EquipmentCategory = 'EQUIPMENT_CATEGORY',
  Name = 'NAME',
}

export enum EquipmentCategoryOrderBy {
  Name = 'NAME',
  Weight = 'WEIGHT',
}

export enum FeatureOrderBy {
  Class = 'CLASS',
  Level = 'LEVEL',
  Name = 'NAME',
  Subclass = 'SUBCLASS',
}

export enum LanguageOrderBy {
  Name = 'NAME',
  Script = 'SCRIPT',
  Type = 'TYPE',
}

export enum LevelOrderBy {
  AbilityScoreBonuses = 'ABILITY_SCORE_BONUSES',
  Class = 'CLASS',
  Level = 'LEVEL',
  ProfBonus = 'PROF_BONUS',
  Subclass = 'SUBCLASS',
}

export enum MonsterOrderBy {
  ArmorClass = 'ARMOR_CLASS',
  ChallengeRating = 'CHALLENGE_RATING',
  Charisma = 'CHARISMA',
  Constitution = 'CONSTITUTION',
  Dexterity = 'DEXTERITY',
  Intelligence = 'INTELLIGENCE',
  Name = 'NAME',
  Size = 'SIZE',
  Strength = 'STRENGTH',
  Subtype = 'SUBTYPE',
  Type = 'TYPE',
  Wisdom = 'WISDOM',
  Xp = 'XP',
}

export enum ProficiencyOrderBy {
  Name = 'NAME',
  Type = 'TYPE',
}

export enum RaceOrderBy {
  Name = 'NAME',
  Size = 'SIZE',
  Speed = 'SPEED',
}

export enum SkillOrderBy {
  AbilityScore = 'ABILITY_SCORE',
  Name = 'NAME',
}

export type Query = {
  __typename?: 'Query';
  abilityScore?: AbilityScore | null;
  abilityScores?: AbilityScore[] | null;
  alignment?: Alignment | null;
  alignments?: Alignment[] | null;
  background?: Background | null;
  backgrounds: Background[];
  class?: Class | null;
  classes: Class[];
  condition?: Condition | null;
  conditions?: Condition[] | null;
  damageType?: DamageType | null;
  damageTypes?: DamageType[] | null;
  equipment?: IEquipment | null;
  equipmentCategories?: EquipmentCategory[] | null;
  equipmentCategory?: EquipmentCategory | null;
  equipments?: IEquipment[] | null;
  feat?: Feat | null;
  feats?: Feat[] | null;
  feature?: Feature | null;
  features?: Feature[] | null;
  language?: Language | null;
  languages?: Language[] | null;
  level?: Level | null;
  levels?: Level[] | null;
  magicItem?: MagicItem | null;
  magicItems?: MagicItem[] | null;
  magicSchool?: MagicSchool | null;
  magicSchools?: MagicSchool[] | null;
  monster?: Monster | null;
  monsters?: Monster[] | null;
  proficiencies?: Proficiency[] | null;
  proficiency?: Proficiency | null;
  race?: Race | null;
  races: Race[];
  rule?: Rule | null;
  ruleSection?: RuleSection | null;
  ruleSections?: RuleSection[] | null;
  rules?: Rule[] | null;
  skill?: Skill | null;
  skills?: Skill[] | null;
  spell?: Spell | null;
  spells?: Spell[] | null;
  subclass?: Subclass | null;
  subclasses: Subclass[];
  subrace?: Subrace | null;
  subraces: Subrace[];
  trait?: Trait | null;
  traits?: Trait[] | null;
  weaponProperties?: WeaponProperty[] | null;
  weaponProperty?: WeaponProperty | null;
};
