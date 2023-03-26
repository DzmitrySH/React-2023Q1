import React, { RefObject } from 'react';
import { Component } from 'react';

interface InputDateProps {
  valid: boolean;
  dateRef: RefObject<HTMLInputElement>;
}

class Date extends Component<InputDateProps> {
  render() {
    const { valid, dateRef } = this.props;
    return (
      <div className="form-input">
        <label htmlFor="date-input">
          Date of registration:
          {!valid && (
            <span className="form-input-span-error">Error: No date or product from the future</span>
          )}
        </label>
        <input type="date" id="date-input" ref={dateRef} />
      </div>
    );
  }
}

export default Date;
