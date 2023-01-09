import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ModalLayout } from 'features/ui';
import React, { FC } from 'react';
import useFlashCardBox from './use-flash-card-box';

export interface FlashCardProps {
  numberOfFlashCards: number;
  isAutoOpen: boolean;
}

const FlashCardBox: FC<FlashCardProps> = (props) => {
  const {
    flashCardTexts,
    translatedText,
    currentTextIndex,
    correctness,

    result,
    isModalOpen,
    isCorrectAnswerShow,
    isFinalResult,

    setTranslatedText,
    setIsCorrectAnswerShow,

    increaseCurrentTextIndex,
    decreaseCurrentTextIndex,

    checkTranslatedTextCorrectness,
    closeFlashCardsBox,
    drawRandomTexts,
  } = useFlashCardBox(props);

  return (
    <>
      {isModalOpen ? (
        <ModalLayout>
          <div className="w-full p-4 bg-white border rounded shadow-md lg:w-1/2 xl:w-1/3">
            <button
              className="absolute text-2xl text-gray-600 duration-100 cursor-pointer hover:text-black"
              onClick={closeFlashCardsBox}
            >
              <FontAwesomeIcon icon={faXmark} />
            </button>

            {isFinalResult ? (
              <div>
                <h1 className="mt-4 text-4xl text-center">
                  Result of flash cards!
                  <br /> <br />
                  <span className="text-5xl">
                    {correctness}/{flashCardTexts.length}
                  </span>
                  <br /> <br />
                </h1>
              </div>
            ) : (
              <>
                <div className="absolute flex justify-end w-full -ml-10 text-gray-600 lg:w-1/2 xl:w-1/3">
                  {currentTextIndex + 1}/{props.numberOfFlashCards}
                </div>
                <h1 className="mt-4 text-4xl text-center">Flash cards!</h1>
                <div
                  className={`
                    mt-8 text-2xl text-center
                    ${result === null ? '' : result ? 'text-green-600' : 'text-red-600'}
                  `}
                >
                  {flashCardTexts[currentTextIndex]?.text}
                  {isCorrectAnswerShow
                    ? ` - ${flashCardTexts[currentTextIndex].translatedText}`
                    : null}
                </div>
                <form
                  className="flex flex-col items-center justify-center mt-4 "
                  onSubmit={(e) => {
                    e.preventDefault();
                    checkTranslatedTextCorrectness();
                  }}
                >
                  <input
                    type="text"
                    className="w-full input-underline lg:w-2/3 xl:w-1/2"
                    value={translatedText}
                    onChange={(e) => {
                      setTranslatedText(e.target.value);
                    }}
                    placeholder="Translate text"
                  />
                  <button className="w-full mt-4 lg:w-1/2 xl:w-1/3 button-bg">Check</button>
                </form>

                <button
                  onClick={() => setIsCorrectAnswerShow(true)}
                  className="w-full mt-4 text-center text-gray-500 underline duration-100 hover:text-gray-700"
                >
                  Show correct answer
                </button>

                <div className="flex justify-between gap-4 mt-12">
                  <button className="button" onClick={decreaseCurrentTextIndex}>
                    Back
                  </button>
                  <button className="button-bg" onClick={increaseCurrentTextIndex}>
                    {currentTextIndex === props.numberOfFlashCards -1 ? 'End' : 'Next'}
                  </button>
                </div>
              </>
            )}
          </div>
        </ModalLayout>
      ) : (
        <>
          {props.isAutoOpen ? null : (
            <button className="button-bg" onClick={drawRandomTexts}>
              Draw flash cards
            </button>
          )}
        </>
      )}
    </>
  );
};

export default FlashCardBox;
