import axios from 'axios';
import { authHeader } from 'utils/constans';

const url = `https://ai-translate.pro/api/${process.env.REACT_APP_AI_TRANSLATE_API_KEY}`;

export interface IaiTranslateResponse {
  result: string;
  available_chars: number;
}

class AiTranslateService {
  async translateText(
    languageFrom: string,
    languageTo: string,
    text: string
  ): Promise<IaiTranslateResponse> {
    const { data } = await axios.post(`${url}/${languageFrom}-${languageTo}`, { text }, authHeader);
    return data;
  }
}

export default new AiTranslateService();
