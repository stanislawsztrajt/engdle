import { createSlice } from '@reduxjs/toolkit';
import { RootState } from 'app/store';
import { usersInitialStateSlice } from './users-initial-state-slice';
import { fetchUsers } from './users-thunks';

const UsersSlice = createSlice({
  name: 'users',
  initialState: usersInitialStateSlice,
  reducers: {
    getUserById: (state, action) => {
      const userIndex = state.users.findIndex((user) => user.id === action.payload.id);
      state.user = state.users[userIndex];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.users = action.payload;
        state.status = 'succeeded';
      })
      .addCase(fetchUsers.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export const { getUserById } = UsersSlice.actions;

export const getUsers = (state: RootState) => state.users.users;
export const getUser = (state: RootState) => state.users.user;
export const getStatus = (state: RootState) => state.users.status;

export default UsersSlice.reducer;
