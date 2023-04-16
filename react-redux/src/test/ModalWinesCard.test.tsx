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
  // const product = {
  //   winery: 'Wines title',
  //   wine: 'Wines description',
  //   rating: {
  //     average: 199,
  //     reviews: '68 review',
  //   },
  //   location: 'Franse',
  //   image: 'https://example.com/image.jpg',
  //   id: 1,
  // };
  // test('renders product details correctly', () => {
  //   render(<ModalWinesCard product={product} closeModal={closeModal} />);
  //   expect(screen.getByText(`Producer: ${product.winery}`)).toBeInTheDocument();
  //   expect(screen.getByText(`Wine: ${product.wine}`)).toBeInTheDocument();
  //   expect(screen.getByText(`Rating: ${product.rating.average}`)).toBeInTheDocument();
  //   expect(screen.getByText(`Review: ${product.rating.reviews}`)).toBeInTheDocument();
  //   expect(screen.getByText(`Location: ${product.location}`)).toBeInTheDocument();
  // });
  // test('calls closeModal when clicking close button', () => {
  //   render(<ModalWinesCard product={product} closeModal={closeModal} />);
  //   const closeButton = screen.getByRole('button');
  //   closeButton.click();

  //   expect(closeModal).toHaveBeenCalled();
  // });
});
