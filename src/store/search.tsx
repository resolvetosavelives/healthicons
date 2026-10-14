import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IconFormat } from '../lib/icons';

export type SearchStyle = 'outline' | 'filled' | 'all';

export interface SearchState {
  keywords: string;
  style: SearchStyle;
  category: string;
  format: IconFormat;
  // hex color applied to every icon, or '' for the default (black)
  color: string;
}

export const initialSearchState: SearchState = {
  keywords: '',
  style: 'outline',
  category: '',
  format: '48px',
  color: ''
};

export const searchSlice = createSlice({
  name: 'search',
  initialState: initialSearchState,
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
    },
    setColor: (state, action: PayloadAction<string>) => {
      state.color = action.payload;
    },
    setFilters: (state, action: PayloadAction<Partial<SearchState>>) => {
      return { ...state, ...action.payload };
    }
  }
});

export const {
  setKeywords,
  setStyle,
  setCategory,
  setFormat,
  setColor,
  setFilters
} = searchSlice.actions;

export default searchSlice.reducer;
