import React from 'react';
import PropTypes from 'prop-types';
import CardProduct from '../CardProduct';

class index extends React.Component {
  render() {
    const { products, updateAmount } = this.props;

    return (
      <div className="products">
        {products.map(({ title, price, thumbnail, id, available_quantity: quantity }) => (
          <div key={ id } className="product">
            <CardProduct
              id={ id }
              title={ title }
              thumbnail={ thumbnail }
              price={ price }
              updateAmount={ updateAmount }
              availableQuantity={ quantity }
            />
          </div>
        ))}
      </div>
    );
  }
}

index.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
  updateAmount: PropTypes.func.isRequired,
};

export default index;
