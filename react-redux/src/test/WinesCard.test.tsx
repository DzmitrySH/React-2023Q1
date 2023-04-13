import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import WinesCard from '../components/pages/WinesCard';
import { vi } from 'vitest';

describe('WinesCard', () => {
  const mockProduct = {
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
  const handleShowModal = vi.fn();

  test('renders without crashing', () => {
    render(<WinesCard product={mockProduct} handleShowModal={handleShowModal} />);
  });

  test('renders product details correctly', () => {
    render(<WinesCard product={mockProduct} handleShowModal={handleShowModal} />);
    expect(screen.getByText(`Producer: ${mockProduct.winery}`)).toBeInTheDocument();
    expect(screen.getByText(`Wine: ${mockProduct.wine}`)).toBeInTheDocument();
    expect(screen.getByText(`Location: ${mockProduct.location}`)).toBeInTheDocument();
  });

  test('calls handleShowModal when clicking show button', () => {
    render(<WinesCard product={mockProduct} handleShowModal={handleShowModal} />);
    const showModalButton = screen.getByRole('button');
    fireEvent.click(showModalButton);

    expect(handleShowModal).toHaveBeenCalled();
    expect(handleShowModal).toHaveBeenCalledTimes(1);
  });
});
