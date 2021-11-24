import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { RiReplyLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { IoIosRemoveCircleOutline, IoIosAddCircleOutline } from 'react-icons/io';
import { BsTrashFill } from 'react-icons/bs';
import { getFromStorage, addCartToStorage } from '../services/storageCartItem';
import '../Style/shoppingCart.css';
import { ItemName, LiStyled } from '../Style/StyledComponent';

class ShoppingCart extends Component {
  constructor() {
    super();

    this.state = {
      cartItems: [],
      total: 0,
    };

    this.setCartItems = this.setCartItems.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.amountLess = this.amountLess.bind(this);
    this.amountPlus = this.amountPlus.bind(this);
    this.updateTotalPrice = this.updateTotalPrice.bind(this);
  }

  componentDidMount() {
    this.setCartItems();
  }

  setCartItems() {
    this.setState({ cartItems: getFromStorage() }, () => {
      this.updateTotalPrice();
    });
  }

  removeItem({ target: { id } }) {
    const { cartItems } = this.state;
    const newCart = cartItems.filter((item) => item.id !== id);

    this.setState({ cartItems: newCart }, () => {
      this.updateTotalPrice();
    });
    addCartToStorage(newCart);

    const { updateAmount } = this.props;
    updateAmount();
  }

  amountLess({ target: { id } }) {
    const { cartItems } = this.state;
    const cartItem = cartItems.find((item) => item.id === id);
    cartItem.amount -= 1;
    this.setState({ cartItems }, () => {
      this.updateTotalPrice();
    });
    addCartToStorage(cartItems);

    const { updateAmount } = this.props;
    updateAmount();
  }

  amountPlus({ target: { id } }) {
    const { cartItems } = this.state;
    const cartItem = cartItems.find((item) => item.id === id);
    cartItem.amount += 1;
    this.setState({ cartItems }, () => {
      this.updateTotalPrice();
    });
    addCartToStorage(cartItems);

    const { updateAmount } = this.props;
    updateAmount();
  }

  updateTotalPrice() {
    const { cartItems } = this.state;
    const total = cartItems.reduce((acc, { price, amount }) => {
      const itemsPrice = price * amount;
      return acc + itemsPrice;
    }, 0).toFixed(2);

    this.setState({ total });
  }

  render() {
    const { cartItems, total } = this.state;
    return (
      <div className="shopping-cart-page">
        <Link to="/">
          <RiReplyLine className="icon-backTo" color="rgb(46,46,46)" />
        </Link>
        {cartItems.length === 0
          ? (
            <p
              className="cart-title"
              data-testid="shopping-cart-empty-message"
            >
              Seu carrinho está vazio
            </p>
          ) : (
            <>
              <p className="cart-title">Carrinho de Itens</p>
              <p className="cart-subtotal">{`Subtotal: ${total}`}</p>
            </>
          )}
        <div className="cart-items">
          <ul>
            {cartItems.map(({
              id,
              thumbnail,
              title,
              price,
              amount,
              availableQuantity,
            }) => (
              <LiStyled key={ id }>
                <button
                  className="btn-icon-trash"
                  type="button"
                  id={ id }
                  onClick={ this.removeItem }
                >
                  <BsTrashFill size={ 20 } style={ { color: 'black' } } />
                </button>
                <img src={ thumbnail } alt={ title } className="cart-item-img" />
                <ItemName
                  data-testid="shopping-cart-product-name"
                  className="item-name"
                >
                  {title}
                </ItemName>
                <div className="item-amount">
                  <div className="container-buttons">
                    <button
                      data-testid="product-decrease-quantity"
                      type="button"
                      id={ id }
                      onClick={ this.amountLess }
                      disabled={ amount === 1 }
                      className="button-sub"
                    >
                      <IoIosRemoveCircleOutline size={ 20 } />
                    </button>
                    <p
                      className="text-amout"
                      data-testid="shopping-cart-product-quantity"
                    >
                      {amount}
                    </p>
                    <button
                      data-testid="product-increase-quantity"
                      type="button"
                      id={ id }
                      onClick={ this.amountPlus }
                      disabled={ amount >= availableQuantity }
                      className="button-sum"
                    >
                      <IoIosAddCircleOutline size={ 20 } />
                    </button>
                  </div>
                </div>
                <p className="item-price">
                  R$
                  {price}
                </p>
              </LiStyled>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

ShoppingCart.propTypes = {
  updateAmount: PropTypes.func.isRequired,
};

export default ShoppingCart;
