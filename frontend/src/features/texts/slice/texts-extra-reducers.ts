import { ActionReducerMapBuilder } from '@reduxjs/toolkit';
import { ResponseStatus } from 'utils/types/api';
import { ItextsInitialStateSlice } from './texts-initial-state-slice';
import { fetchUserTexts } from './texts-thunks';

export const textsExtraReducers = (builder: ActionReducerMapBuilder<ItextsInitialStateSlice>) => {
  builder
    .addCase(fetchUserTexts.pending, (state) => {
      state.status = ResponseStatus.LOADING;
    })
    .addCase(fetchUserTexts.fulfilled, (state, action) => {
      state.texts = action.payload.sort((a, b) => b.id - a.id);
      state.textsCopy = state.texts;
      state.status = ResponseStatus.SUCCEEDED;
    })
    .addCase(fetchUserTexts.rejected, (state) => {
      state.status = ResponseStatus.FAILED;
    });
}
