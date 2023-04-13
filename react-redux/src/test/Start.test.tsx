import { describe, test, expect } from 'vitest';
import { render } from '@testing-library/react';
import React from 'react';
import Start from '../components/pages/Start';
import { MemoryRouter } from 'react-router';
import { fn } from 'jest-mock';

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
