import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {NavigatorScreenParams} from '@react-navigation/native';
import {HomeParamList} from './HomeProps';

export type RootParamList = {
  Home: NavigatorScreenParams<HomeParamList>;
  Wiki: undefined;
};

export type RootTabScreenProps<T extends keyof RootParamList> =
  BottomTabScreenProps<RootParamList, T>;
