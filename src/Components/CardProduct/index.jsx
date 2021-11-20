import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../Style/card.css';
import PropTypes from 'prop-types';
import changeImageSize from '../../services/changeImageSize';

class index extends Component {
  render() {
    const { price, thumbnail, title, id } = this.props;
    const image = changeImageSize(thumbnail);

    return (
      <Link to={ `/product/${id}` } data-testid="product-detail-link">
        <div
          data-testid="product"
          className="card-product"
          id={ id }
        >
          <h3>{title}</h3>
          <img src={ image } alt={ title } />
          <p>{`R$ ${price} `}</p>
        </div>
      </Link>
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
