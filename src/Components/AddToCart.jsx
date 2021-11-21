import React from 'react';
import PropTypes from 'prop-types';

class AddToCart extends React.Component {
  render() {
    const { addToCart } = this.props;
    return (
      <button
        data-testid="product-add-to-cart"
        type="button"
        className="btn btn-black"
        onClick={ addToCart }
      >
        Adicionar ao carrinho
      </button>
    );
  }
}

AddToCart.propTypes = {
  addToCart: PropTypes.func.isRequired,
};

export default AddToCart;
