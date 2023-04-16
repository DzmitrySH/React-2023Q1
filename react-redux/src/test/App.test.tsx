import { cleanup, render, screen, fireEvent } from '@testing-library/react';
import App from '../App';
import React from 'react';
import { afterEach } from 'vitest';
import { Provider } from 'react-redux';
import { store } from '../components/redux/store';
import { BrowserRouter } from 'react-router-dom';

afterEach(() => {
  cleanup();
});

describe('App component', () => {
  it('App test', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>,
      { wrapper: BrowserRouter }
    );

    const linkAbout = screen.getByText(/About/i);
    expect(linkAbout).toBeInTheDocument();

    fireEvent.click(linkAbout);

    const divAbout = screen.getByText('Welcome to the AboutPage!');
    expect(divAbout).toBeInTheDocument();

    fireEvent.click(screen.getByTestId('start'));

    expect(divAbout).not.toBeInTheDocument();
  });
});
