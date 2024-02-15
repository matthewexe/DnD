// type Classe =
//   | 'barbarian'
//   | 'bard'
//   | 'cleric'
//   | 'druid'
//   | 'fighter'
//   | 'monk'
//   | 'paladin'
//   | 'ranger'
//   | 'rogue'
//   | 'sorcerer'
//   | 'warlock'
//   | 'wizard';

//  Caratteristiche = ['forza', 'destrezza', 'costituzione', 'intelligenza', 'saggezza', 'carisma'];

//  ordineCaratteristichePerClasse
//   'barbarian': ['forza', 'costituzione', 'destrezza', 'saggezza', 'carisma', 'intelligenza'],
//   'bard': ['carisma', 'destrezza', 'saggezza', 'intelligenza', 'costituzione', 'forza'],
//   'cleric': ['saggezza', 'costituzione', 'intelligenza', 'forza', 'destrezza', 'carisma'],
//   'druid': ['saggezza', 'intelligenza', 'costituzione', 'destrezza', 'forza', 'carisma'],
//   'fighter': ['forza', 'destrezza', 'costituzione', 'saggezza', 'intelligenza', 'carisma'],
//   'monk': ['destrezza', 'saggezza', 'costituzione', 'forza', 'intelligenza', 'carisma'],
//   'paladin': ['forza', 'carisma', 'saggezza', 'costituzione', 'destrezza', 'intelligenza'],
//   'ranger': ['destrezza', 'saggezza', 'costituzione', 'forza', 'intelligenza', 'carisma'],
//   'rogue': ['destrezza', 'carisma', 'saggezza', 'intelligenza', 'forza', 'costituzione'],
//   'sorcerer': ['carisma', 'intelligenza', 'saggezza', 'destrezza', 'costituzione', 'forza'],
//   'warlock': ['carisma', 'intelligenza', 'saggezza', 'destrezza', 'forza', 'costituzione'],
//   'wizard': ['intelligenza', 'saggezza', 'costituzione', 'destrezza', 'carisma', 'forza'],

function organizzaCaratteristiche(classe: Classe, input: number[]) {
  const output: number[] = [];
  //NB i nueri casuali sono ordinati in modo DECRESCENTE 9,8,7,6,5...
  switch (classe) {
    case 'barbarian':
      //ORDINE DESIDERATO(input)--> 'barbarian': ['forza', 'costituzione', 'destrezza', 'saggezza', 'carisma', 'intelligenza'],
      //ORDINE IMPARTITO(output)-->[0]forza, [1]destrezza, [2]costituzione, [3]intelligenza, [4]saggezza, [5]carisma
      output[0] = input[0];
      output[1] = input[2];
      output[2] = input[1];
      output[3] = input[5];
      output[4] = input[3];
      output[5] = input[4];
      break;
    case 'bard':
      //ORDINE DESIDERATO(input)--> 'bard': ['carisma', 'destrezza', 'saggezza', 'intelligenza', 'costituzione', 'forza'],
      //ORDINE IMPARTITO(output)-->[0]forza, [1]destrezza, [2]costituzione, [3]intelligenza, [4]saggezza, [5]carisma
      output[0] = input[5];
      output[1] = input[2];
      output[2] = input[1];
      output[3] = input[0];
      output[4] = input[3];
      output[5] = input[4];
      break;
    case 'cleric':
      output[0] = input[3];
      output[1] = input[2];
      output[2] = input[4];
      output[3] = input[5];
      output[4] = input[0];
      output[5] = input[1];
      break;
    case 'druid':
      output[0] = input[4];
      output[1] = input[3];
      output[2] = input[2];
      output[3] = input[5];
      output[4] = input[0];
      output[5] = input[1];
      break;
    case 'fighter':
      output[0] = input[0];
      output[1] = input[2];
      output[2] = input[1];
      output[3] = input[5];
      output[4] = input[4];
      output[5] = input[3];
      break;
    case 'monk':
      output[0] = input[2];
      output[1] = input[4];
      output[2] = input[3];
      output[3] = input[5];
      output[4] = input[1];
      output[5] = input[0];
      break;
    case 'paladin':
      output[0] = input[0];
      output[1] = input[5];
      output[2] = input[3];
      output[3] = input[1];
      output[4] = input[2];
      output[5] = input[4];
      break;
    case 'ranger':
      output[0] = input[2];
      output[1] = input[4];
      output[2] = input[3];
      output[3] = input[5];
      output[4] = input[0];
      output[5] = input[1];
      break;
    case 'rogue':
      output[0] = input[2];
      output[1] = input[5];
      output[2] = input[3];
      output[3] = input[4];
      output[4] = input[0];
      output[5] = input[1];
      break;
    case 'sorcerer':
      output[0] = input[5];
      output[1] = input[3];
      output[2] = input[2];
      output[3] = input[1];
      output[4] = input[4];
      output[5] = input[0];
      break;
    case 'warlock':
      output[0] = input[5];
      output[1] = input[3];
      output[2] = input[2];
      output[3] = input[1];
      output[4] = input[0];
      output[5] = input[4];
      break;
    case 'wizard':
      output[0] = input[4];
      output[1] = input[5];
      output[2] = input[0];
      output[3] = input[1];
      output[4] = input[3];
      output[5] = input[2];
      break;
  }

  //   const ordineCaratteristiche = ordineCaratteristichePerClasse[classe];
  //   const caratteristiche: Record<Caratteristiche[number], number> = {} as any;
  //   ordineCaratteristiche.forEach((caratteristica, indice) => {
  //     caratteristiche[caratteristica] = numeriCasualiOrdinati[indice];
} //);
//   return caratteristiche;
// }

// Esempio di utilizzo
const numeriCasualiOrdinati = ordinaArrayNumeriCasuali();
const caratteristicheBarbarian = organizzaCaratteristiche(
  'barbarian',
  numeriCasualiOrdinati,
);
//console.log(caratteristicheBarbarian);
