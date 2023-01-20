import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('Teste o componente <FavoritePokemon.js', () => {
  test('Teste se é exibida na tela a mensagem No favorite pokemon found, caso a pessoa não tenha Pokémon favoritos;', () => {
    renderWithRouter(<App />);

    const favPokBtn = screen.getByRole('link', {
      name: /favorite pokémon/i,
    });

    userEvent.click(favPokBtn);

    const headFavPoke = screen.getByRole('heading', {
      level: 2,
      name: /favorite pokémon/i,
    });

    const textFavPoke = screen.getByText(/no favorite pokémon found/i);

    expect(headFavPoke).toBeInTheDocument();
    expect(textFavPoke).toBeInTheDocument();
  });

  test('São exibidos na tela apenas os Pokémon favoritados', () => {
    renderWithRouter(<App />);

    const moreDetails = screen.getByRole('link', {
      name: /more details/i,
    });

    expect(moreDetails).toBeInTheDocument();

    userEvent.click(moreDetails);

    const summaryText = screen.getByRole('heading', {
      name: /summary/i,
    });

    const detailText = screen.getByText(
      /this intelligent pokémon roasts hard berries with electricity to make them tender enough to eat\./i,
    );

    const locationText = screen.getByRole('heading', {
      name: /game locations of pikachu/i,
    });

    const pokeFavText = screen.getByText(/pokémon favoritado\?/i);

    const favBtn = screen.getByRole('checkbox', {
      name: /pokémon favoritado\?/i,
    });

    expect(summaryText).toBeInTheDocument();
    expect(detailText).toBeInTheDocument();
    expect(locationText).toBeInTheDocument();
    expect(pokeFavText).toBeInTheDocument();
    expect(favBtn).toBeInTheDocument();

    userEvent.click(favBtn);

    const favPokBtn = screen.getByRole('link', {
      name: /favorite pokémon/i,
    });

    userEvent.click(favPokBtn);

    const favoriteListText = screen.getByRole('heading', {
      name: /favorite pokémon/i,
    });

    const pokeName = screen.queryByTestId('pokemon-name');

    const pokeWeight = screen.getByTestId('pokemon-weight');

    const pokeStar = screen.getByRole('img', {
      name: /pikachu is marked as favorite/i,
    });

    expect(favoriteListText).toBeInTheDocument();
    expect(pokeName).toBeInTheDocument();
    expect(pokeWeight).toBeInTheDocument();
    expect(pokeStar).toBeInTheDocument();
  });
});
