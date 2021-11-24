import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const UnavailableProducts = styled.p`
  color: red;
  margin: 1.5rem 0;
`;

class AddToCart extends React.Component {
  render() {
    const { idTest, addToCart, disabledBtn } = this.props;
    return (
      disabledBtn ? <UnavailableProducts>Sem estoque</UnavailableProducts> : (
        <button
          data-testid={ idTest }
          type="button"
          className="btn btn-black"
          onClick={ addToCart }
          disabled={ disabledBtn }
        >
          Adicionar ao carrinho
        </button>
      )
    );
  }
}

AddToCart.propTypes = {
  idTest: PropTypes.string.isRequired,
  addToCart: PropTypes.func.isRequired,
  disabledBtn: PropTypes.bool.isRequired,
};

export default AddToCart;
