import {CompositeScreenProps} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootTabParamList, RootTabScreenProps} from './RootParamList';

export type HomeStackParamList = {
  ListGame: undefined;
  GameDetail: {gameId: string};
};

export type HomeStackScreenProps<T extends keyof HomeStackParamList> =
  CompositeScreenProps<
    NativeStackScreenProps<HomeStackParamList, T>,
    RootTabScreenProps<keyof RootTabParamList>
  >;
