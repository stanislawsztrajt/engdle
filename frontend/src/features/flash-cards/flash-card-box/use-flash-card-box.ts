import { getTexts } from "features/texts/slice/texts-slice"; 
import { Itext } from "features/texts/types";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export const numberOfFlashCards = 5


const useFlashCardBox = () => {
  const dispatch = useDispatch();
  const texts = useSelector(getTexts);

  const [flashCardTexts, setFlashCardTexts] = useState<Itext[]>([]);
  const [currentTextIndex, setCurrentTextIndex] = useState<number>(0);
  const [translatedText, setTranslatedText] = useState('')
  const [result, setResult] = useState<boolean | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const date = new Date()
    const currentDate: string = JSON.stringify({
      yaer: date.getFullYear(),
      month: date.getMonth(),
      day: date.getDate()
    })

    const dateOfLastVisit = Cookies.get('dateOfLastVisit') as string;
    console.log(currentDate)
    console.log(dateOfLastVisit)
    if (currentDate === dateOfLastVisit) {
      return
    }

    setIsModalOpen(true)
    Cookies.set('dateOfLastVisit', currentDate);
  }, [])

  useEffect(() => {
    if (texts.length === 0) return

    const drawnTexts: Itext[] = [];
    for (let i = 0; drawnTexts.length < numberOfFlashCards; i++) {
      const drawnIndex: number = +((Math.random()*(texts.length-1)).toFixed(0))

      const isDrawnTextAlreadyExistInDrawnTexts = drawnTexts.some(text => text.text === texts[drawnIndex].text)
      if (isDrawnTextAlreadyExistInDrawnTexts) {
        continue
      }

      drawnTexts.push(texts[drawnIndex])
    }

    setFlashCardTexts(drawnTexts)
  }, [texts])

  const increaseCurrentTextIndex = () => {
    if (currentTextIndex >= 4) return
    setCurrentTextIndex(currentTextIndex + 1)
  }

  const decreaseCurrentTextIndex = () => {
    if (currentTextIndex <= 0) return
    setCurrentTextIndex(currentTextIndex - 1)
  }

  const checkTranslatedTextCorrectness = () => {
    if (flashCardTexts[currentTextIndex].translatedText === translatedText.toLowerCase()) {
      setResult(true)
    } else {
      setResult(false)
    }
  }

  const closeFlashCardsBox = () => {
    setIsModalOpen(false)
  }


  return {
    flashCardTexts,
    currentTextIndex,
    result,
    isModalOpen,
    setTranslatedText,
    increaseCurrentTextIndex,
    decreaseCurrentTextIndex,
    checkTranslatedTextCorrectness,
    closeFlashCardsBox
  }
}

export default useFlashCardBox