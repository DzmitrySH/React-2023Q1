import React, { useState } from 'react';
import { IWinesProps } from 'components/interface/interface';
import ModalWinesCard from './ModalWinesCard';
import './WinesCard.css';
import defaults from '../../assets/bottle.png';

function WinesCard({ product }: IWinesProps) {
  const [thumbnailError, setThumbnailError] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleThumbnailError = () => {
    setThumbnailError(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleShowModal = () => {
    setIsModalOpen(true);
  };

  const { winery, wine, rating, location, image, id } = product;
  const title = 'wine image none';

  return (
    <>
      {isModalOpen && <ModalWinesCard productID={product.id} closeModal={closeModal} />}
      <div data-testid={`wines-card${id}`} className="wines-card" id={`wines-card${id}`}>
        <div className="wines-card__image">
          <img src={thumbnailError ? defaults : image} alt={title} onError={handleThumbnailError} />
        </div>
        <div className="wines-card__info">
          <h2>Producer: {winery}</h2>
          <p>Wine: {wine}</p>
          <p>Rating: {rating.average}</p>
          <p>Review: {rating.reviews}</p>
          <p>Location: {location}</p>
          <button className="wines-card__button" onClick={() => handleShowModal()}>
            Show more
          </button>
        </div>
      </div>
    </>
  );
}

export default React.memo(WinesCard);
