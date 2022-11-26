import { ResponseStatus, StatusType } from 'utils/types/api';
import { IfilterTextsOptions, Itext } from '../types';

export interface ItextsInitialStateSlice {
  texts: Itext[];
  textsCopy: Itext[];
  filterTextsOptions: IfilterTextsOptions;
  status: StatusType;
}

export const textsInitialStateSlice: ItextsInitialStateSlice = {
  texts: [],
  textsCopy: [],
  status: ResponseStatus.LOADING,
  filterTextsOptions: {
    languages: [],
    text: '',
  },
};
