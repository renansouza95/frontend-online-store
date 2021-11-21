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
    const { handleInput } = this.props;

    return (
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
    );
  }
}

index.propTypes = {
  handleInput: PropTypes.func.isRequired,
};

export default index;
