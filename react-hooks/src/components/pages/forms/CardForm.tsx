import React from 'react';
import { ICardWineProps } from 'components/interface/interface';
import './CardForm.css';

function CardForm({ product }: ICardWineProps) {
  const { id, wine, winery, price, date, statusWine, category, imageInput } = product;

  return (
    <div data-testid={`form-card${id}`} className="form-card" id={`product-card${id}`}>
      <div className="form-card__image">
        <img src={imageInput} alt={wine} />
      </div>
      <div className="form-card__info">
        <h2>{wine}</h2>
        <p>Category: {category}</p>
        <p>Price: ${price}</p>
        <p>Date of issue: {date}</p>
        <p>Product status: {statusWine}</p>
        <p>{winery}</p>
      </div>
    </div>
  );
}

export default CardForm;
