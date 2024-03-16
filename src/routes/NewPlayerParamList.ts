import {CompositeScreenProps} from '@react-navigation/native';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {ClassIndexRequest, RacesRequest} from '../types/requests';
import {RootTabParamList, RootTabScreenProps} from './RootParamList';

export type NewPlayerParamList = {
  BasicInfo: undefined;
  Class: {
    class: ClassIndexRequest;
    race: RacesRequest;
    level: number;
    userData: any;
  };
  Race: {
    class: ClassIndexRequest;
    race: RacesRequest;
    level: number;
    userData: any;
  };
  End: {userData: any};
};

export type NewPlayerNavigationProps<T extends keyof NewPlayerParamList> =
  CompositeScreenProps<
    NativeStackScreenProps<NewPlayerParamList, T>,
    RootTabScreenProps<keyof RootTabParamList>
  >;
