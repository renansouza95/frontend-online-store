import React from 'react';
import PropTypes from 'prop-types';
import CardProduct from '../CardProduct';

class index extends React.Component {
  render() {
    const { products } = this.props;

    return (
      <div className="products">
        {products.map(({ title, price, thumbnail, id }) => (
          <CardProduct
            key={ id }
            id={ id }
            title={ title }
            thumbnail={ thumbnail }
            price={ price }
          />
        ))}
      </div>
    );
  }
}

index.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default index;
