import {configureStore} from '@reduxjs/toolkit';
import {api} from '../services/api';
import settings from './settings';

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    [settings.reducerPath]: settings.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(api.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
