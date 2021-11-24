import React, { Component } from 'react';
import styled from 'styled-components';
import { FaBarcode } from 'react-icons/fa';
import { RiReplyLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { getFromStorage } from '../services/storageCartItem';
import { LiStyledReview, ItemName } from '../Style/StyledComponent';

const Main = styled.main`
  align-items: center;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-around;
  max-width:100vw;
  max-height:100vh;
  padding: 10px;
`;

const SectionForm = styled.section`
align-content: center;
border-bottom: 2px groove rgb(46, 46, 46);
border-radius: 10px;
box-shadow: 0 0 5px rgb(46, 46, 46);
display: flex;
flex-flow: row warp;
justify-content: center;
margin-bottom: 20px;
`;

const FormCheck = styled.form`
width: 80vw;
height: 20vh;
margin-bottom: 20px;
padding: 10px;
`;

const SectionPayment = styled.section`
border-bottom: 2px groove rgb(46, 46, 46);
border-radius: 10px;
box-shadow: 0 0 5px rgb(46, 46, 46);
width: 80vw;
height: 20vh;
margin-bottom: 20px;
padding: 10px;
`;

const SectionReview = styled.section`
  border-bottom: 2px groove rgb(46, 46, 46);
  border-radius: 8px;
  box-shadow: 0 0 5px rgb(46, 46, 46);
  width: 80vw;
  height: 35vh;
  margin: 20px 0;
  overflow: auto;
`;

const ButtonBuy = styled.input`
  background-color: rgb(46, 46, 46);
  border-radius: 8px;
  color: whitesmoke;
  font-weight: 700;
  text-transform: uppercase;
  width: 15vw;
  height: 10vh;
  letter-spacing: 3px;
  :hover{
    color: rgb(46, 46, 46);
    background-color: whitesmoke;
  }
`;

const HeaderReview = styled.h3`
  position: sticky;
  top: 0;
  background: rgba(46, 46, 46, 0.98);
  color: whitesmoke;
  margin: 0;
  width: 100%;
  height: 40px;
  z-index: 1;
  padding: 5px 10px 15px 10px;
`;

class Checkout extends Component {
  constructor() {
    super();
    this.state = {
      cartItems: [],
      purchaseTotal: 0,
    };

    this.handleItem = this.handleItem.bind(this);
    this.handlePurchase = this.handlePurchaseTotal.bind(this);
  }

  componentDidMount() {
    const { cartItems } = this.state;
    this.handleItem();
    const result = cartItems.reduce((acc, current) => acc + current.price, 0);
    this.handlePurchaseTotal(result);
  }

  handleItem() {
    this.setState({ cartItems: getFromStorage() });
  }

  handlePurchaseTotal(value) {
    this.setState({
      purchaseTotal: value });
  }

  render() {
    const { state: {
      cartItems,
      purchaseTotal,
    } } = this;
    return (
      <Main>
        <Link to="/shopping-cart">
          <RiReplyLine className="icon-backTo" color="rgb(46,46,46)" />
        </Link>
        <SectionReview>
          <HeaderReview>Revise seus produtos </HeaderReview>
          <p>{purchaseTotal}</p>
          <div>
            <ul>
              {cartItems.map(({ id, thumbnail, title, price, amount }) => (
                <LiStyledReview key={ id }>
                  <img src={ thumbnail } alt={ title } className="cart-item-img" />
                  <ItemName
                    data-testid="shopping-cart-product-name"
                    className="item-name"
                  >
                    {title}
                  </ItemName>
                  <div className="item-amount">
                    <div className="container-buttons">
                      <p
                        className="text-amout"
                        data-testid="shopping-cart-product-quantity"
                      >
                        {amount}
                        x
                      </p>
                    </div>
                  </div>
                  <p className="item-price">
                    R$
                    {price}
                  </p>
                </LiStyledReview>
              ))}
            </ul>
          </div>
        </SectionReview>
        <SectionForm>
          <FormCheck action="">
            <h3>Informações do Comprador</h3>
            <input type="text" name="" id="" placeholder="Nome Completo" />
            <input type="text" name="" id="" placeholder="CPF" />
            <input type="tel" name="" id="" placeholder="Telefone" />
            <input type="text" name="" id="" placeholder="CEP" />
            <input type="text" name="" id="" placeholder="Endereço" />
            <input type="text" name="" id="" placeholder="Complemento" />
            <input type="text" name="" id="" placeholder="Número" />
            <input type="text" name="" id="" placeholder="Cidade" />
            <select name="" id="" value="Estados">
              <option select disabled>Estados</option>
              <option value="AC">Acre</option>
              <option value="AL">Alagoas</option>
              <option value="AP">Amapá</option>
              <option value="AM">Amazonas</option>
              <option value="BA">Bahia</option>
              <option value="CE">Ceará</option>
              <option value="DF">Distrito Federal</option>
              <option value="ES">Espírito Santo</option>
              <option value="GO">Goiás</option>
              <option value="MA">Maranhão</option>
              <option value="MT">Mato Grosso</option>
              <option value="MS">Mato Grosso do Sul</option>
              <option value="MG">Minas Gerais</option>
              <option value="PA">Pará</option>
              <option value="PB">Paraíba</option>
              <option value="PR">Paraná</option>
              <option value="PE">Pernambuco</option>
              <option value="PI">Piauí</option>
              <option value="RJ">Rio de Janeiro</option>
              <option value="RN">Rio Grande do Norte</option>
              <option value="RS">Rio Grande do Sul</option>
              <option value="RO">Rondônia</option>
              <option value="RR">Roraima</option>
              <option value="SC">Santa Catarina</option>
              <option value="SP">São Paulo</option>
              <option value="SE">Sergipe</option>
              <option value="TO">Tocantins</option>
            </select>
          </FormCheck>
        </SectionForm>
        <SectionPayment>
          <h3>Método de pagamento</h3>
          <form action="">
            <label htmlFor="boleto-input">
              Boleto
              <br />
              <input type="radio" name="" id="boleto-input" />
              <br />
              <FaBarcode />
            </label>
          </form>

        </SectionPayment>
        <ButtonBuy type="button" value="Comprar" />
      </Main>
    );
  }
}

export default Checkout;
