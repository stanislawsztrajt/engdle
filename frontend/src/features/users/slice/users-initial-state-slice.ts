import { Iuser } from '../types';

export interface IusersInitialStateSlice {
  user?: Iuser;
  users: Iuser[];
  status: 'loading' | 'failed' | 'succeeded';
}

export const usersInitialStateSlice: IusersInitialStateSlice = {
  users: [],
  status: 'loading',
};
