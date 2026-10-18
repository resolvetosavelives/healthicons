import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IconFormat } from '../lib/icons';

export type SearchStyle = 'outline' | 'filled' | 'all';

// the size icons are shown at. 24px shows the simplified 24px-grid drawings;
// 48px and 64px both show the 48px-grid drawings (64px is the same SVGs drawn
// larger, as there's no separate 64px artwork)
export type DisplaySize = '24px' | '48px' | '64px';

export function sourceFormat(size: DisplaySize): IconFormat {
  return size === '24px' ? '24px' : '48px';
}

export interface SearchState {
  keywords: string;
  style: SearchStyle;
  category: string;
  format: DisplaySize;
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
    setFormat: (state, action: PayloadAction<DisplaySize>) => {
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
