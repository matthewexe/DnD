import {PlayerModel} from '../models/types';

export const defaultPlayer = (): PlayerModel => {
  return {
    ability_choices: [],
    ability_scores: Array<number>(6).fill(0),
    alignment: 'chaotic-evil',
    armor: [],
    background: '',
    ca: 0,
    character_name: 'NPC',
    class: 'barbarian',
    experience: 0,
    features: [],
    hit_die: 0, // TODO: hit_die
    languages: [],
    level: 1,
    money: Array<number>(5).fill(0),
    player_name: 'NPC',
    proficiencies: [],
    ps: 0, // TODO: punti salute
    race: 'dragonborn',
    saving_throws: [], // TODO: non so cosa ci vada
    speed: 1, // TODO: non so cosa ci vada
    spells: [], //
    subclass: 'berserker',
    subrace: 'high-elf',
    traits: [],
    weapon: [],
  };
};
