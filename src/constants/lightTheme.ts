import {Theme, DefaultTheme} from '@react-navigation/native';

export const lightTheme: Theme = {
  ...DefaultTheme,
  dark: false,
  colors: {
    ...DefaultTheme.colors,
    primary: '#FF8F87', //(un rosso più chiaro)
    notification: '#E5E5E5', //(un grigio più chiaro)
    card: '#FFB7A1', //(un corallo più chiaro)
    text: '#000000', //(nero per il testo)
    background: '#F5F5F5', // (un grigio chiaro per lo sfondo)
    border: '#CCCCCC', //(un grigio ancora più chiaro per i bordi)
  },
};
