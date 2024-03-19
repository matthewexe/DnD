import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';

export type RootTabParamList = {
  Home: undefined;
  NewPlayer: undefined;
  Settings: undefined;
};

export type RootTabScreenProps<T extends keyof RootTabParamList> =
  BottomTabScreenProps<RootTabParamList, T>;
