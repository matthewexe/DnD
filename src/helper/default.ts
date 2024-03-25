import {PlayerModel} from '../models/types';
import {calculateModifier} from '../utils/calculateModifier';

export const defaultPlayer = (): PlayerModel => {
  const ability_scores = assegnaCaratteristiche(
    ordinaArrayNumeriCasuali(),
    'barbarian',
  );

  return {
    ability_choices: [],
    ability_scores: ability_scores,
    alignment: 'chaotic-evil',
    armor: [],
    background: '',
    ca: 0,
    character_name: 'NPC',
    class: 'barbarian',
    experience: 0,
    features: [],
    hit_die: 12,
    languages: [],
    level: 1,
    money: Array<number>(5).fill(0),
    player_name: 'NPC',
    proficiencies: [],
    ps: 12 + calculateModifier(ability_scores[2]), // TODO: punti salute
    race: 'dragonborn',
    saving_throws: [], // FIXME: less
    speed: 30,
    spells: [], //
    subclass: 'berserker',
    subrace: 'high-elf',
    traits: [],
    weapon: [{index: 'greataxe', quantity: 1}],
  };
};
