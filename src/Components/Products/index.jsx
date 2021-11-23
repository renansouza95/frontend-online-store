import React from 'react';
import PropTypes from 'prop-types';
import CardProduct from '../CardProduct';

class index extends React.Component {
  render() {
    const { products } = this.props;

    return (
      <div className="products">
        {products.map(({ title, price, thumbnail, id }) => (
          <div key={ id } className="product">
            <CardProduct
              id={ id }
              title={ title }
              thumbnail={ thumbnail }
              price={ price }
            />
          </div>
        ))}
      </div>
    );
  }
}

index.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default index;
