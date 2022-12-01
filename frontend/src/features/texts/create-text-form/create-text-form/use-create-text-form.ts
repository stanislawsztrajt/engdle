import { debounce } from 'lodash';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import deeplTranslatorServices from 'utils/api/deepl-translator-services';
import textsServices from 'utils/api/texts-services';
import { addText, getTexts } from '../../slice/texts-slice';
import { IcreateText } from '../../types';

const useCreateTextForm = () => {
  const dispatch = useDispatch();
  const texts = useSelector(getTexts);

  const createTextInput = useRef<HTMLInputElement>(null);

  const [error, setError] = useState('');
  const [text, setText] = useState<IcreateText>({
    text: '',
    translatedText: '',
    language: {
      from: 'EN',
      to: 'PL',
    },
  });

  const translateText = async (currentText: IcreateText) => {
    if (currentText.text === '') {
      setText({ ...text, translatedText: '' })
      return;
    }

    const data = await deeplTranslatorServices.translateText(
      currentText.language.from,
      currentText.language.to,
      [currentText.text.toLowerCase()]
    );

    setText({
      ...text,
      translatedText: data.text,
      text: currentText.text,
      language: {
        from: currentText.language.from,
        to: currentText.language.to,
      },
    });
  };

  const changeLanguageFrom = (languageCode: string) => {
    if (languageCode === text.language.to) {
      return swapLanguages();
    }

    text.language.from = languageCode;

    if (text.text === '') {
      return;
    }

    translateText(text);
  };

  const changeLanguageTo = (languageCode: string) => {
    if (languageCode === text.language.from) {
      return swapLanguages();
    }

    text.language.to = languageCode;

    if (text.text === '') {
      return;
    }

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

    translateText(swappedLanguages);
    setText({ ...text, ...swappedLanguages });
  };

  const createText = async () => {
    if (
      texts.some(
        (prevText) =>
          prevText.text.toLocaleLowerCase() === text.text.toLocaleLowerCase() &&
          prevText.translatedText.toLocaleLowerCase() === text.translatedText.toLocaleLowerCase()
      )
    ) {
      return setError('Text already exists');
    }

    setError('');
    setText({
      ...text,
      text: '',
      translatedText: '',
    });
    createTextInput.current?.focus();
    const data = await textsServices.create(text);
    dispatch(addText(data));
  };

  const debouncedTranslateText = useCallback(debounce(translateText, 1000), []);

  useEffect(() => {
    setError('');
    debouncedTranslateText(text);
  }, [text.text]);

  return {
    text,
    error,
    createTextInput,
    changeLanguageFrom,
    changeLanguageTo,
    setText,
    createText,
    swapLanguages,
  };
};

export default useCreateTextForm;
