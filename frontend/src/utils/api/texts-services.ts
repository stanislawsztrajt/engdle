import axios from "axios";
import { Itext } from "features/texts/types";
import { authHeader } from "utils/constans";

const url = `${process.env.NEXT_PUBLIC_API_URL}/texts`;

export class UsersServices {
  async getAll(): Promise<Itext[]> {
    const { data } = await axios.get(url);
    return data;
  }

  async getById(id: number) : Promise<Itext>{
    const { data } = await axios.get(`${url}/${id}`);
    return data;
  }

  async create(text: Itext): Promise<Itext> {
    const { data } = await axios.post(`${url}`, text);
    return data;
  }

  async update(id: number, text: Itext): Promise<Itext> {
    const { data } = await axios.patch(`${url}/${id}`, text, authHeader);
    return data;
  }

  async remove(id: number): Promise<Itext> {
    const { data } = await axios.delete(`${url}/${id}`, authHeader);
    return data;
  }
}

export default new UsersServices();

