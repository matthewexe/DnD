import type {NativeStackScreenProps} from '@react-navigation/native-stack';

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
