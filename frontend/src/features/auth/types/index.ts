import { Iuser } from 'features/users/types';
import { Iresponse } from 'utils/types/api';

export interface Ilogin {
  email: string;
  password: string;
}

export type IloginResponseData = Iresponse<{
  jwt: string;
  user: Iuser;
}>;

export interface Iregister {
  username: string;
  email: string;
  password: string;
}

export interface IregisterForm extends Iregister {
  repeatedPassword: string;
}
