import React from 'react';
import { FieldError, UseFormRegisterReturn } from 'react-hook-form';

interface IinputWineProps {
  register: UseFormRegisterReturn<'wine'>;
  error: FieldError | undefined;
}

function Wine({ register, error }: IinputWineProps) {
  return (
    <div className="form-input">
      <label htmlFor="description-input">
        Description wine:
        {error && (
          <span className="form-input-span-error">First letter is capital, 5 characters</span>
        )}
      </label>
      <textarea
        {...register}
        id="description-input"
        placeholder="description product: Wine is very..."
      />
    </div>
  );
}

export default Wine;
