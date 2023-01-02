import React from 'react';
import { render } from '@testing-library/react';
import FlashCardBox from './flash-card-box';

test('should render FlashCardBox', () => {
  const { getByText } = render(<FlashCardBox numberOfFlashCards={5} isAutoOpen />);

  expect(getByText('')).toBeInTheDocument();
});
