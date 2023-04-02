import React from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

interface InputStatusProps {
  register: UseFormRegisterReturn<'form'>;
}

function StatusForm(register: InputStatusProps) {
  return (
    <div className="form-input">
      <label htmlFor="category-select">
        Status: {register && <span style={{ color: 'green' }}>Card added</span>}
      </label>
      <button type="submit">Submit form</button>
    </div>
  );
}

export default StatusForm;
