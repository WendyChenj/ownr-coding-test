import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import ImageContainer from './ImageContainer';

const imageUrlMock = null;
const loadingMock = false;

test('Text rendering without any images or sending requests', () => {
  render(<ImageContainer imageUrl={imageUrlMock} loading={loadingMock} />);

  expect(screen.getByRole('image-container')).toHaveTextContent('Wanna see some cute kitties or sharks?');
});