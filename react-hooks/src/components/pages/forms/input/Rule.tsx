import React, { RefObject } from 'react';
import { Component } from 'react';

interface InputRuleProps {
  valid: boolean;
  ruleRef: RefObject<HTMLInputElement>;
}

class Rule extends Component<InputRuleProps> {
  render() {
    const { valid, ruleRef } = this.props;
    return (
      <div className="form-input">
        <label htmlFor="rule-input">
          <input type="checkbox" id="rule-input" data-testid="rule-input" ref={ruleRef} />
          Iam already 18 years old.
          {!valid && <span className="form-input-span-error">No?</span>}
        </label>
      </div>
    );
  }
}

export default Rule;
