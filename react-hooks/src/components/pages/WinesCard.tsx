import React, { Component } from 'react';
import { IWinesProps } from 'components/interface/interface';
import './WinesCard.css';

interface IWinesCardState {
  thumbnailError: boolean;
}

class WinesCard extends Component<IWinesProps, IWinesCardState> {
  constructor(props: IWinesProps) {
    super(props);
    this.state = {
      thumbnailError: false,
    };
  }

  handleThumbnailError = () => {
    this.setState({ thumbnailError: true });
  };

  render() {
    const { id, winery, wine, rating, reviews, price, location, image } = this.props.product;
    const title = 'wine image';

    return (
      <div data-testid={`wines-card${id}`} className="wines-card" id={`wines-card${id}`}>
        <div className="wines-card__image">
          <img src={image} alt={title} onError={this.handleThumbnailError} />
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
}

export default WinesCard;
