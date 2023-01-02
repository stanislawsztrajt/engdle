import axios from 'axios';
const url = `https://api.api-ninjas.com/v1/quotes`;

export interface Iquote {
  quote: string;
  author: string;
  category: string;
}

export interface IquotesResponse {
  data: Iquote[];
}

class ApiNinjasQuotesServices {
  async getTenQuotes(): Promise<Iquote[]> {
    const { data }: IquotesResponse = await axios.get(`${url}?limit=10`, {
      headers: { 'X-Api-Key': process.env.REACT_APP_API_NINJAS_API_KEY },
    });

    return data;
  }
}

export default new ApiNinjasQuotesServices();
