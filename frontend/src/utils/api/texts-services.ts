import axios from 'axios';
import { IcreateText, Itext } from 'features/texts/types';
import { authHeader } from 'utils/constans';

const url = `${process.env.REACT_APP_API_URL}/texts`;

class TextsServices {
  async getAll(): Promise<Itext[]> {
    const { data } = await axios.get(url);
    return data;
  }

  async getById(id: number): Promise<Itext> {
    const { data } = await axios.get(`${url}/${id}`);
    return data;
  }

  async create(text: IcreateText): Promise<Itext> {
    const { data } = await axios.post(`${url}`, text, authHeader);
    return data;
  }

  async update(id: number, text: Partial<Itext>): Promise<Itext> {
    console.log(id);
    console.log(text);
    const { data } = await axios.patch(`${url}/${id}`, text, authHeader);
    console.log(data);
    return data;
  }

  async remove(id: number): Promise<Itext> {
    const { data } = await axios.delete(`${url}/${id}`, authHeader);
    return data;
  }
}

export default new TextsServices();
