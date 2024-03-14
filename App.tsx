import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  createBottomTabNavigator,
  BottomTabNavigationOptions,
} from '@react-navigation/bottom-tabs';
import {Provider} from 'react-redux';
import {HomeScreen} from './src/screen/HomeScreen';
import Icon from 'react-native-vector-icons/FontAwesome6';
import {customTheme2} from './src/constants/theme';
import {NewPLayerScreen} from './src/screen/NewPlayerScreen';
import {store} from './src/store';

const Tabs = createBottomTabNavigator();
const screenOptions: BottomTabNavigationOptions = {
  headerShown: false,
  tabBarStyle: {
    position: 'absolute',
    bottom: 25,
    left: '12.5%',
    right: '12.5%',
    borderRadius: 30,
    width: '75%',
    height: 70,
    marginHorizontal: 'auto',
  },
  tabBarItemStyle: {
    borderRadius: 30,
    justifyContent: 'center',
    marginVertical: 10,
  },
};

const tabsIcon = {
  home: ({color, size}: {focused: boolean; color: string; size: number}) => (
    <Icon name="house" color={color} size={size} />
  ),
  plus: ({color, size}: {focused: boolean; color: string; size: number}) => (
    <Icon name="plus" color={color} size={size} />
  ),
  gear: ({color, size}: {focused: boolean; color: string; size: number}) => (
    <Icon name="gear" color={color} size={size} />
  ),
};

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <NavigationContainer theme={customTheme2}>
        <Tabs.Navigator screenOptions={screenOptions}>
          <Tabs.Screen
            name="Home"
            component={HomeScreen}
            options={{
              tabBarIcon: tabsIcon.home,
            }}
          />
          <Tabs.Screen
            name="New"
            component={NewPLayerScreen}
            options={{
              tabBarIcon: tabsIcon.plus,
              // tabBarLabel: ({}) => {
              //   return '';
              // },
            }}
          />
          <Tabs.Screen
            name="Settings"
            component={NewPLayerScreen}
            options={{
              tabBarIcon: tabsIcon.gear,
            }}
          />
        </Tabs.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
