import React from 'react';
import { render } from '@testing-library/react';
import SortTextsSelect from './sort-texts-select';

test('should render SortTextsSelect', () => {
  const { getByText } = render(<SortTextsSelect />);

  expect(getByText('')).toBeInTheDocument();
});
