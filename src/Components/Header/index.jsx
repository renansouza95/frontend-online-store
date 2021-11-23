import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { RiShoppingCartLine } from 'react-icons/ri';
import '../../Style/header.css';

class index extends React.Component {
  render() {
    const { handleInput, getProduct, searchInput } = this.props;

    return (
      <header className="header">
        <div className="container-search">
          <input
            data-testid="query-input"
            className="input-search"
            type="text"
            placeholder="Procure seu produto..."
            onChange={ handleInput }
            value={ searchInput }
          />
          <input
            data-testid="query-button"
            className="btn btn-black btn-search"
            type="submit"
            value="Search"
            onClick={ getProduct }
          />
        </div>
        <Link data-testid="shopping-cart-button" to="/shopping-cart">
          <div className="cart-button">
            <p>Carrinho</p>
            <RiShoppingCartLine size={ 25 } color="#252525" />
          </div>
        </Link>
      </header>
    );
  }
}

index.propTypes = {
  handleInput: PropTypes.func.isRequired,
  getProduct: PropTypes.func.isRequired,
  searchInput: PropTypes.string.isRequired,
};

export default index;