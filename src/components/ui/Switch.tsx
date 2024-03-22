/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */
import React, {useState} from 'react';
import {View, Switch, SwitchProps} from 'react-native';
import {customTheme2} from '../../constants/theme';

type Props = SwitchProps;

export const MySwitch = (props: Props) => {
  const [enabled, setEnabled] = useState(false);
  const toggleSwitch = () => {
    setEnabled(enabled => !enabled);
  };
  return (
    <View>
      <Switch
        {...props}
        onChange={toggleSwitch}
        style={{}}
        thumbColor={
          enabled ? customTheme2.colors.primary : customTheme2.colors.text
        }
        trackColor={{
          false: '#767676',
          true:
            //customTheme2.colors.border
            '#966666',
        }}
        value={enabled}></Switch>
    </View>
  );
};

export default MySwitch;
