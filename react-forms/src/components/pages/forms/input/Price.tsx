import React, { RefObject } from 'react';
import { Component } from 'react';

interface InputPriceProps {
  valid: boolean;
  priceRef: RefObject<HTMLInputElement>;
}

class Price extends Component<InputPriceProps> {
  render() {
    const { valid, priceRef } = this.props;
    return (
      <div className="form-input">
        <label htmlFor="price-input">
          Price:
          {!valid && <span className="form-input-span-error">Error</span>}
        </label>
        <input
          type="number"
          inputMode="numeric"
          id="price-input"
          ref={priceRef}
          placeholder="set a price"
        />
      </div>
    );
  }
}

export default Price;
