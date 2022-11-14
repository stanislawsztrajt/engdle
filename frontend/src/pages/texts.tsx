import React, { FC } from 'react';
import { getTexts } from 'features/texts/slice/texts-slice';
import { useSelector } from 'react-redux';
import { CreateTextForm, SortTextsSelect, TextList, SearchTextInput } from 'features/texts';

const Texts: FC = () => {
  const texts = useSelector(getTexts);

  return (
    <main>
      <h1>Your texts</h1>
      <section>
        <CreateTextForm />
      </section>
      <section>
        <SortTextsSelect />
        <SearchTextInput />
      </section>
      <section>
        <TextList texts={texts} />
      </section>
    </main>
  );
};

export default Texts;
