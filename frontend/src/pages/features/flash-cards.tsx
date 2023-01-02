import FlashCardBox from 'features/flash-cards/flash-card-box/flash-card-box';
import { getTexts } from 'features/texts/slice/texts-slice';
import React, { FC, useState } from 'react';
import { useSelector } from 'react-redux';

const FlashCards: FC = () => {
  const [numberOfFlashCards, setNumberOfFlashCards] = useState(1);
  const texts = useSelector(getTexts);

  return (
    <main className="flex flex-col items-center justify-center h-screen">
      {texts.length === 0 ? (
        <div>You don&apos;t have any text</div>
      ) : (
        <div>
          <div className="flex flex-row">
            <input
              className="text-center input-underline"
              min={1}
              max={texts.length - 1}
              value={numberOfFlashCards}
              onChange={(e) => setNumberOfFlashCards(+e.target.value)}
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
