import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from './HomeScreen';
import { SecondScreen } from './SecondScreen';
import { Button } from 'react-native';

const Tab = createBottomTabNavigator();

export function MyTabs() {
  return (
    <Tab.Navigator>
    
        <Tab.Group>
        <Tab.Screen name="Home" component={HomeScreen} />
      {/* <Button title='switch'/> */}
      {/* <Tab.Screen name="g" component={SecondScreen} />  */}
        </Tab.Group>
      
    </Tab.Navigator>
  );
}