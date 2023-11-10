import { describe, test, expect } from 'vitest';
import { render } from '@testing-library/react';
import React from 'react';
import NotFound from '../components/pages/NotFound';

describe('<NotFound />', () => {
  test('Not found 404', () => {
    const page = render(<NotFound />);
    expect(page).toBeTruthy();
    const h3 = page.container.querySelector('h3');
    expect(h3?.textContent).toMatch(/404/i);
  });
});
