import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import ShoppingCart from './Pages/ShoppingCart';
import ProductDetails from './Pages/ProductDetails';
import Header from './Components/Header';
import { getProductsFromCategoryAndQuery } from './services/api';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      searchInput: '',
      categoryId: '',
      products: [],
      clickSearch: false,

      loadingProduct: false,
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

  async getCategoryProducts({ target: { id } }) {
    this.setState({ categoryId: id }, () => {
      const { categoryId } = this.state;

      this.setState({ loadingProduct: true }, () => {
        getProductsFromCategoryAndQuery(categoryId)
          .then((response) => {
            this.setState({
              products: response.results,
              loadingProduct: false,
            });
          });
      });
    });
  }

  async getProduct(e) {
    e.preventDefault();
    const { searchInput } = this.state;

    this.setState({ loadingProduct: true, clickSearch: true }, () => {
      getProductsFromCategoryAndQuery('', searchInput)
        .then((response) => {
          this.setState({ products: response.results }, () => {
            this.setState({ searchInput: '', loadingProduct: false, clickSearch: false });
          });
        });
    });
  }

  render() {
    const { searchInput, products, loadingProduct, clickSearch } = this.state;
    console.log(clickSearch);

    return (
      <BrowserRouter>
        <Header
          handleInput={ this.handleInput }
          getProduct={ this.getProduct }
          searchInput={ searchInput }
        />
        <Switch>
          <Route exact path="/shopping-cart" component={ ShoppingCart } />
          <Route exact path="/product/:id" component={ ProductDetails } />
          <Route
            exact
            path="/"
            render={ (props) => (
              <Home
                { ...props }
                products={ products }
                loading={ loadingProduct }
                getCategoryProducts={ this.getCategoryProducts }
              />
            ) }
          />
        </Switch>
        {clickSearch ? <Redirect to="/" /> : ''}
      </BrowserRouter>
    );
  }
}

export default App;
