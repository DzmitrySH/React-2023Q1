import { describe, test, expect } from 'vitest';
import { render } from '@testing-library/react';
import React from 'react';
import About from '../components/pages/About';
import { fn } from 'jest-mock';

describe('<About />', () => {
  test('About', () => {
    const namePage = fn();
    const page = render(<About changeNamePage={namePage} />);
    expect(page).toBeTruthy();
    const h3 = page.container.querySelector('h3');
    expect(h3?.textContent).toMatch(/about/i);
  });
});
