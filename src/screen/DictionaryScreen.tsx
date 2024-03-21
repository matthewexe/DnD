import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {DictionaryStackParamList} from '../routes/DictionaryStack';
import {HomeDictionary} from '../components/pages/HomeDictionary';
import {DictionaryClass} from '../components/pages/DictionaryClass';
import {DictionaryAlignament} from '../components/pages/DictionaryAlignament';
import {DictionaryCondition} from '../components/pages/DictionaryCondition';
import {DictionaryDamageType} from '../components/pages/DictionaryDamageType';

const Stack = createNativeStackNavigator<DictionaryStackParamList>();

export function Dictionary() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Dictionary" component={HomeDictionary} />
      <Stack.Screen name="ClassD" component={DictionaryClass} />
      <Stack.Screen name="AlignamentD" component={DictionaryAlignament} />
      <Stack.Screen name="ConditionD" component={DictionaryCondition} />
      <Stack.Screen name="DamegeTypeD" component={DictionaryDamageType} />
    </Stack.Navigator>
  );
}
