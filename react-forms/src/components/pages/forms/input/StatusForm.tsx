import React from 'react';
import { Component } from 'react';

interface InputStatusProps {
  valid: boolean;
}

class StatusForm extends Component<InputStatusProps> {
  render() {
    const { valid } = this.props;
    return (
      <div className="form-input">
        <label htmlFor="category-select">
          Status: {valid && <span style={{ color: 'green' }}>Card added</span>}
        </label>
        <button type="submit">Submit</button>
      </div>
    );
  }
}

export default StatusForm;
