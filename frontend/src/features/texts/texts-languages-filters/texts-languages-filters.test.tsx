import React from 'react';
import { render } from '@testing-library/react';
import TextsLanguagesFilters from './texts-languages-filters';

test('should render TextsLanguagesFilters', () => {
  const { getByText } = render(<TextsLanguagesFilters />);

  expect(getByText('')).toBeInTheDocument();
});
  