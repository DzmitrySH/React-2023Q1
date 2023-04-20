import { render, screen } from '@testing-library/react';
import React from 'react';
import Header from '../components/pages/Header';
import { MemoryRouter } from 'react-router';

describe('<Header />', () => {
  test('Header component include', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    expect(screen.getByText(`Page: Start`)).toBeTruthy();
  });

  test('Render the correct navigation links', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    const homeLink = screen.getByRole('link', { name: /Start Wines/i });
    const aboutLink = screen.getByRole('link', { name: /About Page/i });
    expect(homeLink.getAttribute('href')).toBe('/');
    expect(aboutLink.getAttribute('href')).toBe('/about');
  });
});
