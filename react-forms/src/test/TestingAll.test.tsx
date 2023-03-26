import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import NotFound from '../components/pages/NotFound';
import About from '../components/pages/About';
import Header from '../components/pages/Header';
import Start from '../components/pages/Start';
// import WinesCard from '../components/pages/WinesCard';
import { MemoryRouter } from 'react-router';
import { fn } from 'jest-mock';

describe('<NotFound />', () => {
  test('404', () => {
    const namePage = fn();
    const page = render(<NotFound changeNamePage={namePage} />);
    expect(page).toBeTruthy();
    const h3 = page.container.querySelector('h3');
    expect(h3?.textContent).toMatch(/404/i);
  });
});

describe('<About />', () => {
  test('About', () => {
    const namePage = fn();
    const page = render(<About changeNamePage={namePage} />);
    expect(page).toBeTruthy();
    const h3 = page.container.querySelector('h3');
    expect(h3?.textContent).toMatch(/about/i);
  });
});

describe('<Start />', () => {
  test('Start', () => {
    const namePage = fn();
    render(
      <MemoryRouter>
        <Start changeNamePage={namePage} />
      </MemoryRouter>
    );
    expect(namePage).toHaveBeenCalledTimes(1);
  });
});

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
