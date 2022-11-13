import { debounce } from 'lodash';
import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import aiTranslateServices from 'utils/api/ai-translate-services';
import textsServices from 'utils/api/texts-services';
import { addText, getTexts } from '../slice/texts-slice';
import { IcreateText } from '../types';


const useCreateTextForm = () => {
  const dispatch = useDispatch();
  const texts = useSelector(getTexts)

  const [error, setError] = useState('')
  const [text, setText] = useState<IcreateText>({
    text: '',
    translatedText: '',
    language: {
      from: 'en',
      to: 'pl',
    },
  });

  const translateText = async (currentText: IcreateText) => {
    const { result } = await aiTranslateServices.translateText(
      currentText.language.from,
      currentText.language.to,
      currentText.text
    );

    setText({
      ...text,
      translatedText: result,
      text: currentText.text,
      language: {
        from: currentText.language.from,
        to: currentText.language.to,
      },
    });
  };

  const changeLanguageFrom = (languageCode: string) => {
    if (languageCode === text.language.to) {
      return swapLanguages()
    }

    text.language.from = languageCode;
    translateText(text);
  };

  const changeLanguageTo = (languageCode: string) => {
    if (languageCode === text.language.from) {
      return swapLanguages()
    }

    text.language.to = languageCode;
    translateText(text);
  };

  const swapLanguages = () => {
    const swappedLanguages = {
      language: {
        from: text.language.to,
        to: text.language.from,
      },
      text: text.translatedText,
      translatedText: text.text,
    };

    setText({ ...text, ...swappedLanguages });
  };

  const createText = async () => {
    if (texts.some(prevText => prevText.text.toLocaleLowerCase() === text.text.toLocaleLowerCase() && prevText.translatedText.toLocaleLowerCase() === text.translatedText.toLocaleLowerCase())) {
      return setError('Text already exists')
    }

    const data = await textsServices.create(text);
    dispatch(addText(data));
    setError('')
  };

  const debouncedTranslateText = useCallback(debounce(translateText, 1000), []);

  useEffect(() => {
    setError('')
    if (text.text === '') {
      return;
    }

    debouncedTranslateText(text);
  }, [text.text]);


  return {
    text,
    error,
    changeLanguageFrom,
    changeLanguageTo,
    setText,
    createText,
    swapLanguages,
  };
};

export default useCreateTextForm;
