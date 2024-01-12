import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from '../components/Header';

describe('Header', () => {

  // vérifie que le composant Header s'affiche correctement
  test('renders correctly', () => {
    render(<Router><Header /></Router>);
    expect(screen.getByText('HRNet')).toBeInTheDocument();
    expect(screen.getByAltText('Logo Wealth-Health')).toBeInTheDocument();
    expect(screen.getByText('Create a new employee')).toBeInTheDocument();
    expect(screen.getByText('View Current Employees')).toBeInTheDocument();
  });

  // vérifie que le menu se ferme au clic sur le toggle
  test('menu closes when a link is clicked', () => {
    render(<Router><Header /></Router>);
    const menuButton = screen.getByAltText('Menu');
    fireEvent.click(menuButton);
    expect(screen.getByText('Create a new employee')).toBeVisible();

    const link = screen.getByText('Create a new employee');
    fireEvent.click(link);
  });
});
