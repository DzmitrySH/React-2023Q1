import React from 'react';
import { FieldError, UseFormRegisterReturn } from 'react-hook-form';

interface InputWineryProps {
  register: UseFormRegisterReturn<'winery'>;
  error: FieldError | undefined;
}

function Winery({ register, error }: InputWineryProps) {
  return (
    <div className="form-input">
      <label htmlFor="title-input">
        Winery:{' '}
        {error && (
          <span className="form-input-span-error">First letter is capital, 5 characters</span>
        )}
      </label>
      <input {...register} type="text" id="title-input" placeholder="name product: Wine..." />
    </div>
  );
}

export default Winery;
