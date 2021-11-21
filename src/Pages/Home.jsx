import React, { Component } from 'react';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';
import CardProduct from '../Components/CardProduct';
import Header from '../Components/Header';
import '../Style/home.css';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      categories: [],
      products: [],
      searchInput: '',
      categoryId: '',
    };

    this.handleCategory = this.handleCategory.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.getProduct = this.getProduct.bind(this);
    this.getCategoryProducts = this.getCategoryProducts.bind(this);
  }

  componentDidMount() {
    this.handleCategory();
  }

  async handleCategory() {
    this.setState({ categories: await getCategories() });
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
    const { categories, searchInput, products } = this.state;
    return (
      <>
        <Header
          handleInput={ handleInput }
          getProduct={ getProduct }
          searchInput={ searchInput }
        />
        <main>
          <aside>
            <ul>
              {categories.map(({ id, name }) => (
                <li key={ id }>
                  <label data-testid="category" htmlFor={ id }>
                    <input
                      type="radio"
                      name="categories"
                      id={ id }
                      onChange={ handleInput }
                    />
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
                id={ id }
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
