import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getDetailedProduct } from '../services/api';
import changeImageSize from '../services/changeImageSize';

class ProductDetails extends Component {
  constructor() {
    super();

    this.state = {
      product: {},
    };

    this.getProduct = this.getProduct.bind(this);
  }

  componentDidMount() {
    this.getProduct();
  }

  async getProduct() {
    const { match: { params: { id } } } = this.props;

    const response = await getDetailedProduct(id);
    this.setState({ product: response });
  }

  render() {
    const { product: { title, price, thumbnail = '', attributes = [] } } = this.state;
    const image = changeImageSize(thumbnail);

    const attributesList = (
      attributes.map(({ value_id: id, name, value_name: info }, index) => (
        <li key={ `${id}(${index})` } className="product-specification">
          {`${name}: ${info}`}
        </li>
      ))
    );

    return (
      <div>
        <div className="product-basic">
          <span
            data-testid="product-detail-name"
            className="product-name"
          >
            { title }
          </span>
          <span className="product-price">
            - R$
            { price }
          </span>
        </div>
        <div className="product">
          <div className="product-img">
            <img src={ image } alt={ title } />
          </div>
          <div className="product-specifications">
            <ul>
              {attributes.length !== 0 && attributesList}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

ProductDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default ProductDetails;
