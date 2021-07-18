import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface SearchState {
  keywords: string;
  style: 'outline' | 'filled' | 'all';
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
    setStyle: (state, action: PayloadAction<'outline' | 'filled' | 'all'>) => {
      state.style = action.payload;
    },
    setCategory: (state, action: PayloadAction<string>) => {
      state.category = action.payload;
    }
  }
});

export const { setKeywords, setStyle, setCategory } = searchSlice.actions;

export default searchSlice.reducer;
