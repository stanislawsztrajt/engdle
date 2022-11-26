import deepl, { DeeplLanguages } from 'deepl';

export interface IDeeplValues {
  detected_source_language: string;
  text: string;
}

export interface IDeeplTranslatorResponse {
  translations: IDeeplValues[];
}

export interface Ierror {
  message: string;
}

class DeeplTranslatorService {
  async translateText(
    languageFrom: string,
    languageTo: string,
    text: string[]
  ): Promise<IDeeplValues> {
    const {
      data: { translations },
    } = await deepl({
      free_api: true,
      text: text[0],
      target_lang: languageTo as DeeplLanguages,
      source_lang: languageFrom as DeeplLanguages,
      auth_key: process.env.REACT_APP_DEEPL_TRANSLATOR_API_KEY as string,
    });

    return translations[0];
  }
}

export default new DeeplTranslatorService();
