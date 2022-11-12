import { Itext } from '../types';

export interface ItextsInitialStateSlice {
  texts: Itext[];
  status: 'loading' | 'failed' | 'succeeded';
}

export const textsInitialStateSlice: ItextsInitialStateSlice = {
  texts: [],
  status: 'loading',
};
