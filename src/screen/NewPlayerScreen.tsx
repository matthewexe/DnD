import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {NewPlayerParamList} from '../routes/NewPlayerParamList';
import {BasicInfo} from '../components/BasicInfo';
import {RaceComponent} from '../components/race/Race';

const NewPlayerNavigator = createNativeStackNavigator<NewPlayerParamList>();

export const NewPLayerScreen = () => {
  return (
    <NewPlayerNavigator.Navigator>
      <NewPlayerNavigator.Screen name="BasicInfo" component={BasicInfo} />
      <NewPlayerNavigator.Screen name="Race" component={RaceComponent} />
      {/*<NewPlayerNavigator.Screen name="Race" component={BasicInfo} /> */}
    </NewPlayerNavigator.Navigator>
  );
};
