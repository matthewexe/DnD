import {CompositeScreenProps} from '@react-navigation/native';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootTabParamList, RootTabScreenProps} from './RootParamList';
import {Aligament_dictionary, Class_dictionary} from '../types/dictionary';

export type DictionaryParamList = {
  alignament: Aligament_dictionary;
  classe: Class_dictionary;
};

export type DictionaryNavigationProps<T extends keyof DictionaryParamList> =
  CompositeScreenProps<
    NativeStackScreenProps<DictionaryParamList, T>,
    RootTabScreenProps<keyof RootTabParamList>
  >;
