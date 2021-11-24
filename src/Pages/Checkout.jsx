import React, { Component } from 'react';
import { FaBarcode } from 'react-icons/fa';
import { RiReplyLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { getFromStorage } from '../services/storageCartItem';
import {
  LiStyledReview,
  ItemName,
  Main,
  SectionReview,
  SectionForm,
  HeaderReview,
  PurchaseTotal,
  FormCheck,
  ContainerProduct,
  SectionPayment,
  ButtonBuy,
} from '../Style/StyledComponent';

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
    this.handleItem();
    this.handlePurchaseTotal();
  }

  handleItem() {
    this.setState({ cartItems: getFromStorage() });
  }

  handlePurchaseTotal() {
    const result = getFromStorage().reduce((acc, current) => acc + current.price, 0);
    this.setState({
      purchaseTotal: result });
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
          <PurchaseTotal>{`R$ ${purchaseTotal}`}</PurchaseTotal>
          <ContainerProduct>
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
          </ContainerProduct>
        </SectionReview>
        <SectionForm>
          <FormCheck action="">
            <h3>Informações do Comprador</h3>
            <input
              data-testid="checkout-fullname"
              type="text"
              placeholder="Nome Completo"
            />
            <input
              data-testid="checkout-cpf"
              type="text"
              placeholder="CPF"
            />
            <input
              type="text"
              placeholder="Email"
              data-testid="checkout-email"
            />
            <input
              data-testid="checkout-phone"
              type="tel"
              placeholder="Telefone"
            />
            <input
              type="text"
              placeholder="CEP"
              data-testid="checkout-cep"
            />
            <input
              type="text"
              placeholder="Endereço"
              data-testid="checkout-address"
            />
            <input type="text" name="" id="" placeholder="Complemento" />
            <input type="text" name="" id="" placeholder="Número" />
            <input type="text" name="" id="" placeholder="Cidade" />
            <select>
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
