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
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserTexts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchUserTexts.fulfilled, (state, action) => {
        state.texts = action.payload;
        state.status = 'succeeded';
      })
      .addCase(fetchUserTexts.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export const { addText } = TextsSlice.actions;

export const getTexts = (state: RootState) => state.texts.texts;
export const getStatus = (state: RootState) => state.texts.status;

export default TextsSlice.reducer;
