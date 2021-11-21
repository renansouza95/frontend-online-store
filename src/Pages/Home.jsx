import React, { Component } from 'react';
import { getProductsFromCategoryAndQuery } from '../services/api';
import Products from '../Components/Products';
import Header from '../Components/Header';
import Categories from '../Components/Categories';
import '../Style/home.css';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
      searchInput: '',
      categoryId: '',
    };

    this.handleInput = this.handleInput.bind(this);
    this.getProduct = this.getProduct.bind(this);
    this.getCategoryProducts = this.getCategoryProducts.bind(this);
  }

  handleInput({ target: { value, checked, id } }) {
    if (checked) {
      this.setState({ categoryId: id }, () => {
        this.getCategoryProducts();
      });
    } else {
      this.setState({ searchInput: value });
    }
  }

  async getProduct(e) {
    e.preventDefault();
    const { searchInput } = this.state;
    const response = await getProductsFromCategoryAndQuery('', searchInput);
    this.setState({ products: response.results }, () => {
      this.setState({ searchInput: '' });
    });
  }

  async getCategoryProducts() {
    const { categoryId } = this.state;
    const response = await getProductsFromCategoryAndQuery(categoryId);
    this.setState({ products: response.results });
  }

  render() {
    const { handleInput, getProduct } = this;
    const { searchInput, products } = this.state;

    const initialMessage = (
      <p data-testid="home-initial-message" className="initial-message">
        Digite algum termo de pesquisa ou escolha uma categoria.
      </p>
    );

    return (
      <>
        <Header
          handleInput={ handleInput }
          getProduct={ getProduct }
          searchInput={ searchInput }
        />
        <main>
          <Categories handleInput={ handleInput } />
          <div>
            {products.length === 0 ? initialMessage : <Products products={ products } />}
          </div>
        </main>
      </>
    );
  }
}

export default Home;
