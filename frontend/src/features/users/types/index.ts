import { Itext } from 'features/texts/types';

export interface IregisterUser {
  username: string;
  email: string;
  password: string;
}

export interface Iuser {
  id: string;
  username: string;
  email: string;
  texts?: Itext[];
}
