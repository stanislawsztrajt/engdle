import { createSlice } from '@reduxjs/toolkit';
import { RootState } from 'app/store';
import { textsInitialStateSlice } from './texts-initial-state-slice';
import { fetchUserTexts } from './texts-thunks';

const TextsSlice = createSlice({
  name: 'texts',
  initialState: textsInitialStateSlice,
  reducers: {
    addText: (state, action) => {
      state.texts.push(action.payload);
    },
    removeTextById: (state, action) => {
      const textIndex = state.texts.findIndex(text => text.id === action.payload);
      state.texts.splice(textIndex, 1);
    },
    closeTextById: (state, action) => {
      const textIndex = state.texts.findIndex(text => text.id === action.payload);
      state.texts[textIndex].isClosed = true;
    },
    uncloseTextById: (state, action) => {
      const textIndex = state.texts.findIndex(text => text.id === action.payload);
      state.texts[textIndex].isClosed = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserTexts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchUserTexts.fulfilled, (state, action) => {
        state.texts = action.payload.sort((a, b) => a.id - b.id);
        state.status = 'succeeded';
      })
      .addCase(fetchUserTexts.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export const { addText, removeTextById, closeTextById, uncloseTextById } = TextsSlice.actions;

export const getTexts = (state: RootState) => state.texts.texts;
export const getStatus = (state: RootState) => state.texts.status;

export default TextsSlice.reducer;
