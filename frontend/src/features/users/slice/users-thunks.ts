import { createAsyncThunk } from '@reduxjs/toolkit';
import usersServices from 'utils/api/users-services';

export const fetchUsers = createAsyncThunk('users', async () => {
  return await usersServices.getAll();
});

export const fetchUser = createAsyncThunk('user', async (id: number) => {
  return await usersServices.getById(id);
});
