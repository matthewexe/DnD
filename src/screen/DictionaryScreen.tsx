import {createStackNavigator} from '@react-navigation/stack';
import {Home} from '../components/pages/Home';
import {BasicInfo} from '../components/pages/BasicInfo';

const Stack = createStackNavigator();

export function MyStack() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{headerMode: 'screen'}}>
      <Stack.Screen name="nome" component={Home} />
    </Stack.Navigator>
  );
}
