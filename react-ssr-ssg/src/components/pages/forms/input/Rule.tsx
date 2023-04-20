import React from 'react';
import { FieldError, UseFormRegisterReturn } from 'react-hook-form';

interface InputRuleProps {
  register: UseFormRegisterReturn<'rules'>;
  error: FieldError | undefined;
}

function Rule({ register, error }: InputRuleProps) {
  return (
    <div className="form-input">
      <label htmlFor="rule-input">
        <input type="checkbox" id="rule-input" data-testid="rule-input" {...register} />
        Iam already 18 years old.
        {error && <span className="form-input-span-error">No?</span>}
      </label>
    </div>
  );
}

export default Rule;
