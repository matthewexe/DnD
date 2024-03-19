import {CompositeScreenProps} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootTabParamList, RootTabScreenProps} from './RootParamList';
import {Player} from '../types/db';

export type HomeStackParamList = {
  ListGame: undefined;
  GameDetail: {gameId: string};
  NewGame: undefined;
  SuccessError: {query: string};
  GameDelete: {gameId: string};
  NewPlayer_BasicInfo: {gameId: string};
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
