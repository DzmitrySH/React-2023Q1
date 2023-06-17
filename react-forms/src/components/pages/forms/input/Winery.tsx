import React, { RefObject } from 'react';
import { Component } from 'react';

interface InputWineryProps {
  valid: boolean;
  wineryRef: RefObject<HTMLInputElement>;
}

class Winery extends Component<InputWineryProps> {
  render() {
    const { valid, wineryRef } = this.props;
    return (
      <div className="form-input">
        <label htmlFor="title-input">
          Winery:{' '}
          {!valid && (
            <span className="form-input-span-error">First letter is capital, 5 characters</span>
          )}
        </label>
        <input type="text" id="title-input" ref={wineryRef} placeholder="name product: Wine..." />
      </div>
    );
  }
}

export default Winery;
