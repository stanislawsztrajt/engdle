import axios from "axios";
import { Iuser } from "features/users/types";

const url = `${process.env.NEXT_PUBLIC_API_URL}/auth`;

export interface IloginResponse {
  jwt: string;
  user: Iuser
}

export class AuthServices {
  async login (user: { email: string, password: string }): Promise<IloginResponse> {
    const { data } = await axios.post(`${url}/login`, user);
    return data;
  }
}

export default new AuthServices();

