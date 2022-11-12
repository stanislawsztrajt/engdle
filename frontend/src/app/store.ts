import { configureStore } from '@reduxjs/toolkit';
import usersReducer from 'features/users/slice/users-slice';
import textsReducer from 'features/texts/slice/texts-slice';

export const store = configureStore({
  reducer: {
    users: usersReducer,
    texts: textsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
