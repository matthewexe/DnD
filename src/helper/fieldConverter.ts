import {CountedReference} from '../components/options/Options';
import {
  CountedReferenceOption,
  EquipmentCategoryChoiceOption,
  EquipmentCategoryOptionSet,
  EquipmentMultipleItem,
  EquipmentMultipleOption,
  EquipmentOption,
  EquipmentOptionSet,
  ProficiencyChoiceOption,
  ProficiencyOption,
  ProficiencyReferenceOption,
  StartingEquipmentOptionSet,
} from '../types/responses';

export function rangeFieldToNumber(value: string): number {
  return parseInt(value.replace(/\D+/g, ''), 10);
}

export function rangeFieldToMeterField(value: string): string {
  const toNumber = rangeFieldToNumber(value);
  if (isNaN(toNumber)) {
    return value;
  }
  return `${toNumber} meters`;
}

export function objectReducer<T extends object, V>(
  object: T,
  transformKey: (key: string) => string,
  transformValue: (value: V) => string | undefined,
  separator: string = ': ',
): string[] {
  const fieldArray: string[] = [];

  for (const key in object) {
    const value = object[key as keyof T] as V;
    const newKey = transformKey(key);
    const newValue = transformValue(value);

    if (newValue) {
      fieldArray.push(`${newKey}${separator}${newValue}`);
    }
  }

  return fieldArray;
}

export namespace EquipmentConverter {
  export function startingEquipmentOptionSetToCountedReferences(
    options: StartingEquipmentOptionSet,
  ): CountedReference[] {
    if (options.option_set_type === 'equipment_category') {
      return [
        equipmentCategoryOptionSetToCountedReferences(
          options as EquipmentCategoryOptionSet,
        ),
      ];
    } else if (options.option_set_type === 'options_array') {
      return equipmentOptionSetToCountedReferences(
        options as EquipmentOptionSet,
      );
    }

    return [];
  }

  function equipmentCategoryOptionSetToCountedReferences(
    option: EquipmentCategoryOptionSet,
  ): CountedReference {
    return {
      index: option.equipment_category.index,
      name: option.equipment_category.name,
      quantity: 1,
    };
  }

  function equipmentOptionSetToCountedReferences(
    option: EquipmentOptionSet,
  ): CountedReference[] {
    return option.options
      .map(value => equipmentOptionToCountedReference(value))
      .flat();
  }

  function APICountedReferenceToCountedReference(
    apiRef: CountedReferenceOption,
  ): CountedReference {
    return {
      index: apiRef.of.index,
      name: apiRef.of.name,
      quantity: apiRef.count,
    };
  }

  function equipmentCategoryChoiceOptionToCountedReference(
    option: EquipmentCategoryChoiceOption,
  ): CountedReference {
    return equipmentCategoryOptionSetToCountedReferences(option.choice.from);
  }

  function equipmentMultipleItemToCountedReference(
    item: EquipmentMultipleItem,
  ): CountedReference {
    if (item.option_type === 'counted_reference') {
      return APICountedReferenceToCountedReference(
        item as CountedReferenceOption,
      );
    }

    return equipmentCategoryChoiceOptionToCountedReference(
      item as EquipmentCategoryChoiceOption,
    );
  }

  function equipmentOptionToCountedReference(
    option: EquipmentOption,
  ): CountedReference[] {
    if (option.option_type === 'counted_reference') {
      return [
        APICountedReferenceToCountedReference(option as CountedReferenceOption),
      ];
    } else if (option.option_type === 'choice') {
      return [
        equipmentCategoryChoiceOptionToCountedReference(
          option as EquipmentCategoryChoiceOption,
        ),
      ];
    }
    return (option as EquipmentMultipleOption).items.map(value =>
      equipmentMultipleItemToCountedReference(value),
    );
  }
}

export namespace ProficiencyConverter {
  export type NamedReference = {
    name: string;
    index: string;
  };

  export function ProficiencyChoiceOptionToIndex(
    option: ProficiencyChoiceOption,
  ): NamedReference[] {
    return option.choice.from.options
      .map(value => ProficiencyOptionToIndex(value))
      .flat();
  }

  export function ProficiencyReferenceOptionToIndex(
    reference: ProficiencyReferenceOption,
  ): NamedReference[] {
    return [
      {
        index: reference.item.index,
        name: reference.item.name,
      },
    ];
  }

  export function ProficiencyOptionToIndex(
    option: ProficiencyOption,
  ): NamedReference[] {
    if (option.option_type === 'choice') {
      return ProficiencyChoiceOptionToIndex(option as ProficiencyChoiceOption);
    }
    return ProficiencyReferenceOptionToIndex(
      option as ProficiencyReferenceOption,
    );
  }

  export function ProficiencyOptionsToIndex(
    options: ProficiencyOption[],
  ): NamedReference[] {
    const result = options.map(value => ProficiencyOptionToIndex(value)).flat();
    // console.log(result);
    return result;
  }
}

export namespace APIIndexes {}
