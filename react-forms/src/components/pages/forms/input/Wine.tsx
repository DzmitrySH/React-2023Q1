import React, { RefObject } from 'react';
import { Component } from 'react';

interface InputWineProps {
  valid: boolean;
  wineRef: RefObject<HTMLTextAreaElement>;
}

class Wine extends Component<InputWineProps> {
  render() {
    const { valid, wineRef } = this.props;
    return (
      <div className="form-input">
        <label htmlFor="description-input">
          Description wine:
          {!valid && (
            <span className="form-input-span-error">
              Error: First letter is capital, 5 characters
            </span>
          )}
        </label>
        <textarea
          ref={wineRef}
          id="description-input"
          placeholder="description product: Wine is very..."
        />
      </div>
    );
  }
}

export default Wine;
