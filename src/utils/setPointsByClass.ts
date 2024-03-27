type Classe =
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
type Caratteristica =
  | 'forza'
  | 'destrezza'
  | 'costituzione'
  | 'intelligenza'
  | 'saggezza'
  | 'carisma';

export function assegnaCaratteristiche(
  input: number[],
  classe: Classe,
): number[] {
  const ordineCaratteristichePerClasse: Record<Classe, Caratteristica[]> = {
    barbarian: [
      'forza',
      'costituzione',
      'destrezza',
      'saggezza',
      'carisma',
      'intelligenza',
    ],
    bard: [
      'carisma',
      'destrezza',
      'saggezza',
      'intelligenza',
      'costituzione',
      'forza',
    ],
    cleric: [
      'saggezza',
      'costituzione',
      'intelligenza',
      'forza',
      'destrezza',
      'carisma',
    ],
    druid: [
      'saggezza',
      'intelligenza',
      'costituzione',
      'destrezza',
      'forza',
      'carisma',
    ],
    fighter: [
      'forza',
      'destrezza',
      'costituzione',
      'saggezza',
      'intelligenza',
      'carisma',
    ],
    monk: [
      'destrezza',
      'saggezza',
      'costituzione',
      'forza',
      'intelligenza',
      'carisma',
    ],
    paladin: [
      'forza',
      'carisma',
      'saggezza',
      'costituzione',
      'destrezza',
      'intelligenza',
    ],
    ranger: [
      'destrezza',
      'saggezza',
      'costituzione',
      'forza',
      'intelligenza',
      'carisma',
    ],
    rogue: [
      'destrezza',
      'carisma',
      'saggezza',
      'intelligenza',
      'forza',
      'costituzione',
    ],
    sorcerer: [
      'carisma',
      'intelligenza',
      'saggezza',
      'destrezza',
      'costituzione',
      'forza',
    ],
    warlock: [
      'carisma',
      'intelligenza',
      'saggezza',
      'destrezza',
      'forza',
      'costituzione',
    ],
    wizard: [
      'intelligenza',
      'saggezza',
      'costituzione',
      'destrezza',
      'carisma',
      'forza',
    ],
  };

  const ordineDesiderato = ordineCaratteristichePerClasse[classe];
  const output: number[] = ordineDesiderato.map(caratteristica => {
    const indice = [
      'forza',
      'destrezza',
      'costituzione',
      'intelligenza',
      'saggezza',
      'carisma',
    ].indexOf(caratteristica);
    return input[indice];
  });

  return output;
}
