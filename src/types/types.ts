import {Cost, EquipmentCategory, Skill} from './responses';

export type IEquipment = {
  cost: Cost;
  equipment_category: EquipmentCategory;
  index: string;
  name: string;
};

export type IEquipmentBase = {
  equipment_category: EquipmentCategory;
  index: string;
  name: string;
};

export type Tool = IEquipment &
  IEquipmentBase & {
    __typename?: 'Tool';
    cost: Cost;
    equipment_category: EquipmentCategory;
    index: string;
    name: string;
    tool_category: EquipmentCategory;
  };

export type SpellcastingInfo = {
  __typename?: 'SpellcastingInfo';
  desc: string;
  name: string;
};

export type AbilityScore = {
  __typename?: 'AbilityScore';
  desc: string;
  index: string;
  name: string;
};

export type ClassSpellcasting = {
  __typename?: 'ClassSpellcasting';
  info: SpellcastingInfo[];
  level: number;
  spellcasting_ability: AbilityScore;
};
