import {Theme, DefaultTheme} from '@react-navigation/native';

export const theme6 = {
  colors: {
    primary: '#FF4C42', // Soft Red
    secondary: '#333333', // Softer Black
    accent: '#E17138', // Coral (optional accent color)
    text: '#FFFFFF', // White (for text)
    background: '#1E1E1E', // Dark Charcoal Background
    border: '#666666', // Lighter Gray (for borders)
  },
};

const theme = theme6;

export const customTheme2: Theme = {
  ...DefaultTheme,
  dark: true,
  colors: {
    ...DefaultTheme.colors,
    primary: theme.colors.primary,
    background: theme.colors.background,
    card: theme.colors.secondary,
    text: theme.colors.text,
    border: theme.colors.border,
    notification: theme.colors.accent,
  },
};

export default theme;
