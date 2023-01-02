import React from 'react';
import { render } from '@testing-library/react';
import StoryItem from './story-item';

test('should render StoryItem', () => {
  const { getByText } = render(<></>);

  expect(getByText('')).toBeInTheDocument();
});
