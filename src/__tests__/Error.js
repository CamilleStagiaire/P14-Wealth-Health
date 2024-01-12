import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Error from '../pages/Error';

describe('Error', () => {

  // vérifie que la page d'erreur affiche les bons messages et liens
  test('renders error message and link correctly', () => {
    render(<Router><Error /></Router>);
    expect(screen.getByText(/404/)).toBeInTheDocument();
    expect(screen.getByText(/Oups! La page que vous demandez n'existe pas./)).toBeInTheDocument();
    expect(screen.getByText('Retourner sur la page d’accueil')).toHaveAttribute('href', '/');
  });
});
