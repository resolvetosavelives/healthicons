import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface SearchState {
  keywords: string;
  style: 'outline' | 'filled' | 'all';
}

const initialState: SearchState = {
  keywords: '',
  style: 'all'
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
    }
  }
});

// Action creators are generated for each case reducer function
export const { setKeywords, setStyle } = searchSlice.actions;

export default searchSlice.reducer;
