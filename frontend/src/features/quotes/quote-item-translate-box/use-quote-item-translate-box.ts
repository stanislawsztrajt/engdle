import { useEffect, useState } from "react";
import deeplTranslatorServices from "utils/api/deepl-translator-services";
import { QuoteItemTranslateBoxProps } from "./quote-item-translate-box";

const useQuoteItemTranslateBox = ({ checker, setChecker, word }: QuoteItemTranslateBoxProps) => {
  const [loading, setLoading] = useState(false);
  const [isTranslateWordBox, setIsTranslateWordBox] = useState(false);
  const [translatedWord, setTraslatedWord] = useState('');

  const translateWord = async () => {
    if (translatedWord !== '') return
    setLoading(true)
    const res = await deeplTranslatorServices.translateText(
      'EN',
      'PL',
      [word.replace(/[^a-zA-Z0-9 ]/g, "").toLowerCase()]
    )
    setTraslatedWord(res.text);
    setLoading(false)
  }

  const openBox = () => {
    setTimeout(() => {
      setIsTranslateWordBox(true);
      translateWord()
    }, 100)
  }

  const closeBox = () => {
    setIsTranslateWordBox(false);
  }

  useEffect(() => {
    setIsTranslateWordBox(false)
  }, [checker])

  return {
    loading,
    isTranslateWordBox,
    openBox,
    closeBox,
    translatedWord,
    setIsTranslateWordBox
  }
}

export default useQuoteItemTranslateBox
  