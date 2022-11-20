import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'app/store';
import { Itext, SortType, SortTypes } from '../types';
import { textsExtraReducers } from './texts-extra-reducers';
import { textsInitialStateSlice } from './texts-initial-state-slice';

const TextsSlice = createSlice({
  name: 'texts',
  initialState: textsInitialStateSlice,
  reducers: {
    addText: (state, action: PayloadAction<Itext>) => {
      state.texts.unshift(action.payload);
    },
    removeTextById: (state, action: PayloadAction<number>) => {
      const textIndex = state.texts.findIndex((text) => text.id === action.payload);
      state.texts.splice(textIndex, 1);
    },
    closeTextById: (state, action: PayloadAction<number>) => {
      const textIndex = state.texts.findIndex((text) => text.id === action.payload);
      state.texts[textIndex].isClosed = true;
    },
    uncloseTextById: (state, action: PayloadAction<number>) => {
      const textIndex = state.texts.findIndex((text) => text.id === action.payload);
      state.texts[textIndex].isClosed = false;
    },
    sortTextsBy: (state, action: PayloadAction<SortType>) => {
      switch (action.payload) {
        case SortTypes.ALPHABETICALLY:
          state.textsCopy.sort((a, b) => a.text.localeCompare(b.text));
          state.texts.sort((a, b) => a.text.localeCompare(b.text));
          break;
        case SortTypes.LATEST:
          state.textsCopy.sort((a, b) => +b.id - +a.id);
          state.texts.sort((a, b) => +b.id - +a.id);
          break;
        case SortTypes.OLDEST:
          state.textsCopy.sort((a, b) => +a.id - +b.id);
          state.texts.sort((a, b) => +a.id - +b.id);
          break;
      }
    },
    searchTexts: (state, action: PayloadAction<string>) => {
      state.texts = state.textsCopy.filter(
        (text) => text.text.includes(action.payload) || text.translatedText.includes(action.payload)
      );
    }
  },
  extraReducers: textsExtraReducers,
});

export const { addText, removeTextById, closeTextById, uncloseTextById, sortTextsBy, searchTexts } =
  TextsSlice.actions;

export const getTexts = (state: RootState) => state.texts.texts;
export const getStatus = (state: RootState) => state.texts.status;

export default TextsSlice.reducer;
