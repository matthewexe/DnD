import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {DictionaryStackParamList} from '../routes/DictionaryStack';
import {HomeDictionary} from '../components/pages/dictionary/HomeDictionary';
import {DictionaryClass} from '../components/pages/dictionary/DictionaryClass';
import {DictionaryAlignament} from '../components/pages/dictionary/DictionaryAlignament';
import {DictionaryCondition} from '../components/pages/dictionary/DictionaryCondition';
import {DictionaryDamageType} from '../components/pages/dictionary/DictionaryDamageType';
import {DictionaryAbilityScores} from '../components/pages/dictionary/DictionaryAbilityScores';
import {DictionaryLanguages} from '../components/pages/dictionary/DictionaryLanguages';
import {DictionaryMagicSchool} from '../components/pages/dictionary/DictionaryMagicSchool';
import {DictionaryFeatures} from '../components/pages/dictionary/DictionaryFeatures';
import {DictionaryHomeMonsters} from '../components/pages/dictionary/DictionaryHomeMonsters';
import {DictionaryMonsterByIndex} from '../components/pages/dictionary/DictionaryMonsterByIndex';
import {DictionaryMonsterByLevel} from '../components/pages/dictionary/DictionaryMonsterByLevel';
import {DictionaryMulticlassing} from '../components/pages/dictionary/DictionaryMulticlassing';
import {DictionaryRace} from '../components/pages/dictionary/DictionaryRace';
import {DictionarySubrace} from '../components/pages/dictionary/DictionarySubrace';
import {DictionaryClassByLevel} from '../components/pages/dictionary/DictionaryClassByLevel';
import {DictionaryArmor} from '../components/pages/dictionary/DictionaryArmor';

const Stack = createNativeStackNavigator<DictionaryStackParamList>();

export function Dictionary() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Dictionary" component={HomeDictionary} />
      <Stack.Screen name="ClassD" component={DictionaryClass} />
      <Stack.Screen name="ClassLevelsD" component={DictionaryClassByLevel} />
      <Stack.Screen name="AlignamentD" component={DictionaryAlignament} />
      <Stack.Screen name="ConditionD" component={DictionaryCondition} />
      <Stack.Screen name="DamegeTypeD" component={DictionaryDamageType} />
      <Stack.Screen name="AbilityScoresD" component={DictionaryAbilityScores} />
      <Stack.Screen name="LanguagesD" component={DictionaryLanguages} />
      <Stack.Screen name="MagicSchoolD" component={DictionaryMagicSchool} />
      <Stack.Screen name="FeaturesD" component={DictionaryFeatures} />
      <Stack.Screen name="MonstersD" component={DictionaryHomeMonsters} />
      <Stack.Screen name="MulticlassingD" component={DictionaryMulticlassing} />
      <Stack.Screen name="RaceD" component={DictionaryRace} />
      <Stack.Screen name="SubraceD" component={DictionarySubrace} />
      <Stack.Screen name="ArmorD" component={DictionaryArmor} />
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
