import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import NotFound from '../components/pages/NotFound';
import About from '../components/pages/About';
import Header from '../components/pages/Header';
import Start from '../components/pages/Start';
import validDate from '../components/pages/forms/input/Validator';
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

describe('validDate', () => {
  test('returns true if input date is valid and not in the future', () => {
    const value = '2022-01-01';
    expect(validDate(value)).toBe(true);
  });

  test('returns false if input date is invalid or in the future', () => {
    const value = 'invalid-date';
    expect(validDate(value)).toBe(false);
  });
});
