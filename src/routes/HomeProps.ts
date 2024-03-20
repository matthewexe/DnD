import {CompositeScreenProps} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootTabScreenProps} from './RootProps';

export type HomeParamList = {
  ListGame: undefined;
  SuccessError: {success: boolean};
  GameDetail: {gameId: number};
  NewGame: undefined;
  DeleteGame: {gameId: number};
  NewPlayer_BasicInfo: {gameId: number};
  NewPlayer_Race: {gameId: number};
  NewPlayer_Class: {gameId: number};
  NewPlayer_Equip: {gameId: number};
  NewPLayer_End: {gameId: number};
};

export type HomeScreenProps<T extends keyof HomeParamList> =
  CompositeScreenProps<
    NativeStackScreenProps<HomeParamList, T>,
    RootTabScreenProps<'Home'>
  >;
