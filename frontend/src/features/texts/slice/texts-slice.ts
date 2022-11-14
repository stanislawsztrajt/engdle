import { createSlice } from '@reduxjs/toolkit';
import { RootState } from 'app/store';
import { SortTypes } from '../types';
import { textsInitialStateSlice } from './texts-initial-state-slice';
import { fetchUserTexts } from './texts-thunks';

const TextsSlice = createSlice({
  name: 'texts',
  initialState: textsInitialStateSlice,
  reducers: {
    addText: (state, action) => {
      state.texts.unshift(action.payload);
    },
    removeTextById: (state, action) => {
      const textIndex = state.texts.findIndex((text) => text.id === action.payload);
      state.texts.splice(textIndex, 1);
    },
    closeTextById: (state, action) => {
      const textIndex = state.texts.findIndex((text) => text.id === action.payload);
      state.texts[textIndex].isClosed = true;
    },
    uncloseTextById: (state, action) => {
      const textIndex = state.texts.findIndex((text) => text.id === action.payload);
      state.texts[textIndex].isClosed = false;
    },
    sortTextsBy: (state, action) => {
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
    searchTexts: (state, action) => {
      state.texts = state.textsCopy.filter(
        (text) => text.text.includes(action.payload) || text.translatedText.includes(action.payload)
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserTexts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchUserTexts.fulfilled, (state, action) => {
        state.texts = action.payload.sort((a, b) => b.id - a.id);
        state.textsCopy = state.texts;
        state.status = 'succeeded';
      })
      .addCase(fetchUserTexts.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export const { addText, removeTextById, closeTextById, uncloseTextById, sortTextsBy, searchTexts } =
  TextsSlice.actions;

export const getTexts = (state: RootState) => state.texts.texts;
export const getStatus = (state: RootState) => state.texts.status;

export default TextsSlice.reducer;
