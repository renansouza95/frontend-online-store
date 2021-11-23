import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { RiShoppingCartLine } from 'react-icons/ri';
import styled from 'styled-components';
import '../../Style/header.css';
import TrybeLogo from '../../image/trybe-logo white.png';

const Logo = styled.img`
  width: 40px;
  margin-top: -15px;
`;

const SearchInput = styled.input`
  width: 45vw;
  border: 1px solid #bbb;
  border-radius: 0.5rem;
  margin: 0 1rem;
  padding: 0.5rem 0.6rem;
  :focus {
  box-shadow: rgba(15, 23, 90, 0.09) 0 2px 5px;
  outline: none;
}
`;

class index extends React.Component {
  render() {
    const { handleInput, getProduct, searchInput } = this.props;

    return (
      <header className="header">
        <h1>
          Trybe-Libre
          <Logo
            alt="Logo trybe"
            src={ TrybeLogo }
          />
        </h1>
        <div className="container-search">
          <SearchInput
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
        <Link
          data-testid="shopping-cart-button"
          to="/shopping-cart"
        >
          <div className="cart-button">
            <RiShoppingCartLine
              color="rgb(245,245,245)"
              size={ 25 }
            />
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
