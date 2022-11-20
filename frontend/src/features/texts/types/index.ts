import { Iuser } from 'features/users/types';

export interface Ilanguage {
  from: string;
  to: string;
}

export interface Itext {
  id: number;
  text: string;
  translatedText: string;
  language: Ilanguage;
  isClosed: boolean;
  createdAt: Date;
  user?: Iuser;
}

export interface IcreateText {
  text: string;
  translatedText: string;
  language: Ilanguage;
}

export enum SortTypes {
  ALPHABETICALLY = 'alphabetically',
  LATEST = 'latest',
  OLDEST = 'oldest',
}

export type SortType = SortTypes.ALPHABETICALLY | SortTypes.LATEST | SortTypes.OLDEST

export const SortTypesList = Object.values(SortTypes)
