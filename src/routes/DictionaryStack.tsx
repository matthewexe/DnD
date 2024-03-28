import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {
  ConditionRequest,
  DamageTypeRequest,
  MagicSchoolRequest,
} from '../types/requests';
import {Class} from '../types/responses';
import {CompositeScreenProps} from '@react-navigation/native';
import {RootTabScreenProps, RootParamList} from './RootProps';

export type DictionaryStackParamList = {
  Dictionary: undefined;
  //--
  AbilityScoresD: undefined;
  //--
  AlignamentD: undefined;
  //--
  ClassD: undefined;
  //--
  ClassLevelsD: undefined;
  //--
  ConditionD: undefined;
  //--
  DamegeTypeD: undefined;
  //--
  LanguagesD: undefined;
  //--
  MagicSchoolD: undefined;
  //--
  FeaturesD: undefined;
  //--
  MulticlassingD: undefined;
  //--
  MonstersD: undefined;
  //--
  MonsterDByName: undefined;
  //--
  MonsterDByRange: undefined;
  //--
  RaceD: undefined;
  //--

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
  RootTabScreenProps<keyof RootParamList>
>;
