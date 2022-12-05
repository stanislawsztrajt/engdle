import { Iuser } from 'features/users/types';
import Cookies from 'js-cookie';

export const user = Cookies.get('user')
  ? JSON.parse(JSON.parse(JSON.stringify(Cookies.get('user'))))
  : (undefined as unknown as Iuser);
export const jwt = Cookies.get('jwt');
export const authHeader = { headers: { Authorization: `Bearer ${jwt}` } };

export const maxLengthText = 150;
