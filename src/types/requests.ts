export type CharacterData =
  //ability score--------------------------
  | 'cha'
  | 'con'
  | 'dex'
  | 'int'
  | 'str'
  | 'wis'

  //alignment------------------------------
  | 'chaotic-neutral'
  | 'chaotic-evil'
  | 'chaotic-good'
  | 'lawful-neutral'
  | 'lawful-evil'
  | 'lawful-good'
  | 'neutral'
  | 'neutral-evil'
  | 'neutral-good'

  //background-----------------------------
  | 'acolyte'

  //language-------------------------------
  | 'abyssal'
  | 'celestial'
  | 'common'
  | 'deep-speech'
  | 'draconic'
  | 'dwarvish'
  | 'elvish'
  | 'giant'
  | 'gnomish'
  | 'goblin'
  | 'halfling'
  | 'infernal'
  | 'orc'
  | 'primordial'
  | 'sylvan'
  | 'undercommon'

  //proficiency----------------------------

  //skill----------------------------------
  | 'acrobatics'
  | 'animal-handling'
  | 'arcana'
  | 'athletics'
  | 'deception'
  | 'history'
  | 'insight'
  | 'intimidation'
  | 'investigation'
  | 'medicine'
  | 'nature'
  | 'perception'
  | 'performance'
  | 'persuasion'
  | 'religion'
  | 'sleight-of-hand'
  | 'stealth'
  | 'survival';

export type ClassIndex =
  | 'barbarian'
  | 'bard'
  | 'cleric'
  | 'druid'
  | 'fighter'
  | 'monk'
  | 'paladin'
  | 'ranger'
  | 'rogue'
  | 'sorcerer'
  | 'warlock'
  | 'wizard';

export type ClassRequest = {
  index: ClassIndex;
};

export type ClassResourceListRequest = ClassRequest;

export type ClassLevelsRequest = ClassRequest &
  ({subclass?: string} | {class_level: number} | {spell_level: number});

export type GameMechanicsRequest =
  //condition------------------------------
  | 'blinded'
  | 'charmed'
  | 'deafened'
  | 'exhaustion'
  | 'frightened'
  | 'grappled'
  | 'incapacitated'
  | 'invisible'
  | 'paralyzed'
  | 'petrified'
  | 'poisoned'
  | 'prone'
  | 'restrained'
  | 'stunned'
  | 'unconscious'

  //damage type----------------------------
  | 'acid'
  | 'bludgeoning'
  | 'cold'
  | 'fire'
  | 'force'
  | 'lightning'
  | 'necrotic'
  | 'piercing'
  | 'poison'
  | 'psychic'
  | 'radiant'
  | 'slashing'
  | 'thunder'

  //magic school---------------------------
  | 'abjuration'
  | 'conjuration'
  | 'divination'
  | 'enchantment'
  | 'evocation'
  | 'illusion'
  | 'necromancy'
  | 'trasmutation';

export type EquipmentRequest =
  //equipment item-------------------------
  | '' //non li trovo, vuole il nome dell'item

  //equipment category---------------------
  | '' //non li trovo, vuole il nome

  //magic item-----------------------------
  | '' //non li trovo, vuole il nome

  //weapon property------------------------
  | 'ammunition'
  | 'finesse'
  | 'heavy'
  | 'light'
  | 'loading'
  | 'monk'
  | 'reach'
  | 'special'
  | 'thrown'
  | 'two-handed'
  | 'versatile';

export type FeatsRequest = 'grappler';

export type FeaturesRequest = ''; //non le trovo, vuole il nome

export type MonstersRequest = {index: string} | {challenge_rating?: number[]}; // list of monsters

export type RacesRequest =
  | 'dragonborn'
  | 'dwarf'
  | 'elf'
  | 'gnome'
  | 'half-elf'
  | 'half-orc'
  | 'halfling'
  | 'human'
  | 'tiefling';

export type RulesRequest =
  //rule section---------------------------
  | 'ability-checks'
  | 'ability-scores-and-modifiers'
  | 'actions-in-combat'
  | 'activating-an-item'
  | 'advantage-and-disadvantage'
  | 'attunement'
  | 'between-adventures'
  | 'casting-a-spell'
  | 'cover'
  | 'damage-and-healing'
  | 'diseases'
  | 'fantasy-historical-pantheons'
  | 'madness'
  | 'making-an-attack'
  | 'mounted-combat'
  | 'movement'
  | 'movement-and-position'
  | 'objects'
  | 'poisons'
  | 'proficiency-bonus'
  | 'resting'
  | 'saving-throws'
  | 'sentient-magic-items'
  | 'standard-exchange-rates'
  | 'the-environment'
  | 'the-order-of-combat'
  | 'the-planes-of-existence'
  | 'time'
  | 'traps'
  | 'underwater-combat'
  | 'using-each-ability'
  | 'wearing-and-wielding-items'
  | 'what-is-a-spell'

  //rule-----------------------------------
  | 'adventuring'
  | 'appendix'
  | 'combat'
  | 'equipment'
  | 'spellcasting'
  | 'using-ability-scores';

export type SpellsRequest =
  //list of spells-------------------------
  | ({level?: number[]} & {school?: string[]})

  //spell----------------------------------
  | {
      index:
        | 'ability-scores'
        | 'alignments'
        | 'backgrounds'
        | 'classes'
        | 'conditions'
        | 'damage-types'
        | 'equipment'
        | 'equipment-categories'
        | 'feats'
        | 'features'
        | 'languages'
        | 'magic-items'
        | 'magic-schools'
        | 'monsters'
        | 'proficiencies'
        | 'races'
        | 'rule-sections'
        | 'rules'
        | 'skills'
        | 'spells'
        | 'subclasses'
        | 'subraces'
        | 'traites'
        | 'weapon-properties';
    };

export type SubclassesRequest =
  //subclass/ features/ level resources----
  {
    index:
      | 'berserker'
      | 'champion'
      | 'devotion'
      | 'draconic'
      | 'evocation'
      | 'fiend'
      | 'hunter'
      | 'land'
      | 'life'
      | 'lore'
      | 'open-hand'
      | 'thief';
  } & {subclass_level: number}; //subclasses level & features of a spell level of a class---

export type SubracesRequest =
  | 'high-elf'
  | 'hill-dwarf'
  | 'lightfoot-halfling'
  | 'rock-gnome';

export type TraitsRequest =
  | 'artificers-lore'
  | 'brave'
  | 'breath-weapon'
  | 'damage-resistance'
  | 'darkvision'
  | 'draconic-ancestry'
  | 'draconic-ancestry-black'
  | 'draconic-ancestry-blue'
  | 'draconic-ancestry-brass'
  | 'draconic-ancestry-bronze'
  | 'draconic-ancestry-copper'
  | 'draconic-ancestry-gold'
  | 'draconic-ancestry-green'
  | 'draconic-ancestry-red'
  | 'draconic-ancestry-silver'
  | 'draconic-ancestry-white'
  | 'dwarven-combat-training'
  | 'dwarven-resilience'
  | 'dwarven-toughness'
  | 'elf-weapon-training'
  | 'extra-language'
  | 'fey-ancestry'
  | 'gnome-cunning'
  | 'halfling-nimbleness'
  | 'hellish-resistance'
  | 'high-elf-cantrip'
  | 'infernal-legacy'
  | 'keen-senses'
  | 'lucky'
  | 'menacing'
  | 'naturally-stealthy'
  | 'relentless-endurance'
  | 'savage-attacks'
  | 'skill-versatility'
  | 'stonecunning'
  | 'tinker'
  | 'tool-proficiency'
  | 'trance';
