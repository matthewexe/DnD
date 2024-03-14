import {CompositeScreenProps} from '@react-navigation/native';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootTabParamList, RootTabScreenProps} from './RootParamList';
import {ClassIndexRequest, RaceIndexRequest} from '../types/requests';

export type NewPlayerParamList = {
  BasicInfo: undefined;
  Class: {
    class: ClassIndexRequest;
    race: RaceIndexRequest;
    level: number;
    userData: any;
  };
  Race: {
    class: ClassIndexRequest;
    race: RaceIndexRequest;
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
