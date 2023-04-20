import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../components/redux/store';
import { render, screen } from '@testing-library/react';
import ModalWinesCard from '../components/pages/ModalWinesCard';
import { vi } from 'vitest';
import userEvent from '@testing-library/user-event';

describe('ModalWinesCard', () => {
  const closeModal = vi.fn();
  beforeEach(async () => {
    render(
      <Provider store={store}>
        <ModalWinesCard productID={11} closeModal={closeModal} />
      </Provider>
    );
  });

  test('renders product details correctly', async () => {
    const closeButton = await screen.findByRole('button');
    expect(closeButton).toBeInTheDocument();
    await userEvent.click(closeButton);
    expect(closeModal).toHaveBeenCalled();
  });
});
