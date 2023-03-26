import React, { RefObject } from 'react';
import { Component } from 'react';

interface IinputImageProps {
  valid: boolean;
  imageRef: RefObject<HTMLInputElement>;
  imageFile: File | null;
}

class Images extends Component<IinputImageProps> {
  render() {
    const { valid, imageRef, imageFile } = this.props;
    return (
      <div className="form-input">
        <label htmlFor="image-input">
          Image In: {!valid && <span className="form-input-span-error">Add image</span>}
        </label>
        <input
          type="file"
          accept="image/jpeg,image/png,image/gif"
          id="image-input"
          ref={imageRef}
        />
        {imageFile && <span>{imageFile.name}</span>}
      </div>
    );
  }
}

export default Images;
