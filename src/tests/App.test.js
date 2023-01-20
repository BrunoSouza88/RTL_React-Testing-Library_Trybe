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

    const pokeName = screen.queryByTestId('pokemon-name');

    const pokeWeight = screen.getByTestId('pokemon-weight');

    const pokeImg = screen.getByRole('img');

    const moreDetails = screen.getByRole('link', {
      name: /more details/i,
    });

    const allBtn = screen.getByRole('button', {
      name: /all/i,
    });

    const eletricBtn = screen.getByRole('button', {
      name: /Electric/i,
    });

    const fireBtn = screen.getByRole('button', {
      name: /Fire/i,
    });

    const bugBtn = screen.getByRole('button', {
      name: /Bug/i,
    });

    const poisonBtn = screen.getByRole('button', {
      name: /Poison/i,
    });

    const psyBtn = screen.getByRole('button', {
      name: /Psychic/i,
    });

    const normalBtn = screen.getByRole('button', {
      name: /Normal/i,
    });

    const dragonBtn = screen.getByRole('button', {
      name: /Dragon/i,
    });

    const nextPokeBtn = screen.getByRole('button', {
      name: /próximo pokémon/i,
    });

    userEvent.click(homeBtn);
    expect(homeBtn).toBeInTheDocument();
    expect(aboutBtn).toBeInTheDocument();
    expect(favPokBtn).toBeInTheDocument();
    expect(headHome).toBeInTheDocument();
    expect(pokeName).toBeInTheDocument();
    expect(pokeWeight).toBeInTheDocument();
    expect(pokeImg).toBeInTheDocument();
    expect(pokeImg.src).toBe('https://archives.bulbagarden.net/media/upload/b/b2/Spr_5b_025_m.png');
    expect(moreDetails).toBeInTheDocument();
    expect(allBtn).toBeInTheDocument();
    expect(eletricBtn).toBeInTheDocument();
    expect(fireBtn).toBeInTheDocument();
    expect(bugBtn).toBeInTheDocument();
    expect(poisonBtn).toBeInTheDocument();
    expect(psyBtn).toBeInTheDocument();
    expect(normalBtn).toBeInTheDocument();
    expect(dragonBtn).toBeInTheDocument();
    expect(nextPokeBtn).toBeInTheDocument();

    userEvent.click(aboutBtn);

    const headAbout = screen.getByRole('heading', {
      name: /about pokédex/i,
    });

    const textOne = screen.getByText(
      /this application simulates a pokédex, a digital encyclopedia containing all pokémon/i,
    );

    const textTwo = screen.getByText(
      /one can filter pokémon by type, and see more details for each one of them/i,
    );

    const aboutImg = screen.getByRole('img', {
      name: /pokédex/i,
    });

    expect(headAbout).toBeInTheDocument();
    expect(textOne).toBeInTheDocument();
    expect(textTwo).toBeInTheDocument();
    expect(aboutImg).toBeInTheDocument();
    expect(aboutImg.src).toBe('https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png');

    userEvent.click(favPokBtn);

    const headFavPoke = screen.getByRole('heading', {
      level: 2,
      name: /favorite pokémon/i,
    });

    const textFavPoke = screen.getByText(/no favorite pokémon found/i);

    expect(headFavPoke).toBeInTheDocument();
    expect(textFavPoke).toBeInTheDocument();
  });
});
