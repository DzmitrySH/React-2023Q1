import React from 'react';
import { FieldError } from 'react-hook-form';

interface InputStatusProps {
  error: FieldError | undefined;
}

function StatusForm(error: InputStatusProps) {
  return (
    <div className="form-input">
      <label htmlFor="category-select">
        Status: {error && <span style={{ color: 'green' }}>Card added</span>}
      </label>
      <button type="submit">Submit form</button>
    </div>
  );
}

export default StatusForm;
