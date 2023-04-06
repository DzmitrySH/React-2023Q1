import React from 'react';
import { render } from '@testing-library/react';
import CardForm from '../components/pages/forms/CardForm';

const productTest = {
  id: 1,
  winery: 'Wines title',
  wine: 'Wines description',
  price: 199,
  date: '2022-03-28',
  statusWine: 'used',
  category: 'starswine',
  imageInput: 'https://example.com/image.jpg',
};

test('Wine title and category', () => {
  const { getByText } = render(<CardForm product={productTest} />);
  const titleElement = getByText(/Wines title/i);
  const categoryElement = getByText(/Wines description/i);
  // expect(titleElement).toBeInTheDocument();
  // expect(categoryElement).toBeInTheDocument();
});
