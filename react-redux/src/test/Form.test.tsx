import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../components/redux/store';
import { render } from '@testing-library/react';
import Form from '../components/pages/forms/Form';

test('renders Form page header', () => {
  const { getByText } = render(
    <Provider store={store}>
      <Form />
    </Provider>
  );
  const headerElement = getByText(/Form/i);
  expect(headerElement).toBeInTheDocument();
});
