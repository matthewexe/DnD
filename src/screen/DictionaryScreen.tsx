import {Home} from '../components/pages/Home';
import {BasicInfo} from '../components/pages/BasicInfo';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {DictionaryStackParamList} from '../routes/DictionaryStack';
import {HomeDictionary} from '../components/pages/HomeDictionary';
import {DictionaryClass} from '../components/pages/DictionaryClass';

const Stack = createNativeStackNavigator<DictionaryStackParamList>();

export function Dictionary() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Dictionary" component={HomeDictionary} />
      <Stack.Screen name="ClassD" component={DictionaryClass} />
    </Stack.Navigator>
  );
}
