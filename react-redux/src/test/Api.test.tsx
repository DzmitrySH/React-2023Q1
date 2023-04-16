import React from 'react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { cleanup } from '@testing-library/react';
import { renderWithProviders } from '../test/utilies';
import ModalWinesCard from '../components/pages/ModalWinesCard';
import { vi } from 'vitest';

const mockserver = setupServer(
  rest.get(`'https://api.sampleapis.com/wines/port/:id`, (req, res, ctx) => {
    const query = Number(req.params.id);
    if (query === 2) {
      return res(
        ctx.status(200),
        ctx.json({
          winery: 'Toro Albalá',
          wine: 'Don PX Convento Selección 1946',
          rating: {
            average: 4.9,
            reviews: '232 ratings',
          },
          location: 'Spain\n·\nMontilla-Moriles',
          image: 'https://images.vivino.com/thumbs/ni3gQdaBR0eR1jwck1LaWA_pb_x300.png',
          id: 2,
        })
      );
    } else if (query !== 2) return res(ctx.status(404), ctx.json({ error: 'error' }));
  })
);

beforeAll(() => mockserver.listen());

afterEach(() => {
  mockserver.resetHandlers();
  cleanup();
});

afterAll(() => mockserver.close());

describe('Extended card component', () => {
  const closeModal = vi.fn();

  test('yes fetch card by id from api', async () => {
    const { findByText } = renderWithProviders(
      <ModalWinesCard productID={2} closeModal={closeModal} />
    );
    expect(await findByText('Producer: Toro Albalá')).toBeInTheDocument();
    expect(await findByText('Wine: Don PX Convento Selección 1946')).toBeInTheDocument();
    expect(await findByText('Rating: 4.9')).toBeInTheDocument();
    expect(await findByText('Review: 232 ratings')).toBeInTheDocument();
    expect(await findByText('Location: Spain\n·\nMontilla-Moriles')).toBeInTheDocument();
  });

  test('not fetch card by id from api', async () => {
    const { findByText } = renderWithProviders(
      <ModalWinesCard productID={12345678} closeModal={closeModal} />
    );
    expect(await findByText('Wines not Loading...')).toBeInTheDocument();
  });
});
