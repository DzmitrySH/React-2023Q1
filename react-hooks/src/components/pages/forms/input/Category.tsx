import { CategoryEnum } from '../../../interface/interface';
import React from 'react';
import { FieldError, UseFormRegisterReturn } from 'react-hook-form';

interface IinputCategoryProps {
  register: UseFormRegisterReturn<'category'>;
  error: FieldError | undefined;
}

function Category({ register, error }: IinputCategoryProps) {
  return (
    <div className="form-input">
      <label htmlFor="category-select">
        Category: {error && <span className="form-input-span-error">Select</span>}
      </label>
      <select
        id="category-select"
        defaultValue=""
        data-testid="category-select-input"
        {...register}
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
export default Category;
