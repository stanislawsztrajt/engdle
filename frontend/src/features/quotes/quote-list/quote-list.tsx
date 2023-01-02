import React, { FC } from 'react';
import { Iquote } from 'utils/api/api-ninjas-quotes-services';
import QuoteItem from '../quote-item/quote-item';

interface Props {
  quotes: Iquote[];
}

const QuoteList: FC<Props> = ({ quotes }) => {
  return (
    <>
      {quotes.map((quote, index) => {
        return <QuoteItem index={index} key={quote.author + Math.random()} quote={quote} />;
      })}
    </>
  );
};

export default QuoteList;
