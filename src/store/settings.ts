import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Language, LanguageCode} from '../types/languages';

// Define the state interface
interface SettingsState {
  language: LanguageCode;
  // ...
}

// Define the initial state
const initialState: SettingsState = {
  language: 'en',
  // ...
};

// Create the Redux store
const settingsSlice = createSlice({
  name: 'settings',
  initialState: initialState,
  reducers: {
    setProperty: (
      state,
      action: PayloadAction<{
        property: keyof SettingsState;
        value: LanguageCode;
      }>,
    ) => {
      state.language = action.payload.value;
    },
  },
});

export const {setProperty} = settingsSlice.actions;
export default settingsSlice;
