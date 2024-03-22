import {CompositeScreenProps} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootTabScreenProps} from './RootProps';
import {PlayerModel} from '../models/types';
import Realm from 'realm';

export type HomeParamList = {
  ListGame: undefined;
  SuccessError: {success: boolean};
  GameDetail: {gameId: Realm.BSON.ObjectId};
  NewGame: undefined;
  DeleteGame: {gameId: Realm.BSON.ObjectId};
  NewPlayer_BasicInfo: {gameId: Realm.BSON.ObjectId};
  NewPlayer_Race: {gameId: Realm.BSON.ObjectId; playerData: PlayerModel};
  NewPlayer_Class: {gameId: Realm.BSON.ObjectId; playerData: PlayerModel};
  NewPlayer_Equip: {gameId: Realm.BSON.ObjectId; playerData: PlayerModel};
  NewPLayer_End: {gameId: Realm.BSON.ObjectId; playerData: PlayerModel};
};

export type HomeScreenProps<T extends keyof HomeParamList> =
  CompositeScreenProps<
    NativeStackScreenProps<HomeParamList, T>,
    RootTabScreenProps<'Home'>
  >;
