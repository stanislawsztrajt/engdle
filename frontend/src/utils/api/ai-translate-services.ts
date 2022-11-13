import axios from 'axios';
import { authHeader } from 'utils/constans';

const url = `https://ai-translate.pro/api/${process.env.REACT_APP_AI_TRANSLATE_API_KEY}`;

export interface IaiTranslateResponse {
  result: string;
  available_chars: number;
}

export interface Ierror {
  message: string;
}

class AiTranslateService {
  async translateText(
    languageFrom: string,
    languageTo: string,
    text: string
  ): Promise<IaiTranslateResponse> {
    const { data }: { data: IaiTranslateResponse } = await axios.post(`${url}/${languageFrom}-${languageTo}`, { text }, authHeader);

    if (data.result) {
      data.result = data.result.toLocaleLowerCase()
    }

    return data;
  }
}

export default new AiTranslateService();
