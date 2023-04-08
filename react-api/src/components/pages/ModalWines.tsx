import { IWines } from 'components/interface/interface';
import React from 'react';
import './ModalWines.css';

type ProductModalProps = {
  product: IWines;
  closeModal: () => void;
};

function ModalProductCard({ product, closeModal }: ProductModalProps) {
  const { winery, wine, rating, reviews, price, location, image } = product;
  const title = 'wine image none';

  const overlayClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  };

  const modalCloseClick = () => {
    closeModal();
  };

  return (
    <div className="wine-modal" onClick={overlayClick}>
      <div className="wine-modal__content">
        <button className="wine-modal__close-btn" onClick={modalCloseClick}>
          &#10006;
        </button>
        <div className="wine-modal__image">
          <img src={image} alt={title} />
        </div>
        <div className="wine-modal__info">
          <h2>Producer: {winery}</h2>
          <p>Wine: {wine}</p>
          <p>Price: {price}</p>
          <p>Rating: {rating}</p>
          <p>Reviews: {reviews}</p>
          <p>Location: {location}</p>
        </div>
      </div>
    </div>
  );
}

export default ModalProductCard;
