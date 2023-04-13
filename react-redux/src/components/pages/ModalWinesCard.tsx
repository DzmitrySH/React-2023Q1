import { IWines } from 'components/interface/interface';
import React from 'react';
import './ModalWinesCard.css';

type ProductModalProps = {
  product: IWines;
  closeModal: () => void;
};

function ModalWinesCard({ product, closeModal }: ProductModalProps) {
  const { winery, wine, rating, location, image } = product;
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
        <div className="wine-modal__image">
          <img src={image} alt={title} />
        </div>
        <div className="wine-modal__info">
          <h2>Producer: {winery}</h2>
          <p>Wine: {wine}</p>
          <p>Rating: {rating.average}</p>
          <p>Review: {rating.reviews}</p>
          <p>Location: {location}</p>
        </div>
        <button className="wine-modal__close-btn" onClick={modalCloseClick}>
          &#10006;
        </button>
      </div>
    </div>
  );
}

export default ModalWinesCard;
