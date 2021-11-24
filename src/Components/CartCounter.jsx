import React from 'react';
import PropTypes from 'prop-types';
import { getFromStorage } from '../services/storageCartItem';
import '../Style/shoppingCart.css';

class CartCounter extends React.Component {
  constructor() {
    super();

    this.state = ({ amount: 0 });

    this.setAmount = this.setAmount.bind(this);
  }

  componentDidMount() {
    this.setAmount();
  }

  componentDidUpdate() {
    const { upAmount } = this.props;
    if (upAmount) this.setAmount();
  }

  setAmount() {
    const items = getFromStorage();
    const amount = items.reduce((acc, { amount: am }) => acc + am, 0);

    this.setState({ amount });
  }

  render() {
    const { amount } = this.state;

    return (
      <span className="cart-amount" data-testid="shopping-cart-size">{amount}</span>
    );
  }
}

CartCounter.propTypes = {
  upAmount: PropTypes.bool.isRequired,
};

export default CartCounter;
