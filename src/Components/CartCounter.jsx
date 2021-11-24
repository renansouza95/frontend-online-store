import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { getFromStorage } from '../services/storageCartItem';
import '../Style/shoppingCart.css';

const Counter = styled.span`
  position: absolute;
  top: 5px;
  right: 25px;
  color: whitesmoke;
  text-align: center;
  border-radius:50%;
  border: 2px solid white;
  width:30px;
  height:30px;
`;

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
      <Counter className="cart-amount" data-testid="shopping-cart-size">{amount}</Counter>
    );
  }
}

CartCounter.propTypes = {
  upAmount: PropTypes.bool.isRequired,
};

export default CartCounter;
