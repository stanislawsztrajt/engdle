import React from 'react';
import { render } from '@testing-library/react';
import TextList from './text-list';
import { Itext } from '../types';

const textsMock: Itext[] = [
  {
    id: 1,
    text: 'tekst',
    translatedText: 'text',
    isClosed: false,
    createdAt: new Date(),
    language: {
      from: 'PL',
      to: 'ENG',
    },
  },
  {
    id: 2,
    text: 'tekst',
    translatedText: 'text',
    isClosed: false,
    createdAt: new Date(),
    language: {
      from: 'PL',
      to: 'ENG',
    },
  },
];

test('should render TextList', () => {
  const { getByText } = render(<TextList texts={textsMock} />);

  expect(getByText('')).toBeInTheDocument();
});
