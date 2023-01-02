import React from 'react';
import { render } from '@testing-library/react';
import StoryList from './story-list';

test('should render StoryList', () => {
  const { getByText } = render(<></>);

  expect(getByText('')).toBeInTheDocument();
});
