import React, { FC } from 'react';
import { Iquote } from 'utils/api/api-ninjas-quotes-services';

interface Props {
  quote: Iquote;
  index: number;
}

const QuoteItem: FC<Props> = ({ quote, index }) => {
  return (
    <div id={index.toString()} className="w-full p-4 border rounded-lg lg:w-2/3 xl:w-1/2">
      <div className="text-sm font-light">{quote.category}</div>
      <p className="text-lg">
        {'"'}
        {quote.quote}
        {'"'}
      </p>
      <div className="-mt-1 text-base italic font-medium text-right">{quote.author}</div>
    </div>
  );
};

export default QuoteItem;
