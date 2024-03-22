import {
  APIReference,
  ProficiencyOption,
  ProficiencyReference,
  ProficiencyReferenceOption,
} from '../types/responses';

export namespace ApiFieldsAdapter {
  export function proficiencyToAPIReference(
    choices: ProficiencyOption[],
  ): APIReference[] {
    return choices
      .map(proficiencyChoices)
      .reduce((prev, cur) => prev.concat(cur));
  }

  export function proficiencyChoices(
    choice: ProficiencyOption,
  ): APIReference[] {
    if (choice.__typename === 'ProficiencyChoiceOption') {
      return choice.choice.from.options
        .map(value => proficiencyChoices(value))
        .reduce((prev, cur) => prev.concat(cur));
    }

    const adapted = choice as ProficiencyReferenceOption;
    return [
      {
        index: adapted.item.index,
        name: adapted.item.name,
        url: `/api/proficiencies/${adapted.item.index}`,
      },
    ];
  }

  export function proficiencyReferenceToAPIReference(
    proficiency: ProficiencyReference,
  ): APIReference & {type: string} {
    return {
      index: proficiency.index,
      name: proficiency.name,
      type: proficiency.__typename ?? '',
    };
  }
}
