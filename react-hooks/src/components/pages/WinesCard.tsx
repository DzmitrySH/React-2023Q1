import React, { useState } from 'react';
import { IWinesProps } from 'components/interface/interface';
import './WinesCard.css';

function WinesCard({ product }: IWinesProps) {
  const [thumbnailError, setThumbnailError] = useState(false);

  const handleThumbnailError = () => {
    setThumbnailError(true);
  };

  const { id, winery, wine, rating, reviews, price, location, image } = product;
  const title = 'wine image none';

  return (
    <div data-testid={`wines-card${id}`} className="wines-card" id={`wines-card${id}`}>
      <div className="wines-card__image">
        <img src={image} alt={title} onError={handleThumbnailError} />
      </div>
      <div className="wines-card__info">
        <h2>Producer: {winery}</h2>
        <p>Wine: {wine}</p>
        <p>Price: {price}</p>
        <p>Rating: {rating}</p>
        <p>Reviews: {reviews}</p>
        <p>Location: {location}</p>
      </div>
    </div>
  );
}

export default WinesCard;
