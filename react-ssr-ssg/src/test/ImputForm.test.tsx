import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import { vi } from 'vitest';
import ImputForm from '../components/pages/forms/ImputForm';

afterEach(() => {
  cleanup();
  vi.resetAllMocks();
});

describe('InputForm', () => {
  test('changeProduct in submitted', () => {
    const onChangeProductMock = vi.fn();
    const { getByLabelText, getByText, getByTestId } = render(
      <ImputForm changeProduct={onChangeProductMock} />
    );

    fireEvent.change(getByLabelText(/Date/i), { target: { value: '2099-03-29' } });
    fireEvent.click(getByTestId('rule-input'), { target: { checked: true } });
    fireEvent.click(getByTestId('status-input'), { target: { checked: false } });
    fireEvent.change(getByTestId('category-select-input'), { target: { value: 'stars wine' } });
    fireEvent.submit(getByText(/Submit/i));

    expect(onChangeProductMock).not.toHaveBeenCalled();
  });
});
