import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Language} from '../types/languages';

// Define the state interface
interface SettingsState {
  language: Language;
  // ...
}

// Define the initial state
const initialState: SettingsState = {
  language: 'English',
  // ...
};

// Create the Redux store
const settingsSlice = createSlice({
  name: 'settings',
  initialState: initialState,
  reducers: {
    setProperty: (
      state,
      action: PayloadAction<{property: keyof SettingsState; value: Language}>,
    ) => {
      state.language = action.payload.value;
    },
  },
});

export const {setProperty} = settingsSlice.actions;
export default settingsSlice;
