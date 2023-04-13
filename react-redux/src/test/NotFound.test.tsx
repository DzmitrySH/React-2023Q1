import { describe, test, expect } from 'vitest';
import { render } from '@testing-library/react';
import React from 'react';
import NotFound from '../components/pages/NotFound';
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
