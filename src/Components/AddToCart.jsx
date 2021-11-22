import React from 'react';
import PropTypes from 'prop-types';

class AddToCart extends React.Component {
  render() {
    const { idTest, addToCart } = this.props;
    return (
      <button
        data-testid={ idTest }
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
  idTest: PropTypes.string.isRequired,
  addToCart: PropTypes.func.isRequired,
};

export default AddToCart;
