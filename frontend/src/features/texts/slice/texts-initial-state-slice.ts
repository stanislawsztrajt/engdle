import { ResponseStatus, StatusType } from 'utils/types/api';
import { Ilanguage, Itext } from '../types';

export interface ItextsInitialStateSlice {
  texts: Itext[];
  textsCopy: Itext[];
  usedLanguages: Ilanguage[]
  status: StatusType;
}

export const textsInitialStateSlice: ItextsInitialStateSlice = {
  texts: [],
  textsCopy: [],
  usedLanguages: [],
  status: ResponseStatus.LOADING,
};
