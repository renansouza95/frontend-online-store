import React, { Component } from 'react';
import Loader from 'react-loader-spinner';
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
      loading: false,
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

    this.setState({ loading: true }, () => {
      getProductsFromCategoryAndQuery('', searchInput)
        .then((response) => {
          this.setState({ products: response.results }, () => {
            this.setState({ searchInput: '', loading: false });
          });
        });
    });
  }

  async getCategoryProducts({ target: { id } }) {
    this.setState({ categoryId: id }, () => {
      const { categoryId } = this.state;

      this.setState({ loading: true }, () => {
        getProductsFromCategoryAndQuery(categoryId)
          .then((response) => {
            this.setState({
              products: response.results,
              loading: false,
            });
          });
      });
    });
  }

  render() {
    const { handleInput, getProduct, getCategoryProducts } = this;
    const { searchInput, products, loading } = this.state;

    const loader = (
      <div className="loader">
        <Loader type="ThreeDots" color="#272727" height={ 40 } width={ 40 } />
      </div>
    );

    const initialMessage = (
      <p data-testid="home-initial-message" className="initial-message">
        Digite algum termo de pesquisa ou escolha uma categoria.
      </p>
    );

    const productsContainer = (
      products.length === 0 ? initialMessage : <Products products={ products } />
    );

    return (
      <>
        <Header
          handleInput={ handleInput }
          getProduct={ getProduct }
          searchInput={ searchInput }
        />
        <main className="main-content">
          <Categories getCategoryProducts={ getCategoryProducts } />
          <div className="products-container">
            {loading ? loader : productsContainer}
          </div>
        </main>
      </>
    );
  }
}

export default Home;
