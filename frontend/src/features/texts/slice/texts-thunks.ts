import { createAsyncThunk } from '@reduxjs/toolkit';
import textsServices from 'utils/api/texts-services';
import usersServices from 'utils/api/users-services';
import { Itext } from '../types';

export const fetchTexts = createAsyncThunk('users', async () => {
  return await textsServices.getAll();
});

export const fetchUserTexts = createAsyncThunk('user texts', async (id: number) => {
  return (await (
    await usersServices.getById(id)
  ).texts) as Itext[];
});
