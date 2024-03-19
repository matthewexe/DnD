import {CompositeScreenProps} from '@react-navigation/native';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {
  ClassIndexRequest,
  ClassLevelsRequest,
  LanguageRequestByIndex,
  ProficiencyByRaceRequest,
  RacesRequest,
  TraitsByIndexRequest,
} from '../types/requests';
import {RootTabParamList, RootTabScreenProps} from './RootParamList';

export type NewPlayerParamList = {
  BasicInfo: undefined;
  RaceInfo: {
    player: string;
    character: string;
    race: RacesRequest;
  };
  ClassChoice: {
    Traits: TraitsByIndexRequest;
    raceBonus: RacesRequest;
    languages: LanguageRequestByIndex;
    initialProficiency: ProficiencyByRaceRequest;
  };
  EquipmentChoice: {};
  End: {userData: any};
};

export type NewPlayerNavigationProps<T extends keyof NewPlayerParamList> =
  CompositeScreenProps<
    NativeStackScreenProps<NewPlayerParamList, T>,
    RootTabScreenProps<keyof RootTabParamList>
  >;
