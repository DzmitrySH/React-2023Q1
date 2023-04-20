import { describe, test, expect } from 'vitest';
import { render, fireEvent, screen } from '@testing-library/react';
import React from 'react';
import Start from '../components/pages/Start';
import { Provider } from 'react-redux';
import { store } from '../components/redux/store';

describe('<Start />', () => {
  test('Start input abd fubmit form', () => {
    const { getByPlaceholderText } = render(
      <Provider store={store}>
        <Start />
      </Provider>
    );
    const searchInput = getByPlaceholderText('Search Wine...') as HTMLInputElement;
    expect(searchInput).toBeInTheDocument();
    const searchButton = screen.getByTestId('search-button');
    expect(searchButton).toBeInTheDocument();
    fireEvent.change(searchInput, { target: { value: 'test' } });
    expect(searchInput.value).toBe('test');
  });
});
