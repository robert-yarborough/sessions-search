import React from 'react';
import { render } from '@testing-library/react';
import AppClass from './AppClass';

test('renders learn react link', () => {
  const { getByText } = render(<AppClass />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
