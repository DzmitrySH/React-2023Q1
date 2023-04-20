import React from 'react';
import { Provider } from 'react-redux';
import { render, screen, waitFor } from '@testing-library/react';
import { store } from '../components/redux/store';
import WinesCard from '../components/pages/WinesCard';
import userEvent from '@testing-library/user-event';

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

  test('renders without crashing', () => {
    render(<WinesCard product={mockProduct} />);
  });

  test('renders product details correctly', () => {
    render(<WinesCard product={mockProduct} />);
    expect(screen.getByText(`Producer: ${mockProduct.winery}`)).toBeInTheDocument();
    expect(screen.getByText(`Wine: ${mockProduct.wine}`)).toBeInTheDocument();
    expect(screen.getByText(`Location: ${mockProduct.location}`)).toBeInTheDocument();
  });

  test('calls handleShowModal when clicking show button', async () => {
    render(
      <Provider store={store}>
        <WinesCard product={mockProduct} />
      </Provider>
    );
    const showModalButton = screen.getByRole('button');
    userEvent.click(showModalButton);
    await waitFor(() => {
      const divModal = screen.getByTestId('modal');
      expect(divModal).toBeInTheDocument();
    });
  });
});
