import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Loader from 'react-loader-spinner';
import Products from '../Components/Products';
import Categories from '../Components/Categories';
import '../Style/home.css';

class Home extends Component {
  render() {
    const { loading, getCategoryProducts, products, updateAmount } = this.props;

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
      products.length === 0 ? initialMessage : (
        <Products products={ products } updateAmount={ updateAmount } />
      )
    );

    return (
      <main className="main-content">
        <Categories getCategoryProducts={ getCategoryProducts } />
        <div className="products-container">
          {loading ? loader : productsContainer}
        </div>
      </main>
    );
  }
}

Home.propTypes = {
  products: PropTypes.arrayOf(PropTypes.any).isRequired,
  loading: PropTypes.bool.isRequired,
  getCategoryProducts: PropTypes.func.isRequired,
  updateAmount: PropTypes.func.isRequired,
};

export default Home;
