import React, { Component } from 'react';
import { RiShoppingCartLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';
import CardProduct from '../Components/CardProduct';
import '../Style/home.css';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      categories: [],
      products: [],
      input: '',
    };

    this.handleCategory = this.handleCategory.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.getProduct = this.getProduct.bind(this);
  }

  componentDidMount() {
    this.handleCategory();
  }

  async handleCategory() {
    this.setState({ categories: await getCategories() });
  }

  handleInput({ target }) {
    const { value } = target;

    this.setState({ input: value });
  }

  async getProduct(e) {
    e.preventDefault();
    const { input } = this.state;
    const response = await getProductsFromCategoryAndQuery('', input);
    this.setState({ products: response.results });
  }

  render() {
    const { handleInput, getProduct } = this;
    const { categories, input, products } = this.state;
    return (
      <>
        <header>
          <div className="container-search">
            <input
              data-testid="query-input"
              className="input-search"
              type="text"
              placeholder="Procure seu produto..."
              onChange={ handleInput }
              value={ input }
            />
            <input
              data-testid="query-button"
              className="btn-search"
              type="submit"
              value="Search"
              onClick={ getProduct }
            />
          </div>
          <Link data-testid="shopping-cart-button" to="/shopping-cart">
            <RiShoppingCartLine />
          </Link>
        </header>

        <main>
          <aside>
            <ul>
              {categories.map(({ id, name }) => (
                <li key={ id }>
                  <label data-testid="category" htmlFor={ id }>
                    <input type="radio" name="categories" id={ id } />
                    {name}
                  </label>
                </li>
              ))}
            </ul>
          </aside>
          <div>
            <p data-testid="home-initial-message" className="initial-message">
              Digite algum termo de pesquisa ou escolha uma categoria.
            </p>
            {products.map(({ title, price, thumbnail, id }) => (
              <CardProduct
                key={ id }
                title={ title }
                thumbnail={ thumbnail }
                price={ price }
              />
            ))}
          </div>
        </main>
      </>
    );
  }
}

export default Home;