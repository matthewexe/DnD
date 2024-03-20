import {
  ClassIndexRequest,
  ConditionRequest,
  DamageTypeRequest,
  MagicSchoolRequest,
} from '../types/requests';
import {Class} from '../types/responses';

type DictionaryStackParamList = {
  Class: {className: ClassIndexRequest};
  ClassResourceList: {className: ClassIndexRequest};
  ClassLevels: {classInfo: Class; classLevel: number; spellLevel: number};
  GameMechanics: {
    condition: ConditionRequest;
    damageType: DamageTypeRequest;
    magicSchool: MagicSchoolRequest;
  };

  // ...
};
