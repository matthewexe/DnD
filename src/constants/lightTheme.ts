import {Theme, DefaultTheme} from '@react-navigation/native';

export const lightTheme: Theme = {
  ...DefaultTheme,
  dark: false,
  colors: {
    ...DefaultTheme.colors,
    primary: '6',
    background: '6',
    notification: '6',
    border: '6',
    text: '6',
    card: '6',
  },
};
