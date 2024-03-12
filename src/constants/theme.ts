/**
 * https://huemint.com/website-2/#palette=03131d-f0f1d2-f9ba00-e21c33
 * https://huemint.com/website-2/#palette=1f1d38-59e7b9-c9dcdb-f34469
 */

/**
 * Mystic Violet (#704897):
A slightly muted, balanced shade of purple for a mystical and enchanting feel.
Warrior's Crimson (#A42828):

A deep red that conveys the intensity of war without being overpowering.
Strategic Moss (#6D8E4D):

A subdued green that reflects strategic elements and complements the overall palette.
Regal Navy (#25395F):

A rich, dark blue that adds a touch of regality and sophistication to the design.
Victory Gold (#DAA520):

A warm gold color that signifies success and achievement, without being overly flashy.
Mysterious Ebony (#1E1E1E):

A dark, neutral black that provides depth and mystery without overshadowing other colors.
Neutral Silver (#A6A6A6):

A muted silver for neutral elements, adding balance to the palette.
Mystical Ember (#FF6E4A):

A vibrant but balanced orange for highlighting magical elements and effects.
 */
import {DefaultTheme, Theme} from '@react-navigation/native';

export const theme1 = {
  colors: {
    primary: '#704897', // Mystic Violet
    secondary: '#A42828', // Warrior's Crimson
    accent: '#6D8E4D', // Strategic Moss
    background: '#25395F', // Regal Navy
    success: '#DAA520', // Victory Gold
    text: '#1E1E1E', // Mysterious Ebony
    neutral: '#A6A6A6', // Neutral Silver
    highlight: '#FF6E4A', // Mystical Ember
  },
};

export const theme2 = {
  colors: {
    primary: '#4B0082', // Mystic Indigo
    secondary: '#800000', // Warrior Crimson
    accent: '#556B2F', // Strategic Olive
    background: '#004080', // Regal Sapphire
    success: '#FFD700', // Victory Gold
    text: '#333333', // Enigmatic Charcoal
    neutral: '#C0C0C0', // Neutral Silver
    highlight: '#FF6F00', // Arcane Ember
  },
};

// Github Copilot theme
export const theme3 = {
  colors: {
    primary: '#8A2BE2',
    secondary: '#B22222',
    accent: '#228B22',
    background: '#000080',
    success: '#FFD700',
    text: '#333333',
    neutral: '#C0C0C0',
    highlight: '#FF6F00',
  },
};

// Shadowed Amethyst (#352747):
// A deep, almost black, shade of purple for an even more mysterious and enchanting atmosphere.

// Bloodthirsty Maroon (#6D1111):
// A very dark maroon, intensifying the feeling of conflict and war.

// Strategic Pine (#3F4F29):
// A dark pine green, maintaining subtlety while emphasizing strategic elements.

// Midnight Royalty (#0F1E36):
// An even darker navy blue, adding further depth and regality to the palette.

// Triumphant Brass (#8B6D34):
// A darker and subdued gold color, conveying success and accomplishment with a rich tone.

// Ebon Mystery (#070707):
// A nearly black shade for shadows and mystery, providing strong contrast within the palette.

// Slate Silver (#565656):
// A darker silver for neutral elements, ensuring balance in the overall design.

// Infernal Glow (#D93900):
// A deeper and more intense orange for highlighting magical elements and effects.
export const theme4 = {
  colors: {
    primary: '#352747', // Shadowed Amethyst
    secondary: '#6D1111', // Bloodthirsty Maroon
    accent: '#3F4F29', // Strategic Pine
    background: '#0F1E36', // Midnight Royalty
    success: '#8B6D34', // Triumphant Brass
    text: '#070707', // Ebon Mystery
    neutral: '#565656', // Slate Silver
    highlight: '#D93900', // Infernal Glow
  },
};

export const theme5 = {
  colors: {
    primary: '#e74c3c', // Vibrant Blue
    card: '#252525', // Bold Red
    notification: '#2ecc71', // Fresh Green
    text: '#ecf0f1', // Light Gray (for text)
    background: '#000000', // Black Background
    border: '#333333', // Dark Gray (for borders)
  },
};

export const theme6 = {
  colors: {
    primary: '#FF4C42', // Soft Red
    secondary: '#333333', // Softer Black
    accent: '#FF8243', // Coral (optional accent color)
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
