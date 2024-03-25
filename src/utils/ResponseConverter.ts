import {ClassSpellcasting as ClassSpellcastingResponse} from '../types/responses';
import {ClassSpellcasting} from '../types/types';

class ResponseConverter {
  constructor() {}

  static classSpellCasting(
    response: ClassSpellcastingResponse,
  ): ClassSpellcasting {
    const spellInfo = response.info.map(value => {
      return {
        name: value.name,
        desc: value.desc.join('\n'),
      };
    });

    const spellAbility = response.spellcasting_ability.desc.join('\n');

    return {
      info: response.info,
      spellcasting_ability: response.spellcasting_ability,
      level: response.level,
    };
  }
}
