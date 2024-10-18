import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IconFormat } from '../lib/icons';

export type SearchStyle = 'outline' | 'filled' | 'all';

export interface SearchState {
  keywords: string;
  style: SearchStyle;
  category: string;
  format: IconFormat;
}

const initialState: SearchState = {
  keywords: '',
  style: 'all',
  category: '',
  format: '48px'
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setKeywords: (state, action: PayloadAction<string>) => {
      state.keywords = action.payload;
    },
    setStyle: (state, action: PayloadAction<SearchStyle>) => {
      state.style = action.payload;
    },
    setCategory: (state, action: PayloadAction<string>) => {
      state.category = action.payload;
    },
    setFormat: (state, action: PayloadAction<IconFormat>) => {
      state.format = action.payload;
    }
  }
});

export const { setKeywords, setStyle, setCategory, setFormat } =
  searchSlice.actions;

export default searchSlice.reducer;
