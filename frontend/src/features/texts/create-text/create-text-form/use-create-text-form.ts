import { debounce } from 'lodash';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import deeplTranslatorServices from 'utils/api/deepl-translator-services';
import textsServices from 'utils/api/texts-services';
import { addText, getTexts } from '../../slice/texts-slice';
import { IcreateText, Itext } from '../../types';

const useCreateTextForm = () => {
  const dispatch = useDispatch();
  const texts = useSelector(getTexts);

  const createTextInput = useRef<HTMLInputElement>(null);

  const [createLoading, setCreateLoading] = useState(false);
  const [loading, setLoading] = useState(false);
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
    setLoading(true);
    if (currentText.text === '') {
      setText((previousText) => ({ ...previousText, translatedText: '' }));
      setLoading(false);
      return;
    }

    const data = await deeplTranslatorServices.translateText(
      currentText.language.from,
      currentText.language.to,
      [currentText.text.toLowerCase()]
    );

    setText((previousText) => ({
      ...previousText,
      translatedText: data.text,
      text: currentText.text,
      language: {
        from: currentText.language.from,
        to: currentText.language.to,
      },
    }));

    setLoading(false);
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
    setText((previousText) => ({ ...previousText, ...swappedLanguages }));
  };

  const createText = async () => {
    setCreateLoading(true);
    if (
      texts.some(
        (prevText: Itext) =>
          prevText.text.toLocaleLowerCase() === text.text.toLocaleLowerCase() &&
          prevText.translatedText.toLocaleLowerCase() === text.translatedText.toLocaleLowerCase()
      )
    ) {
      return setError('Text already exists');
    }

    setError('');
    setText((previousText) => ({
      ...previousText,
      text: '',
      translatedText: '',
    }));
    const data = await textsServices.create(text);
    dispatch(addText(data));
    setCreateLoading(false);
  };

  const debouncedTranslateText = useCallback(debounce(translateText, 1000), []);
  useEffect(() => {
    setError('');
    debouncedTranslateText(text);
  }, [text.text]);

  useEffect(() => {
    createTextInput.current?.focus();
  }, [createLoading, loading])

  return {
    text,
    error,
    createTextInput,
    loading,
    createLoading,
    changeLanguageFrom,
    changeLanguageTo,
    setText,
    createText,
    swapLanguages,
  };
};

export default useCreateTextForm;
