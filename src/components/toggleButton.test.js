import React from 'react';
import { render, screen } from '@testing-library/react';

import ToggleButton from './ToggleButton';

const clickMock = () => { };
const buttonTitleMock = 'cats';
const buttonActiveMock = false;

test('check button title', () => {
  render(<ToggleButton handleClick={clickMock} buttonTitle={buttonTitleMock} buttonActive={buttonActiveMock} />);

  expect(screen.getByRole('button').textContent).toBe('cats');
});