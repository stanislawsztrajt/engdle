import React from 'react';
import { render } from '@testing-library/react';
import SearchTextInput from './search-text-input';

test('should render SearchTextInput', () => {
  const { getByText } = render(<SearchTextInput />);

  expect(getByText('')).toBeInTheDocument();
});
