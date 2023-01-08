import axios from 'axios';
import { IregisterUser, Iuser } from 'features/users/types';
import { authHeader } from 'utils/constans';

const url = `${process.env.REACT_APP_API_URL}/users`;

class UsersServices {
  async getAll(): Promise<Iuser[]> {
    const { data } = await axios.get(url, {
      headers: {
        'Access-Control-Allow-Origin': "*",
        'Access-Control-Allow-Methods': "POST, GET, OPTIONS, DELETE, PUT",
        'Access-Control-Allow-Headers': "append,delete,entries,foreach,get,has,keys,set,values,Authorization"
      }
    });
    return data;
  }

  async getById(id: number): Promise<Iuser> {
    const { data } = await axios.get(`${url}/${id}`);
    return data;
  }

  async create(user: IregisterUser): Promise<Iuser> {
    const { data } = await axios.post(`${url}`, user);
    return data;
  }

  async update(id: number, user: Partial<Iuser>): Promise<Iuser> {
    const { data } = await axios.patch(`${url}/${id}`, user, authHeader);
    return data;
  }

  async remove(id: number): Promise<Iuser> {
    const { data } = await axios.delete(`${url}/${id}`, authHeader);
    return data;
  }
}

export default new UsersServices();
