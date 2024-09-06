import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type SearchStyle = 'outline' | 'filled' | 'all';
export type SearchFormat = 'all' | '24px';

export interface SearchState {
  keywords: string;
  style: SearchStyle;
  category: string;
  format: SearchFormat;
}

const initialState: SearchState = {
  keywords: '',
  style: 'all',
  category: '',
  format: 'all'
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
    setFormat: (state, action: PayloadAction<SearchFormat>) => {
      state.format = action.payload;
    }
  }
});

export const { setKeywords, setStyle, setCategory, setFormat } =
  searchSlice.actions;

export default searchSlice.reducer;
