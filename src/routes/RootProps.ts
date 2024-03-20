import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';

export type RootParamList = {
  Home: undefined;
  Wiki: undefined;
  Settings: undefined;
};

export type RootBottomTabsProps = BottomTabNavigationProp<RootParamList>;
