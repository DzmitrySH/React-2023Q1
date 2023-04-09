import React from 'react';
import { render, screen } from '@testing-library/react';
import ModalWinesCard from '../components/pages/ModalWinesCard';
import { vi } from 'vitest';

describe('ModalWinesCard', () => {
  const product = {
    winery: 'Wines title',
    wine: 'Wines description',
    rating: {
      average: 199,
      reviews: '68 review',
    },
    location: 'Franse',
    image: 'https://example.com/image.jpg',
    id: 1,
  };
  const closeModal = vi.fn();

  test('renders product details correctly', () => {
    render(<ModalWinesCard product={product} closeModal={closeModal} />);
    expect(screen.getByText(`Producer: ${product.winery}`)).toBeInTheDocument();
    expect(screen.getByText(`Wine: ${product.wine}`)).toBeInTheDocument();
    expect(screen.getByText(`Rating: ${product.rating.average}`)).toBeInTheDocument();
    expect(screen.getByText(`Review: ${product.rating.reviews}`)).toBeInTheDocument();
    expect(screen.getByText(`Location: ${product.location}`)).toBeInTheDocument();
  });

  test('calls closeModal when clicking close button', () => {
    render(<ModalWinesCard product={product} closeModal={closeModal} />);
    const closeButton = screen.getByRole('button');
    closeButton.click();

    expect(closeModal).toHaveBeenCalled();
  });
});
