import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type SearchStyle = 'outline' | 'filled' | 'all';

export interface SearchState {
  keywords: string;
  style: SearchStyle;
  category: string;
}

const initialState: SearchState = {
  keywords: '',
  style: 'all',
  category: ''
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
    }
  }
});

export const { setKeywords, setStyle, setCategory } = searchSlice.actions;

export default searchSlice.reducer;
