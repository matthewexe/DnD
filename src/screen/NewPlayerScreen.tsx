import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {NewPlayerParamList} from '../routes/NewPlayerParamList';
import {BasicInfo} from '../components/pages/BasicInfo';
import {ClassChoice} from '../components/pages/ClassChoice';
import {RaceInfo} from '../components/pages/Race';
import {EquipmentChoice} from '../components/pages/EquipmentChoice';

const NewPlayerNavigator = createNativeStackNavigator<NewPlayerParamList>();

export const NewPlayerScreen = () => {
  return (
    <NewPlayerNavigator.Navigator screenOptions={{headerShown: false}}>
      <NewPlayerNavigator.Screen name="BasicInfo" component={BasicInfo} />
      <NewPlayerNavigator.Screen name="RaceInfo" component={RaceInfo} />
      <NewPlayerNavigator.Screen name="ClassChoice" component={ClassChoice} />
      <NewPlayerNavigator.Screen
        name="EquipmentChoice"
        component={EquipmentChoice}
      />
    </NewPlayerNavigator.Navigator>
  );
};
