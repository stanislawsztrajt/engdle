import { Itext } from '../types';

export interface ItextsInitialStateSlice {
  texts: Itext[];
  textsCopy: Itext[];
  status: 'loading' | 'failed' | 'succeeded';
}

export const textsInitialStateSlice: ItextsInitialStateSlice = {
  texts: [],
  textsCopy: [],
  status: 'loading',
};
