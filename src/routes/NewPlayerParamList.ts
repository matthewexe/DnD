import {CompositeScreenProps} from '@react-navigation/native';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {ClassIndexRequest, RacesRequest} from '../types/requests';
import {RootTabParamList, RootTabScreenProps} from './RootParamList';
import {Player} from '../types/db';

export type NewPlayerParamList = {
  BasicInfo: undefined;
  Class: {
    class: ClassIndexRequest;
    race: RacesRequest;
    level: number;
    userData: Player;
  };
  Race: {
    class: ClassIndexRequest;
    race: RacesRequest;
    level: number;
    userData: Player;
  };
  End: {userData: any};
};

export type NewPlayerNavigationProps<T extends keyof NewPlayerParamList> =
  CompositeScreenProps<
    NativeStackScreenProps<NewPlayerParamList, T>,
    RootTabScreenProps<keyof RootTabParamList>
  >;
