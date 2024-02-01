import React, { RefObject } from 'react';
import { Component } from 'react';

interface IinputStatusWineProps {
  valid: boolean;
  oneRef: RefObject<HTMLInputElement>;
  twoRef: RefObject<HTMLInputElement>;
}

class StatusWine extends Component<IinputStatusWineProps> {
  render() {
    const { valid, oneRef, twoRef } = this.props;
    return (
      <div className="form-input">
        <div className="radio-label">
          <label>
            Wine product:
            {!valid && <span className="form-input-span-error">Select</span>}
          </label>
        </div>
        <div className="radio-buttons">
          <label>
            <input
              type="radio"
              name="productStatus"
              value="new"
              data-testid="new-input"
              ref={oneRef}
            />
            New product
          </label>
          <label>
            <input type="radio" name="productStatus" value="used" ref={twoRef} />
            Used product
          </label>
        </div>
      </div>
    );
  }
}

export default StatusWine;
