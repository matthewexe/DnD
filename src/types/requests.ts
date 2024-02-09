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
