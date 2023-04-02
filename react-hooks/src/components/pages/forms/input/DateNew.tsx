import React from 'react';
import { FieldError, UseFormRegisterReturn } from 'react-hook-form';

interface InputDateProps {
  register: UseFormRegisterReturn<'date'>;
  error: FieldError | undefined;
}

function DateNew({ register, error }: InputDateProps) {
  return (
    <div className="form-input">
      <label htmlFor="date-input">
        Date of harvest year:
        {error && <span className="form-input-span-error">No date or product</span>}
      </label>
      <input type="date" id="date-input" {...register} />
    </div>
  );
}

export default DateNew;
