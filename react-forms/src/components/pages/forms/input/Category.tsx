import { CategoryEnum } from '../../../interface/interface';
import React, { RefObject } from 'react';
import { Component } from 'react';

interface IinputCategoryProps {
  valid: boolean;
  catRef: RefObject<HTMLSelectElement>;
}

class Category extends Component<IinputCategoryProps> {
  render() {
    const { valid, catRef } = this.props;
    return (
      <div className="form-input">
        <label htmlFor="category-select">
          Category: {!valid && <span className="form-input-span-error">Select</span>}
        </label>
        <select
          id="category-select"
          ref={catRef}
          defaultValue=""
          data-testid="category-select-input"
        >
          <option disabled value="">
            select wine
          </option>
          <option value={CategoryEnum.starswine}>{CategoryEnum.starswine}</option>
          <option value={CategoryEnum.oldwine}>{CategoryEnum.oldwine}</option>
          <option value={CategoryEnum.aperitivo}>{CategoryEnum.aperitivo}</option>
        </select>
      </div>
    );
  }
}

export default Category;
