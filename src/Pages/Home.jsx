import React, { Component } from 'react';
import { RiShoppingCartLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { getCategories } from '../services/api';
import '../Style/home.css';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      categories: [],
    };

    this.handleCategory = this.handleCategory.bind(this);
  }

  componentDidMount() {
    this.handleCategory();
  }

  async handleCategory() {
    this.setState({ categories: await getCategories() });
  }

  render() {
    const { categories } = this.state;
    console.log(categories);
    return (
      <>
        <header>
          <div className="container-search">
            <input className="input-search" type="text" placeholder="" />
            <input className="btn-search" type="submit" value="Search" />
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
            <p data-testid="home-initial-message">
              Digite algum termo de pesquisa ou escolha uma categoria.
            </p>
          </div>
        </main>
      </>
    );
  }
}

export default Home;
