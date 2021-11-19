import React, { Component } from 'react';
import { RiShoppingCartLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div>
        <div>
          <input type="text" placeholder="" />
          <input type="submit" value="Search" />
          <Link data-testid="shopping-cart-button" to="/shopping-cart">
            <RiShoppingCartLine />
          </Link>
        </div>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
      </div>
    );
  }
}

export default Home;
