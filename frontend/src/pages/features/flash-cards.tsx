import FlashCardBox from 'features/flash-cards/flash-card-box/flash-card-box';
import { getTexts } from 'features/texts/slice/texts-slice';
import React, { FC, useState } from 'react';
import { useSelector } from 'react-redux';

const FlashCards: FC = () => {
  const [numberOfFlashCards, setNumberOfFlashCards] = useState(1);
  const texts = useSelector(getTexts);

  const handleNumberOfFlashCards = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = parseInt(e.target.value);
    if (value === 0) {
      value = 1;
    }

    if (value >= texts.length) {
      value = texts.length - 1;
    }

    setNumberOfFlashCards(value);
  };

  return (
    <main className="flex flex-col items-center justify-center h-screen">
      {texts.length === 0 ? (
        <div>You don&apos;t have any text</div>
      ) : (
        <div>
          <div className="flex flex-row">
            <input
              className="text-center input-underline w-36"
              min={1}
              max={texts.length - 1}
              value={numberOfFlashCards}
              onChange={(e) => handleNumberOfFlashCards(e)}
              type="number"
              placeholder="Number of flash cards"
            />
            <button onClick={() => setNumberOfFlashCards(texts.length - 1)} className="ml-6 button">
              All
            </button>
          </div>
          <div className="mt-8">
            <FlashCardBox numberOfFlashCards={numberOfFlashCards} isAutoOpen={false} />
          </div>
        </div>
      )}
    </main>
  );
};

export default FlashCards;
