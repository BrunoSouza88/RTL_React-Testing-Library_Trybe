import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('Teste o componente <Pokedex.js />', () => {
  test('Teste se a página contém um heading h2 com o texto Encountered Pokémon', () => {
    renderWithRouter(<App />);

    const headHome = screen.getByRole('heading', {
      level: 2,
      name: /encountered pokémon/i,
    });

    expect(headHome).toBeInTheDocument();
  });

  test('Teste se é exibido o próximo Pokémon da lista quando o botão Próximo Pokémon é clicado', () => {
    renderWithRouter(<App />);

    const fireBtn = screen.getByRole('button', {
      name: /fire/i,
    });

    userEvent.click(fireBtn);

    const pokeNameChar = screen.getByRole('img', { name: /charmander sprite/i });
    expect((pokeNameChar)).toBeInTheDocument();

    const pokeTypes = screen.getAllByTestId('pokemon-type-button')[1];
    userEvent.click(pokeTypes);
    const pokeValue = screen.getByTestId('pokemon-name').innerHTML;
    expect(pokeValue).toBe('Charmander');

    const nextPokBtn = screen.getByRole('button', {
      name: /próximo pokémon/i,
    });

    userEvent.click(nextPokBtn);
    const pokeRap = screen.getByTestId('pokemon-name').innerHTML;
    expect(pokeRap).toBe('Rapidash');

    const allBtn = screen.getByRole('button', {
      name: /all/i,
    });
    userEvent.click(allBtn);

    const pokePikachu = screen.getByText(/pikachu/i);
    expect(pokePikachu).toBeInTheDocument();
  });
});
