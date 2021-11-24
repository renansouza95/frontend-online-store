import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { RiShoppingCartLine } from 'react-icons/ri';
import '../../Style/header.css';
import TrybeLogo from '../../image/trybe-logo white.png';
import CartCounter from '../CartCounter';
import { MainHeader, LinkStyle, Logo, SearchInput } from '../../Style/StyledComponent';

class index extends React.Component {
  render() {
    const { handleInput, getProduct, searchInput, upAmount } = this.props;

    return (
      <header className="header">
        <LinkStyle href="/">
          <MainHeader>
            Trybe-Libre
            <Logo
              alt="Logo trybe"
              src={ TrybeLogo }
            />
          </MainHeader>
        </LinkStyle>
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
            className="btn btn-white btn-search"
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
            <CartCounter upAmount={ upAmount } />
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
  upAmount: PropTypes.bool.isRequired,
};

export default index;
