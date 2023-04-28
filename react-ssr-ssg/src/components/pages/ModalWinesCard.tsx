import React from 'react';
import { useGetWinesDetailsQuery } from '../../components/Api/Api';
import SpinnerLoad from './SpinnerLoad';
import './ModalWinesCard.css';

type ProductModalProps = {
  productID: number;
  closeModal: () => void;
};

function ModalWinesCard({ productID, closeModal }: ProductModalProps) {
  const { data: product, isLoading, isError } = useGetWinesDetailsQuery(productID);

  const overlayClick = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  };

  if (isLoading) return <SpinnerLoad />;

  if (isError) {
    return (
      <div className="wine-modal" onClick={overlayClick} data-testid="modal">
        <div className="wine-modal__content">
          <button className="wine-modal__close-btn" onClick={overlayClick}>
            &#10006;
          </button>
          Wines not Loading...
        </div>
      </div>
    );
  }

  return (
    <div className="wine-modal" onClick={overlayClick} data-testid="modal">
      <div className="wine-modal__content">
        <div className="wine-modal__image">
          <img src={product?.image ?? ''} alt={product?.wine} />
        </div>
        <div className="wine-modal__info">
          <h2>Producer: {product?.winery}</h2>
          <p>Wine: {product?.wine}</p>
          <p>Rating: {product?.rating.average}</p>
          <p>Review: {product?.rating.reviews}</p>
          <p>Location: {product?.location}</p>
        </div>
        <button className="wine-modal__close-btn" onClick={overlayClick}>
          &#10006;
        </button>
      </div>
    </div>
  );
}

export default ModalWinesCard;
