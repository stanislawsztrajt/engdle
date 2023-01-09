import React from 'react';
import { render } from '@testing-library/react';
import ComponentLoading from './component-loading';

test('should render ComponentLoading', () => {
  const { getByText } = render(<ComponentLoading />);

  expect(getByText('')).toBeInTheDocument();
});
  