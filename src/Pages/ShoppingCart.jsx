import React, { Component } from 'react';
import { RiShoppingCartLine, RiReplyLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import {
  IoIosCloseCircleOutline,
  IoIosRemoveCircleOutline,
  IoIosAddCircleOutline } from 'react-icons/io';
import { getFromStorage, addCartToStorage } from '../services/storageCartItem';
import '../Style/shoppingCart.css';

class ShoppingCart extends Component {
  constructor() {
    super();

    this.state = {
      cartItems: [],
    };

    this.setCartItems = this.setCartItems.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.amountLess = this.amountLess.bind(this);
    this.amountPlus = this.amountPlus.bind(this);
  }

  componentDidMount() {
    this.setCartItems();
  }

  setCartItems() {
    this.setState({ cartItems: getFromStorage() });
  }

  removeItem() {}

  amountLess({ target: { id } }) {
    const { cartItems } = this.state;
    const cartItem = cartItems.find((item) => item.id === id);
    cartItem.amount -= 1;
    this.setState({ cartItems });
    addCartToStorage(cartItems);
  }

  amountPlus({ target: { id } }) {
    const { cartItems } = this.state;
    const cartItem = cartItems.find((item) => item.id === id);
    cartItem.amount += 1;
    this.setState({ cartItems });
    addCartToStorage(cartItems);
  }

  render() {
    const { cartItems } = this.state;
    return (
      <div className="shopping-cart-page">
        <Link to="/">
          <RiReplyLine />
        </Link>
        <RiShoppingCartLine />
        {cartItems.length === 0
        && <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>}
        <div className="cart-items">
          <ul>
            {cartItems.map(({ id, thumbnail, title, price, amount }) => (
              <li key={ id }>
                <button
                  type="button"
                  id={ id }
                  onClick={ this.removeItem }
                >
                  <IoIosCloseCircleOutline size={ 30 } />
                </button>
                <img src={ thumbnail } alt={ title } className="cart-item-img" />
                <p
                  data-testid="shopping-cart-product-name"
                  className="item-name"
                >
                  {title}
                </p>
                <div className="item-amount">
                  <button
                    type="button"
                    id={ id }
                    onClick={ this.amountLess }
                    disabled={ amount === 1 }
                  >
                    <IoIosRemoveCircleOutline size={ 20 } />
                  </button>
                  <p data-testid="shopping-cart-product-quantity">{amount}</p>
                  <button
                    type="button"
                    id={ id }
                    onClick={ this.amountPlus }
                  >
                    <IoIosAddCircleOutline size={ 20 } />
                  </button>
                </div>
                <p className="item-price">{price}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default ShoppingCart;
