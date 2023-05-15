import ComponentLoading from 'features/ui/component-loading'
import React, { FC } from 'react'
import useQuoteItemTranslateBox from './use-quote-item-translate-box'

export interface QuoteItemTranslateBoxProps {
  checker: number,
  setChecker: React.Dispatch<React.SetStateAction<number>>,
  word: string
}

const QuoteItemTranslateBox: FC<QuoteItemTranslateBoxProps> = ({ checker, setChecker, word }) => {
  const {
    loading,
    openBox,
    translatedWord,
    isTranslateWordBox
  } = useQuoteItemTranslateBox({ checker, setChecker, word })

  return(
    <>
      <div aria-disabled={loading} onClick={openBox} className='rounded cursor-pointer hover:bg-gray-200'>
        {word}
        { isTranslateWordBox ? (
          <div className='relative'>
            <div className='absolute flex p-2 -mt-20 -ml-1 bg-gray-100 border rounded shadow-lg'>
              {loading ? (
                <ComponentLoading />
              ) : (
                <div className='flex'>
                  <div>{word.replace(/[^a-zA-Z0-9 ]/g, "").toLowerCase()}</div>
                  <div>&nbsp;-&nbsp;</div>
                  <div>{translatedWord}</div>
                </div>
              )}
            </div>
          </div>
        ) : null }
      </div>&nbsp;
    </>
  )
}

export default QuoteItemTranslateBox