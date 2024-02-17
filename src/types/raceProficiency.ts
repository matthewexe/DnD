interface Proficiency {
  index: string;
  name: string;
  url: string;
}

interface ProficiencyOption {
  option_type: string;
  item: Proficiency;
}

interface StartingProficiencyOptions {
  desc: string;
  choose: number;
  type: string;
  from: {
    option_set_type: string;
    options: ProficiencyOption[];
  };
}

interface Data {
  starting_proficiencies?: Proficiency[];
  starting_proficiency_options?: StartingProficiencyOptions;
}
