import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import Header from '../components/pages/Header';
import { MemoryRouter } from 'react-router';

describe('<Header />', () => {
  test('Header', () => {
    const namePage = 'Start Page';
    render(
      <MemoryRouter>
        <Header namePage={namePage} />
      </MemoryRouter>
    );
    expect(screen.queryAllByText(`${namePage}`)).toBeTruthy();
  });
});
