import {
  NativeStackScreenProps,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import {
  ClassIndexRequest,
  ConditionRequest,
  DamageTypeRequest,
  MagicSchoolRequest,
} from '../types/requests';
import {Class} from '../types/responses';
import {CompositeScreenProps} from '@react-navigation/native';
import {RootTabScreenProps, RootTabParamList} from './RootParamList';

export type DictionaryStackParamList = {
  Dictionary: undefined;
  //--
  ClassD: undefined;
  //DictionaryClass: {className: ClassIndexRequest};
  //--
  ClassResourceListD: undefined;
  DictionaryClassResourceList: {className: ClassIndexRequest};
  //--
  ClassLevelsD: undefined;
  DictionaryClassLevels: {
    classInfo: Class;
    classLevel: number;
    spellLevel: number;
  };
  //--
  GameMechanicsD: undefined;
  DictionaryGameMechanics: {
    condition: ConditionRequest;
    damageType: DamageTypeRequest;
    magicSchool: MagicSchoolRequest;
  };

  // ...
};

export type DictionaryStackScreenProps<
  T extends keyof DictionaryStackParamList,
> = CompositeScreenProps<
  NativeStackScreenProps<DictionaryStackParamList, T>,
  RootTabScreenProps<keyof RootTabParamList>
>;
