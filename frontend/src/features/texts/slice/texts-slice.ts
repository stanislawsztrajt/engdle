import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'app/store';
import { Ilanguage, Itext, SortType, SortTypes, IfilterTextsOptions } from '../types';
import { textsExtraReducers } from './texts-extra-reducers';
import { textsInitialStateSlice } from './texts-initial-state-slice';

const TextsSlice = createSlice({
  name: 'texts',
  initialState: textsInitialStateSlice,
  reducers: {
    addText: (state, action: PayloadAction<Itext>) => {
      state.textsCopy.unshift(action.payload);
      state.texts.unshift(action.payload);
    },
    removeTextById: (state, action: PayloadAction<number>) => {
      const textIndex = state.texts.findIndex((text) => text.id === action.payload);
      state.textsCopy.splice(textIndex, 1);
      state.texts.splice(textIndex, 1);
    },
    closeTextById: (state, action: PayloadAction<number>) => {
      const textIndex = state.texts.findIndex((text) => text.id === action.payload);
      state.textsCopy[textIndex].isClosed = true;
      state.texts[textIndex].isClosed = true;
    },
    uncloseTextById: (state, action: PayloadAction<number>) => {
      const textIndex = state.texts.findIndex((text) => text.id === action.payload);
      state.textsCopy[textIndex].isClosed = false;
      state.texts[textIndex].isClosed = false;
    },
    sortTextsBy: (state, action: PayloadAction<SortType>) => {
      switch (action.payload) {
        case SortTypes.ALPHABETICALLY:
          state.textsCopy.sort((a, b) => a.text.localeCompare(b.text));
          state.texts.sort((a, b) => a.text.localeCompare(b.text));
          break;
        case SortTypes.UNALPHABETICALLY:
          state.textsCopy.sort((a, b) => b.text.localeCompare(a.text));
          state.texts.sort((a, b) => b.text.localeCompare(a.text));
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
    filterTexts: (state, action: PayloadAction<IfilterTextsOptions>) => {
      state.filterTextsOptions = action.payload;
      state.texts = state.textsCopy.filter(
        (text) =>
          text.text.includes(action.payload.text) ||
          text.translatedText.includes(action.payload.text)
      );

      if (action.payload.languages.length === 0) return;
      state.texts = state.texts.filter((text) =>
        action.payload.languages.some(
          (payloadLanguage) => JSON.stringify(payloadLanguage) === JSON.stringify(text.language)
        )
      );
    },
  },
  extraReducers: textsExtraReducers,
});

export const { addText, removeTextById, closeTextById, uncloseTextById, sortTextsBy, filterTexts } =
  TextsSlice.actions;

export const getTexts = (state: RootState) => state.texts.texts;
export const getTextsCopy = (state: RootState) => state.texts.textsCopy;
export const getFiltersTextsOptions = (state: RootState) => state.texts.filterTextsOptions;
export const getStatus = (state: RootState) => state.texts.status;
export const getUsedLanguages = (state: RootState) => {
  const usedLanguages: Ilanguage[] = [];

  state.texts.textsCopy.forEach((text) => {
    const hasLanguageBeenUsed = usedLanguages.some(
      (usedLanguage) =>
        usedLanguage.from === text.language.from && usedLanguage.to === text.language.to
    );
    if (hasLanguageBeenUsed) return;

    usedLanguages.push(text.language);
  });

  return usedLanguages;
};

export default TextsSlice.reducer;
