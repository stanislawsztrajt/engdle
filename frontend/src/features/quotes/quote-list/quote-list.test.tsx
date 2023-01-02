import React from 'react';
import { render } from '@testing-library/react';
import QuoteList from './quote-list';

test('should render QuoteList', () => {
  const { getByText } = render(<QuoteList quotes={[]} />);

  expect(getByText('')).toBeInTheDocument();
});
