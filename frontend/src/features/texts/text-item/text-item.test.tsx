import React from 'react';
import { render } from '@testing-library/react';
import TextItem from './text-item';

const textMock = {
  id: 1,
  text: 'tekst',
  translatedText: 'text',
  isClosed: false,
  createdAt: new Date(),
  language: {
    from: 'PL',
    to: 'ENG',
  },
};

test('should render TextItem', () => {
  const { getByText } = render(<TextItem text={textMock} />);

  expect(getByText('')).toBeInTheDocument();
});
