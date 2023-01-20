import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';
import { act } from 'react-dom/test-utils';

describe('Teste o componente <NotFound.js />', () => {
  test('Teste se a página contém heading, e image', () => {
    const { history } = renderWithRouter(<App />);

    act(() => {
      history.push('/olha o problema');
    });

    const headingNotFound = screen.getByRole('heading', {
      name: /page requested not found/i,
    });

    const imgNotFound = screen.getByRole('img', {
      name: /pikachu crying because the page requested was not found/i,
    });

    expect(headingNotFound).toBeInTheDocument();
    expect(imgNotFound).toBeInTheDocument();
    expect(imgNotFound.src).toBe('https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif');
  });
});
