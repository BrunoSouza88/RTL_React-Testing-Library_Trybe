import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('Teste o componente <App.js />', () => {
  test('Teste se o topo da aplicação contém um conjunto fixo de links de navegação:', () => {
    renderWithRouter(<App />);

    const homeBtn = screen.getByRole('link', {
      name: /home/i,
    });

    const aboutBtn = screen.getByRole('link', {
      name: /about/i,
    });

    const favPokBtn = screen.getByRole('link', {
      name: /favorite pokémon/i,
    });

    const headHome = screen.getByRole('heading', {
      level: 2,
      name: /encountered pokémon/i,
    });

    userEvent.click(homeBtn);
    expect(homeBtn).toBeInTheDocument();
    expect(aboutBtn).toBeInTheDocument();
    expect(favPokBtn).toBeInTheDocument();
    expect(headHome).toBeInTheDocument();
  });
});
