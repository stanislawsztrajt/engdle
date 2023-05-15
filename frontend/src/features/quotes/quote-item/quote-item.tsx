import ComponentLoading from 'features/ui/component-loading';
import React, { FC, useEffect, useState } from 'react';
import { Iquote } from 'utils/api/api-ninjas-quotes-services';
import deeplTranslatorServices from 'utils/api/deepl-translator-services';
import QuoteItemTranslateBox from '../quote-item-translate-box';

interface Props {
  quote: Iquote;
  index: number;
}

const QuoteItem: FC<Props> = ({ quote, index }) => {
  const [checker, setChecker] = useState(0);

  return (
    <>
      <div onClick={() => setChecker(checker + 1)} id={index.toString()} className="w-full p-4 border rounded-lg lg:w-2/3 xl:w-1/2">
        <div className="text-sm font-light">{quote.category}</div>
        <div className="flex flex-row flex-wrap text-lg ">
          {'"'}
          {quote.quote.split(' ').map(word => {
            return (
              <QuoteItemTranslateBox
                key={Math.random()}
                word={word}
                checker={checker}
                setChecker={setChecker}
              />
            )
          })}
          {/* {quote.quote.split(' ').map(word => {
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
              setChanger(changer + 1);
              setTimeout(() => {
                setIsTranslateWordBox(true);
              }, 0)
              translateWord()
            }

            useEffect(() => {
              setIsTranslateWordBox(false)
            }, [changer])

            return (
              <>
                <div aria-disabled={loading} onClick={openBox} className='rounded cursor-pointer hover:bg-gray-200' key={Math.random()}>
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
          })} */}
          {'"'}
        </div>
        <div className="-mt-1 text-base italic font-medium text-right">{quote.author}</div>
      </div>
    </>
  );
};

export default QuoteItem;