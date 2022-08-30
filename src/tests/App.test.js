import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './helpers/renderWith';
import Login from '../pages/Login';
import Wallet from '../pages/Wallet';
import App from '../App';

const { handleSubmit } = require('../components/WalletForm');

describe('Verifica tela de login', () => {
  test('Verifica página de login', () => {
    renderWithRouter(<Login />);
    const titleElement = screen.getByRole('heading', { level: 1, name: /login/i });
    expect(titleElement).toBeInTheDocument();
  });
  test('Verifica se possui o botão para entrar', () => {
    renderWithRouter(<Login />);
    const button = screen.getByRole('button', { name: /entrar/i });
    expect(button).toBeInTheDocument();
  });
  test(
    'Teste se é exibido o próximo pokémon quando o botão Próximo pokémon é clicado',
    () => {
      renderWithRouter(<App />);
      const button = screen.getByRole('button', { name: /entrar/i });
      userEvent.type(Email, 'dddd@ddd.com');
      userEvent.type(Password, 'password');
      userEvent.click(button);
      const carteira = screen.getByRole('heading', { level: 2, name: /walletform/i });
      expect(carteira).toBeInTheDocument();
    },
  );
});
describe('Verifica tela da carteira', () => {
  test('Verifica página da carteira', () => {
    renderWithRouter(<Wallet />);
    const walletlement = screen.getByRole('heading', { level: 2, name: /walletform/i });
    expect(walletlement).toBeInTheDocument();
  });
});
