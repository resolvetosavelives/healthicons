import { configureStore } from '@reduxjs/toolkit';
import searchStore from './store/search';

export const store = configureStore({
  reducer: {
    search: searchStore
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
