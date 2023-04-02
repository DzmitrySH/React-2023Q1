import React from 'react';
import { FieldError, UseFormRegisterReturn } from 'react-hook-form';

interface IinputStatusWineProps {
  register: UseFormRegisterReturn<'wineStatus'>;
  error: FieldError | undefined;
}

function StatusWine({ register, error }: IinputStatusWineProps) {
  return (
    <div className="form-input">
      <div className="radio-label">
        <label>
          Wine product:
          {error && <span className="form-input-span-error">Select</span>}
        </label>
      </div>
      <div className="radio-buttons">
        <label>
          <input type="radio" value="new" data-testid="new-input" {...register} />
          New product
        </label>
        <label>
          <input type="radio" value="used" {...register} />
          Used product
        </label>
      </div>
    </div>
  );
}

export default StatusWine;
