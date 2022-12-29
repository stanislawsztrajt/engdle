import { ModalLayout } from 'features/ui'
import React, { FC } from 'react'
import useFlashCardBox, { numberOfFlashCards } from './use-flash-card-box'

const FlashCardBox: FC = () => {
  const {
    flashCardTexts,
    currentTextIndex,
    result,
    isModalOpen,
    setTranslatedText,
    increaseCurrentTextIndex,
    decreaseCurrentTextIndex,
    checkTranslatedTextCorrectness, 
    closeFlashCardsBox
  } = useFlashCardBox()

  return(
    <>
      { isModalOpen ? (
        <ModalLayout>
          <div className='w-full p-4 bg-white border rounded shadow-md lg:w-1/2 xl:w-1/3'>
            <h2>
              Text to translate
            </h2>
            <h3>
              Translated Text
              <input type="text" onChange={(e) => setTranslatedText(e.target.value)} placeholder='translated text' />
              <button>translate</button>
            </h3>
            <div>
              {currentTextIndex+1}/{numberOfFlashCards}
            </div>
            <div>
              {flashCardTexts[currentTextIndex]?.text}
            </div>

            { result === null ? '' : (result ? 'correct' : 'uncorrect') }

            <button onClick={closeFlashCardsBox}>close flash cards</button>

            <button onClick={checkTranslatedTextCorrectness}>
              Check
            </button>

            <button onClick={decreaseCurrentTextIndex}>
              Back
            </button>
            <button onClick={increaseCurrentTextIndex}>
              Next
            </button>
          </div>
        </ModalLayout>
      ) : null }
    </>
  )
}

export default FlashCardBox