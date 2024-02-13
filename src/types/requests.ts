// CharacterData
export type AbilityScoreRequest = 'cha' | 'con' | 'dex' | 'int' | 'str' | 'wis';

export type AlignmentRequest =
  | 'chaotic-neutral'
  | 'chaotic-evil'
  | 'chaotic-good'
  | 'lawful-neutral'
  | 'lawful-evil'
  | 'lawful-good'
  | 'neutral'
  | 'neutral-evil'
  | 'neutral-good';

export type BackgroundRequest = 'acolyte';

export type LanguageRequest =
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
  | 'undercommon';

//proficiency----------------------------

export type SkillRequest =
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

export type ClassIndexRequest =
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
  index: ClassIndexRequest;
};

export type ClassResourceListRequest = ClassRequest;

export type ClassLevelsRequest = ClassRequest &
  ({subclass?: string} | {class_level: number} | {spell_level: number});

// GameMechanics
export type ConditionRequest =
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
  | 'unconscious';

export type DamageTypeRequest =
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
  | 'thunder';

export type MagicSchoolRequest =
  | 'abjuration'
  | 'conjuration'
  | 'divination'
  | 'enchantment'
  | 'evocation'
  | 'illusion'
  | 'necromancy'
  | 'trasmutation';

//Equipment
export type EquipmentItemRequest =
  | 'Abacus'
  | 'Acid (vial)'
  | "Alchemist's fire (flask)"
  | "Alchemist's Supplies"
  | 'Alms box'
  | 'Amulet'
  | 'Animal Feed (1 day)'
  | 'Antitoxin (vial)'
  | 'Arrow'
  | 'Backpack'
  | 'Bagpipes'
  | 'Ball bearings (bag of 1,000)'
  | 'Barding: Breastplate'
  | 'Barding: Chain mail'
  | 'Barding: Chain shirt'
  | 'Barding: Half plate'
  | 'Barding: Hide'
  | 'Barding: Leather'
  | 'Barding: Padded'
  | 'Barding: Plate'
  | 'Barding: Ring mail'
  | 'Barding: Scale mail'
  | 'Barding: Splint'
  | 'Barding: Studded Leather'
  | 'Barrel'
  | 'Basket'
  | 'Battleaxe'
  | 'Bedroll'
  | 'Bell'
  | 'Bit and bridle'
  | 'Blanket'
  | 'Block and tackle'
  | 'Block of incense'
  | 'Blowgun'
  | 'Blowgun needle'
  | 'Book'
  | 'Bottle, glass'
  | 'Breastplate'
  | "Brewer's Supplies"
  | 'Bucket'
  | "Burglar's Pack"
  | "Calligrapher's Supplies"
  | 'Caltrops'
  | 'Camel'
  | 'Candle'
  | "Carpenter's Tools"
  | 'Carriage'
  | 'Cart'
  | "Cartographer's Tools"
  | 'Case, crossbow bolt'
  | 'Case, map or scroll'
  | 'Censer'
  | 'Chain (10 feet)'
  | 'Chain Mail'
  | 'Chain Shirt'
  | 'Chalk (1 piece)'
  | 'Chariot'
  | 'Chest'
  | "Climber's Kit"
  | 'Clothes, common'
  | 'Clothes, costume'
  | 'Clothes, fine'
  | "Clothes, traveler's"
  | 'Club'
  | "Cobbler's Tools"
  | 'Component pouch'
  | "Cook's utensils"
  | 'Crossbow bolt'
  | 'Crossbow, hand'
  | 'Crossbow, heavy'
  | 'Crossbow, light'
  | 'Crowbar'
  | 'Crystal'
  | 'Dagger'
  | 'Dart'
  | 'Dice Set'
  | "Diplomat's Pack"
  | 'Disguise Kit'
  | 'Donkey'
  | 'Drum'
  | 'Dulcimer'
  | "Dungeoneer's Pack"
  | 'Elephant'
  | 'Emblem'
  | "Entertainer's Pack"
  | "Explorer's Pack"
  | 'Fishing tackle'
  | 'Flail'
  | 'Flask or tankard'
  | 'Flute'
  | 'Forgery Kit'
  | 'Galley'
  | 'Glaive'
  | "Glassblower's Tools"
  | 'Grappling hook'
  | 'Greataxe'
  | 'Greatclub'
  | 'Greatsword'
  | 'Halberd'
  | 'Half Plate Armor'
  | 'Hammer'
  | 'Hammer, sledge'
  | 'Handaxe'
  | "Healer's Kit"
  | 'Herbalism Kit'
  | 'Hide Armor'
  | 'Holy water (flask)'
  | 'Horn'
  | 'Horse, draft'
  | 'Horse, riding'
  | 'Hourglass'
  | 'Hunting trap'
  | 'Ink (1 ounce bottle)'
  | 'Ink pen'
  | 'Javelin'
  | "Jeweler's Tools"
  | 'Jug or pitcher'
  | 'Keelboat'
  | 'Ladder (10-foot)'
  | 'Lamp'
  | 'Lance'
  | 'Lantern, bullseye'
  | 'Lantern, hooded'
  | 'Leather Armor'
  | "Leatherworker's Tools"
  | 'Light hammer'
  | 'Little bag of sand'
  | 'Lock'
  | 'Longbow'
  | 'Longship'
  | 'Longsword'
  | 'Lute'
  | 'Lyre'
  | 'Mace'
  | 'Magnifying glass'
  | 'Manacles'
  | "Mason's Tools"
  | 'Mastiff'
  | 'Maul'
  | 'Mess Kit'
  | 'Mirror, steel'
  | 'Morningstar'
  | 'Mule'
  | "Navigator's Tools"
  | 'Net'
  | 'Oil (flask)'
  | 'Orb'
  | 'Padded Armor'
  | "Painter's Supplies"
  | 'Pan flute'
  | 'Paper (one sheet)'
  | 'Parchment (one sheet)'
  | 'Perfume (vial)'
  | "Pick, miner's"
  | 'Pike'
  | 'Piton'
  | 'Plate Armor'
  | 'Playing Card Set'
  | 'Poison, basic (vial)'
  | "Poisoner's Kit"
  | 'Pole (10-foot)'
  | 'Pony'
  | 'Pot, iron'
  | "Potter's Tools"
  | 'Pouch'
  | "Priest's Pack"
  | 'Quarterstaff'
  | 'Quiver'
  | 'Ram, portable'
  | 'Rapier'
  | 'Rations (1 day)'
  | 'Reliquary'
  | 'Ring Mail'
  | 'Robes'
  | 'Rod'
  | 'Rope, hempen (50 feet)'
  | 'Rope, silk (50 feet)'
  | 'Rowboat'
  | 'Sack'
  | 'Saddle, Exotic'
  | 'Saddle, Military'
  | 'Saddle, Pack'
  | 'Saddle, Riding'
  | 'Saddlebags'
  | 'Sailing ship'
  | 'Scale Mail'
  | "Scale, merchant's"
  | "Scholar's Pack"
  | 'Scimitar'
  | 'Sealing wax'
  | 'Shawm'
  | 'Shield'
  | 'Shortbow'
  | 'Shortsword'
  | 'Shovel'
  | 'Sickle'
  | 'Signal whistle'
  | 'Signet ring'
  | 'Sled'
  | 'Sling'
  | 'Sling bullet'
  | 'Small knife'
  | "Smith's Tools"
  | 'Soap'
  | 'Spear'
  | 'Spellbook'
  | 'Spike, iron'
  | 'Splint Armor'
  | 'Sprig of mistletoe'
  | 'Spyglass'
  | 'Stabling (1 day)'
  | 'Staff'
  | 'String (10 feet)'
  | 'Studded Leather Armor'
  | 'Tent, two-person'
  | "Thieves' Tools"
  | 'Tinderbox'
  | "Tinker's Tools"
  | 'Torch'
  | 'Totem'
  | 'Trident'
  | 'Vestments'
  | 'Vial'
  | 'Viol'
  | 'Wagon'
  | 'Wand'
  | 'War pick'
  | 'Warhammer'
  | 'Warhorse'
  | 'Warship'
  | 'Waterskin'
  | "Weaver's Tools"
  | 'Whetstone'
  | 'Whip'
  | "Woodcarver's Tools"
  | 'Wooden staff'
  | 'Yew wand';

export type EquipmentCategoryRequest = ''; //non li trovo, vuole il nome

export type MagicItemRequest = ''; //non li trovo, vuole il nome

export type WeaponPropertyRequest =
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

//Rules
export type RuleSectionRequest =
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
  | 'what-is-a-spell';

export type RuleRequest =
  | 'adventuring'
  | 'appendix'
  | 'combat'
  | 'equipment'
  | 'spellcasting'
  | 'using-ability-scores';

export type SpellsRequest =
  //per list of spells-------------------------
  | {level?: number[]; school?: string[]}
  //per spell----------------------------------
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

//Subclasses
export type Subclass =
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

export type SubclassRequest = {
  index: Subclass;
  subclass_level: number;
}; //subclasses level & features of a spell level of a class---

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
