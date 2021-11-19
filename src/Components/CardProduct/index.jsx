import React, { Component } from 'react';
import '../../Style/card.css';
import PropTypes from 'prop-types';

class index extends Component {
  render() {
    const { price, thumbnail, title, id } = this.props;

    const changeImageSize = (imgLink) => {
      const noSize = imgLink.split('I.jpg');
      const biggerImg = noSize.join('W.jpg');
      return biggerImg;
    };

    const image = changeImageSize(thumbnail);

    return (
      <div
        data-testid="product"
        className="card-product"
        id={ id }
      >
        <h3>{title}</h3>
        <img src={ image } alt={ title } />
        <p>{`R$ ${price} `}</p>
      </div>
    );
  }
}

index.propTypes = {
  price: PropTypes.number.isRequired,
  thumbnail: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  id: PropTypes.string,
};

index.defaultProps = {
  id: '0',
};

export default index;
