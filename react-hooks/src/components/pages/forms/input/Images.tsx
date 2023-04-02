import React from 'react';
import { FieldError, UseFormRegisterReturn } from 'react-hook-form';

interface IinputImageProps {
  error: FieldError | undefined;
  register: UseFormRegisterReturn<'imageFile'>;
  imageFile: string;
}

function Images({ error, register, imageFile }: IinputImageProps) {
  return (
    <div className="form-input">
      <label htmlFor="image-input">
        Image In: {error && <span className="form-input-span-error">Add image</span>}
      </label>
      <input type="file" accept="image/jpeg,image/png,image/gif" id="image-input" {...register} />
      {<span>{imageFile}</span>}
    </div>
  );
}

export default Images;
