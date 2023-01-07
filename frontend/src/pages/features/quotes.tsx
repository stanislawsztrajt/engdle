import QuoteList from 'features/quotes/quote-list';
import { Loading } from 'features/ui';
import React, { FC, useEffect, useState } from 'react';
import apiNinjasQuotesServices, { Iquote } from 'utils/api/api-ninjas-quotes-services';

const Quotes: FC = () => {
  const [quotes, setQuotes] = useState<Iquote[]>([]);
  const [loading, setLoading] = useState(true);
  const [firstLoading, setFirstLoading] = useState(true);

  const fetchQuotes = async () => {
    setLoading(true);
    const data = await apiNinjasQuotesServices.getTenQuotes();
    setQuotes((previous) => [...previous, ...data]);
    setLoading(false);
    setFirstLoading(false);
  };

  const fetchNextQuotes = async () => {
    await fetchQuotes();
    setTimeout(() => {
      document.getElementById(String(quotes.length - 2))?.scrollIntoView();
    }, 10);
  };

  useEffect(() => {
    fetchQuotes();
  }, []);

  return (
    <main className="flex flex-col items-center gap-8 p-4 mt-24">
      {firstLoading ? (
        <Loading />
      ) : (
        <>
          <QuoteList quotes={quotes} />
          <button
            disabled={loading}
            className="w-full lg:w-1/2 xl:w-1/4 button-bg"
            onClick={fetchNextQuotes}
          >
            {loading ? 'Loading...' : 'Fetch next quotes'}
          </button>
        </>
      )}
    </main>
  );
};

export default Quotes;
