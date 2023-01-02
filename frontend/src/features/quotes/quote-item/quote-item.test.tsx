import React from 'react';
import { render } from '@testing-library/react';
import QuoteItem from './quote-item';

test('should render QuoteItem', () => {
  const { getByText } = render(<QuoteItem index={1} quote={{} as any} />);

  expect(getByText('')).toBeInTheDocument();
});
