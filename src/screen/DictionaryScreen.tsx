import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {DictionaryStackParamList} from '../routes/DictionaryStack';
import {HomeDictionary} from '../components/pages/HomeDictionary';
import {DictionaryClass} from '../components/pages/DictionaryClass';
import {DictionaryAlignament} from '../components/pages/DictionaryAlignament';
import {DictionaryCondition} from '../components/pages/DictionaryCondition';
import {DictionaryDamageType} from '../components/pages/DictionaryDamageType';
import {DictionaryAbilityScores} from '../components/pages/DictionaryAbilityScores';
import {DictionaryLanguages} from '../components/pages/DictionaryLanguages';
import {DictionaryMagicSchool} from '../components/pages/DictionaryMagicSchool';
import {DictionaryFeatures} from '../components/pages/DictionaryFeatures';
import {DictionaryHomeMonsters} from '../components/pages/DictionaryHomeMonsters';
import {DictionaryMonsterByIndex} from '../components/pages/DictionaryMonsterByIndex';
import {DictionaryMonsterByLevel} from '../components/pages/DictionaryMonsterByLevel';

const Stack = createNativeStackNavigator<DictionaryStackParamList>();

export function Dictionary() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Dictionary" component={HomeDictionary} />
      <Stack.Screen name="ClassD" component={DictionaryClass} />
      <Stack.Screen name="AlignamentD" component={DictionaryAlignament} />
      <Stack.Screen name="ConditionD" component={DictionaryCondition} />
      <Stack.Screen name="DamegeTypeD" component={DictionaryDamageType} />
      <Stack.Screen name="AbilityScoresD" component={DictionaryAbilityScores} />
      <Stack.Screen name="LanguagesD" component={DictionaryLanguages} />
      <Stack.Screen name="MagicSchoolD" component={DictionaryMagicSchool} />
      <Stack.Screen name="FeaturesD" component={DictionaryFeatures} />
      <Stack.Screen name="MonstersD" component={DictionaryHomeMonsters} />
      <Stack.Screen
        name="MonsterDByName"
        component={DictionaryMonsterByIndex}
      />
      <Stack.Screen
        name="MonsterDByRange"
        component={DictionaryMonsterByLevel}
      />
    </Stack.Navigator>
  );
}
