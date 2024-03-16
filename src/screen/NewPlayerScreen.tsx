import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {NewPlayerParamList} from '../routes/NewPlayerParamList';
import {BasicInfo} from '../components/pages/BasicInfo';
import {Class} from '../components/pages/Class';
import {Race} from '../components/pages/Race';

const NewPlayerNavigator = createNativeStackNavigator<NewPlayerParamList>();

export const NewPlayerScreen = () => {
  return (
    <NewPlayerNavigator.Navigator>
      <NewPlayerNavigator.Screen name="BasicInfo" component={BasicInfo} />
      <NewPlayerNavigator.Screen name="Class" component={Class} />
      <NewPlayerNavigator.Screen name="Race" component={Race} />
    </NewPlayerNavigator.Navigator>
  );
};
