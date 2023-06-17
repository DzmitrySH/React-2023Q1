import { describe, test, expect } from 'vitest';
import { render } from '@testing-library/react';
import React from 'react';
import About from '../components/pages/About';

describe('<About />', () => {
  test('About', () => {
    const page = render(<About />);
    expect(page).toBeTruthy();
    const h3 = page.container.querySelector('h3');
    expect(h3?.textContent).toMatch(/about/i);
  });
});
