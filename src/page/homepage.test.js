import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Homepage from './Homepage';

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(['https://founded.media/hiring/photos/sharks/11261840124_dc9ac72bbe_b.jpg']),
  })
);

test('loads cats images', async () => {
  render(<Homepage />)

  fireEvent.click(screen.getByText('Cats'));

  const image = await screen.findByRole('img');

  expect(image).toHaveAttribute('src', 'https://founded.media/hiring/photos/sharks/11261840124_dc9ac72bbe_b.jpg')
})