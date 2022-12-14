import React, { FC } from 'react';
import { getTexts } from 'features/texts/slice/texts-slice';
import { useSelector } from 'react-redux';
import {
  CreateTextForm,
  SortTextsSelect,
  TextList,
  SearchTextInput,
  TextsLanguagesFilters,
} from 'features/texts';
import FlashCardBox from 'features/flash-cards/flash-card-box';

const Texts: FC = () => {
  const texts = useSelector(getTexts);

  return (
    <main className="mt-24">
      <FlashCardBox numberOfFlashCards={5} isAutoOpen={true} />
      <h1 className="mt-8 text-5xl font-medium text-center">Your texts</h1>
      <section>
        <CreateTextForm />
      </section>
      <section className="flex flex-col mt-12">
        <div className="flex flex-row justify-center gap-6 mb-2">
          <SearchTextInput />
          <SortTextsSelect />
        </div>
        <TextsLanguagesFilters />
      </section>
      <section className="mt-4">
        <TextList texts={texts} />
      </section>
    </main>
  );
};

export default Texts;
