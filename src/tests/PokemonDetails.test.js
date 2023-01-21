import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('Teste o componente <PokemonDetails.js />', () => {
  test('Teste se as informações detalhadas do Pokémon selecionado são mostradas na tela', () => {
    renderWithRouter(<App />);

    const moreDetails = screen.getByRole('link', {
      name: /more details/i,
    });

    expect(moreDetails).toBeInTheDocument();

    userEvent.click(moreDetails);

    expect(moreDetails).not.toBeInTheDocument();

    const headingDetails = screen.getByRole('heading', {
      name: /pikachu details/i,
    });

    expect(headingDetails).toBeInTheDocument();
    expect(headingDetails.innerHTML).toBe('Pikachu Details');

    const headingSummary = screen.getByRole('heading', {
      name: /summary/i,
    });

    expect(headingSummary).toBeInTheDocument();

    const detailsParag = screen.getByText(
      /this intelligent pokémon roasts hard berries with electricity to make them tender enough to eat\./i,
    );

    expect(detailsParag).toBeInTheDocument();
  });

  test('Teste se existe na página uma seção com os mapas contendo as localizações do Pokémon:', () => {
    renderWithRouter(<App />);

    const moreDetails = screen.getByRole('link', {
      name: /more details/i,
    });

    expect(moreDetails).toBeInTheDocument();

    userEvent.click(moreDetails);

    expect(moreDetails).not.toBeInTheDocument();

    const pokeLocation = screen.getByRole('heading', {
      name: /game locations of pikachu/i,
    });

    expect(pokeLocation).toBeInTheDocument();
    expect(pokeLocation.innerHTML).toBe('Game Locations of Pikachu');

    const pokeLocationOne = screen.getByText(/kanto viridian forest/i);

    const pokeLocationTwo = screen.getByText(/kanto power plant/i);

    expect(pokeLocationOne).toBeInTheDocument();
    expect(pokeLocationOne.innerHTML).toBe('Kanto Viridian Forest');
    expect(pokeLocationTwo).toBeInTheDocument();
    expect(pokeLocationTwo.innerHTML).toBe('Kanto Power Plant');

    const locationImg = screen.getAllByRole('img');

    expect(locationImg.length).toBe(3);
    expect(locationImg[1]).toBeInTheDocument();
    expect(locationImg[1].src).toBe('https://archives.bulbagarden.net/media/upload/0/08/Kanto_Route_2_Map.png');
    expect(locationImg[1].alt).toBe('Pikachu location');
    expect(locationImg[2]).toBeInTheDocument();
    expect(locationImg[2].src).toBe('https://archives.bulbagarden.net/media/upload/b/bd/Kanto_Celadon_City_Map.png');
    expect(locationImg[2].alt).toBe('Pikachu location');
  });

  test('Teste se o usuário pode favoritar um Pokémon através da página de detalhes', () => {
    renderWithRouter(<App />);

    const moreDetails = screen.getByRole('link', {
      name: /more details/i,
    });

    expect(moreDetails).toBeInTheDocument();

    userEvent.click(moreDetails);

    expect(moreDetails).not.toBeInTheDocument();

    const favBtnCheck = screen.getByRole('checkbox', {
      name: /pokémon favoritado\?/i,
    });

    expect(favBtnCheck).toBeInTheDocument();
    expect(favBtnCheck.checked).toBeFalsy();

    userEvent.click(favBtnCheck);
    expect(favBtnCheck.checked).toBeTruthy();
  });
});
