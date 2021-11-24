import React, { Component } from 'react';
import styled from 'styled-components';
import { FaBarcode, FaCcMastercard, FaCreditCard } from 'react-icons/fa';
import { RiReplyLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';

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
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

const FormCheck = styled.form`
border: 2px solid black;
width: 80vw;
height: 20vh;
margin-bottom: 20px;
padding: 10px;
`;

const SectionPayment = styled.section`
border: 2px solid black;
width: 80vw;
height: 20vh;
margin-bottom: 20px;
padding: 10px;
`;

const SectionReview = styled.section`
  border: 2px solid black;
  width: 80vw;
  height: 20vh;
  margin: 20px 0;
  padding: 10px;
`;

class Checkout extends Component {
  render() {
    return (
      <Main>
        <Link to="/">
          <RiReplyLine className="icon-backTo" color="rgb(46,46,46)" />
        </Link>
        <SectionReview>
          <h3>Revise seus produtos</h3>
        </SectionReview>
        <SectionForm>
          <FormCheck action="">
            <h3>Informações do Comprador</h3>
            <input type="text" name="" id="" placeholder="Nome Completo" />
            <input type="number" name="" id="" placeholder="CPF" />
            <input type="tel" name="" id="" placeholder="Telefone" />
            <input type="number" name="" id="" placeholder="CEP" />
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
        <input type="button" value="Comprar" />
      </Main>
    );
  }
}

export default Checkout;
