import axios from 'axios';
import { Iuser } from 'features/users/types';

const url = `${process.env.REACT_APP_API_URL}/auth`;

export interface IloginResponse {
  jwt: string;
  user: Iuser;
}

class AuthServices {
  async login(user: { email: string; password: string }): Promise<IloginResponse> {
    const { data } = await axios.post(`${url}/login`, user, {
      headers: {
        'Access-Control-Allow-Origin': "*",
        'Access-Control-Allow-Methods': "POST, GET, OPTIONS, DELETE, PUT",
        'Access-Control-Allow-Headers': "append,delete,entries,foreach,get,has,keys,set,values,Authorization"
      }
    });
    return data;
  }
}

export default new AuthServices();
