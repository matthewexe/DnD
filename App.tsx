/* eslint-disable prettier/prettier */
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
  createBottomTabNavigator,
  BottomTabNavigationOptions,
} from '@react-navigation/bottom-tabs';
import { Provider } from 'react-redux';
import { HomeScreen } from './src/screen/HomeScreen';
import Icon from 'react-native-vector-icons/FontAwesome6';
import { customTheme2 } from './src/constants/theme';
import { NewPlayerScreen } from './src/screen/NewPlayerScreen';
import { store } from './src/store';
import { View } from 'react-native';
import { Settings } from './src/components/pages/Settings';

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
  home: ({ color, size }: { focused: boolean; color: string; size: number }) => (
    <Icon name="house" color={color} size={size} />
  ),
  plus: ({
    color,
    focused,
    size,
  }: {
    focused: boolean;
    color: string;
    size: number;
  }) => (
    <View
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        width: size * 3.1,
        height: size * 3.1,
        borderRadius: 50,
        borderWidth: 7,
        borderColor: customTheme2.colors.background,
        backgroundColor: focused ? customTheme2.colors.primary : '#555555',
        top: -29,
      }}>
      <Icon
        name="book"
        color={focused ? customTheme2.colors.background : color}
        size={size}
      />
    </View>
  ),
  gear: ({ color, size }: { focused: boolean; color: string; size: number }) => (
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
            name=" "
            component={NewPlayerScreen}
            options={() => ({
              tabBarStyle: {
                display: 'none',
              },
              tabBarIcon: tabsIcon.plus,
            })}
          />

          <Tabs.Screen
            name="Settings"
            component={Settings}
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
