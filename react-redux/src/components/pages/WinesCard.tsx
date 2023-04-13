import React, { useState } from 'react';
import { IWinesProps } from 'components/interface/interface';
import './WinesCard.css';

function WinesCard({ product, handleShowModal }: IWinesProps) {
  const [thumbnailError, setThumbnailError] = useState(false);

  const handleThumbnailError = () => {
    setThumbnailError(true);
  };

  const { winery, wine, rating, location, image, id } = product;
  const title = 'wine image none';
  const defaults = '☺';

  return (
    <div
      data-testid={`wines-card${id}`}
      className="wines-card"
      id={`wines-card${id}`}
      onClick={() => handleShowModal(id)}
    >
      <div className="wines-card__image">
        <img src={thumbnailError ? defaults : image} alt={title} onError={handleThumbnailError} />
      </div>
      <div className="wines-card__info">
        <h2>Producer: {winery}</h2>
        <p>Wine: {wine}</p>
        <p>Rating: {rating.average}</p>
        <p>Review: {rating.reviews}</p>
        <p>Location: {location}</p>
        <button className="wines-card__button">Show more</button>
      </div>
    </div>
  );
}

export default React.memo(WinesCard);
