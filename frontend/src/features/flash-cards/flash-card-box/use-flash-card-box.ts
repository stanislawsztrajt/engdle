import { getTexts } from 'features/texts/slice/texts-slice';
import { Itext } from 'features/texts/types';
import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { FlashCardProps } from './flash-card-box';

const useFlashCardBox = ({ numberOfFlashCards, isAutoOpen }: FlashCardProps) => {
  const texts = useSelector(getTexts);

  const [flashCardTexts, setFlashCardTexts] = useState<Itext[]>([]);
  const [currentTextIndex, setCurrentTextIndex] = useState<number>(0);
  const [translatedText, setTranslatedText] = useState('');
  const [result, setResult] = useState<boolean | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCorrectAnswerShow, setIsCorrectAnswerShow] = useState(false);

  const [isFinalResult, setIsFinalResult] = useState(false);
  const [correctness, setCorrectness] = useState(0);

  const drawRandomTexts = () => {
    const drawnTexts: Itext[] = [];

    for (let i = 0; drawnTexts.length <= numberOfFlashCards - 1; i++) {
      const drawnIndex: number = +(Math.random() * (texts.length - 1)).toFixed(0);
      const isDrawnTextAlreadyExistInDrawnTexts = drawnTexts.some(
        (text) => text.text === texts[drawnIndex].text
      );
      if (isDrawnTextAlreadyExistInDrawnTexts || texts[drawnIndex].isClosed) {
        continue;
      }

      drawnTexts.push(texts[drawnIndex]);
    }

    setFlashCardTexts(drawnTexts);
    setIsModalOpen(true);
  };

  useEffect(() => {
    if (!isAutoOpen) return;

    const date = new Date();
    const currentDate: string = JSON.stringify({
      yaer: date.getFullYear(),
      month: date.getMonth(),
      day: date.getDate(),
    });

    const dateOfLastVisit = Cookies.get('dateOfLastVisit') as string;
    if (currentDate === dateOfLastVisit) return;
    if (texts.length < 5) return;

    Cookies.set('dateOfLastVisit', currentDate);

    drawRandomTexts();
  }, [texts]);

  useEffect(() => {
    if (currentTextIndex === flashCardTexts.length - 1) {
      setIsFinalResult(true);
    }
  }, [result, currentTextIndex]);

  const resetState = () => {
    setTranslatedText('');
    setResult(null);
    setIsCorrectAnswerShow(false);
  };

  const increaseCurrentTextIndex = () => {
    if (currentTextIndex >= numberOfFlashCards - 1) return;
    resetState();
    setCurrentTextIndex(currentTextIndex + 1);
  };

  const decreaseCurrentTextIndex = () => {
    if (currentTextIndex <= 0) return;
    resetState();
    setCurrentTextIndex(currentTextIndex - 1);
  };

  const checkTranslatedTextCorrectness = () => {
    if (flashCardTexts[currentTextIndex].translatedText === translatedText.toLowerCase()) {
      setResult(true);
      setCorrectness(correctness + 1);
    } else {
      setResult(false);
    }
  };

  const closeFlashCardsBox = () => {
    setIsModalOpen(false);
  };

  return {
    flashCardTexts,
    currentTextIndex,
    result,
    translatedText,
    isModalOpen,
    isFinalResult,
    correctness,
    setTranslatedText,
    increaseCurrentTextIndex,
    decreaseCurrentTextIndex,
    checkTranslatedTextCorrectness,
    closeFlashCardsBox,
    isCorrectAnswerShow,
    setIsCorrectAnswerShow,
    drawRandomTexts,
  };
};

export default useFlashCardBox;
