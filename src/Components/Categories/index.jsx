import React from 'react';
import PropTypes from 'prop-types';
import { getCategories } from '../../services/api';

class index extends React.Component {
  constructor() {
    super();

    this.state = {
      categories: [],
    };

    this.handleCategories = this.handleCategories.bind(this);
  }

  componentDidMount() {
    this.handleCategories();
  }

  async handleCategories() {
    this.setState({ categories: await getCategories() });
  }

  render() {
    const { categories } = this.state;
    const { getCategoryProducts } = this.props;

    return (
      <aside className="categories">
        <ul>
          {categories.map(({ id, name }) => (
            <li key={ id }>
              <button
                data-testid="category"
                type="button"
                id={ id }
                onClick={ getCategoryProducts }
              >
                {name}
              </button>
            </li>
          ))}
        </ul>
      </aside>
    );
  }
}

index.propTypes = {
  getCategoryProducts: PropTypes.func.isRequired,
};

export default index;
