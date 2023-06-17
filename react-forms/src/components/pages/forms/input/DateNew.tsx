import React, { RefObject } from 'react';
import { Component } from 'react';

interface InputDateProps {
  valid: boolean;
  dateRef: RefObject<HTMLInputElement>;
}

class DateNew extends Component<InputDateProps> {
  render() {
    const { valid, dateRef } = this.props;
    return (
      <div className="form-input">
        <label htmlFor="date-input">
          Date of harvest year:
          {!valid && <span className="form-input-span-error">No date or product</span>}
        </label>
        <input type="date" id="date-input" ref={dateRef} />
      </div>
    );
  }
}

export default DateNew;
