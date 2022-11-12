import React from 'react';
import { render } from '@testing-library/react';
import CreateTextForm from './create-text-form';

test('should render CreateTextForm', () => {
  const { getByText } = render(<CreateTextForm />);

  expect(getByText('')).toBeInTheDocument();
});
