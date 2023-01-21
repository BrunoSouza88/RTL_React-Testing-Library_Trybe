import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('Teste o componente <Pokemon.js />', () => {
  test('Teste se é renderizado um card com as informações de determinado Pokémon:', () => {
    renderWithRouter(<App />);

    const pokeName = screen.getByTestId('pokemon-name').innerHTML;
    const pokeKind = screen.getByTestId('pokemon-type').innerHTML;
    const pokeWeight = screen.getByTestId('pokemon-weight').innerHTML;
    const pokeImg = screen.getByRole('img', {
      name: /pikachu sprite/i,
    });

    expect(pokeName).toBe('Pikachu');
    expect(pokeKind).toBe('Electric');
    expect(pokeWeight).toBe('Average weight: 6.0 kg');
    expect(pokeImg.src).toBe('https://archives.bulbagarden.net/media/upload/b/b2/Spr_5b_025_m.png');
    expect(pokeImg.alt).toBe('Pikachu sprite');
  });

  test('Teste se o card do Pokémon indicado na Pokédex contém um link de navegação para exibir detalhes deste Pokémon. O link deve possuir a URL /pokemon/<id>, onde <id> é o id do Pokémon exibido;', () => {
    renderWithRouter(<App />);

    const moreDetails = screen.getByRole('link', {
      name: /more details/i,
    });

    expect(moreDetails).toBeInTheDocument();
    expect(moreDetails.href).toBe('http://localhost/pokemon/25');
  });

  test('Teste se ao clicar no link de navegação do Pokémon, é feito o redirecionamento da aplicação para a página de detalhes de Pokémon;', () => {
    renderWithRouter(<App />);

    const moreDetails = screen.getByRole('link', {
      name: /more details/i,
    });

    expect(moreDetails).toBeInTheDocument();
    userEvent.click(moreDetails);

    const pokeSummary = screen.getByRole('heading', {
      name: /summary/i,
    });

    const pokeText = screen.getByText(
      /this intelligent pokémon roasts hard berries with electricity to make them tender enough to eat\./i,
    );

    const pokeDetailHeading = screen.getByRole('heading', {
      name: /game locations of pikachu/i,
    });

    const plantText = screen.getByText(/kanto power plant/i);

    const forestText = screen.getByText(/kanto viridian forest/i);

    const favForm = screen.getByText(/pokémon favoritado\?/i);

    const favBtn = screen.getByRole('checkbox', {
      name: /pokémon favoritado\?/i,
    });

    const pokeCardPics = screen.getAllByRole('img');

    expect(pokeSummary).toBeInTheDocument();
    expect(pokeText).toBeInTheDocument();
    expect(pokeDetailHeading).toBeInTheDocument();
    expect(plantText).toBeInTheDocument();
    expect(forestText).toBeInTheDocument();
    expect(favForm).toBeInTheDocument();
    expect(favBtn).toBeInTheDocument();
    expect(pokeCardPics[1]).toBeInTheDocument();
    expect(pokeCardPics[1].src).toBe('https://archives.bulbagarden.net/media/upload/0/08/Kanto_Route_2_Map.png');
    expect(pokeCardPics[1].alt).toBe('Pikachu location');
    expect(pokeCardPics[2]).toBeInTheDocument();
    expect(pokeCardPics[2].src).toBe('https://archives.bulbagarden.net/media/upload/b/bd/Kanto_Celadon_City_Map.png');
    expect(pokeCardPics[2].alt).toBe('Pikachu location');
  });

  test('Teste também se a URL exibida no navegador muda para /pokemon/<id>, onde <id> é o id do Pokémon cujos detalhes se deseja ver', () => {
    const { history } = renderWithRouter(<App />);

    const moreDetails = screen.getByRole('link', {
      name: /more details/i,
    });

    expect(moreDetails).toBeInTheDocument();

    userEvent.click(moreDetails);

    const { pathname } = history.location;

    expect(pathname).toBe('/pokemon/25');
  });

  test('Teste se existe um ícone de estrela nos Pokémon favoritados', () => {
    renderWithRouter(<App />);

    const moreDetails = screen.getByRole('link', {
      name: /more details/i,
    });

    expect(moreDetails).toBeInTheDocument();

    userEvent.click(moreDetails);

    const favBtn = screen.getByRole('checkbox', {
      name: /pokémon favoritado\?/i,
    });

    userEvent.click(favBtn);

    const pokeCardPics = screen.getAllByRole('img');

    expect(pokeCardPics[1]).toBeInTheDocument();
    expect(pokeCardPics[1].src).toBe('http://localhost/star-icon.svg');
    expect(pokeCardPics[1].alt).toBe('Pikachu is marked as favorite');
  });
});
