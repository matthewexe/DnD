import {CompositeScreenProps} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootTabParamList, RootTabScreenProps} from './RootParamList';
import {Player} from '../types/db';

export type HomeStackParamList = {
  ListGame: undefined;
  GameDetail: {gameId: number};
  NewGame: undefined;
  SuccessError: {query: string};
  GameDelete: {gameId: number};
  NewPlayer_BasicInfo: {gameId: number};
  NewPlayer_Race: Player;
  NewPlayer_Class: Player;
  NewPlayer_Equipment: Player;
  NewPlayer_End: Player;
};

export type HomeStackScreenProps<T extends keyof HomeStackParamList> =
  CompositeScreenProps<
    NativeStackScreenProps<HomeStackParamList, T>,
    RootTabScreenProps<keyof RootTabParamList>
  >;
