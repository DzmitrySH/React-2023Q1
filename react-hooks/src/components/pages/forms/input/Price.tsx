import React from 'react';
import { FieldError, UseFormRegisterReturn } from 'react-hook-form';

interface InputPriceProps {
  register: UseFormRegisterReturn<'price'>;
  error: FieldError | undefined;
}

function Price({ register, error }: InputPriceProps) {
  return (
    <div className="form-input">
      <label htmlFor="price-input">
        Price:
        {error && <span className="form-input-span-error">Cost wine</span>}
      </label>
      <input
        {...register}
        type="number"
        inputMode="numeric"
        id="price-input"
        placeholder="set a price"
      />
    </div>
  );
}

export default Price;
