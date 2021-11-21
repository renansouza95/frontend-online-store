import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { RiShoppingCartLine, RiReplyLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import Loader from 'react-loader-spinner';
import { getDetailedProduct, getProductDescription } from '../services/api';
import changeImageSize from '../services/changeImageSize';
import '../Style/productDetails.css';

class ProductDetails extends Component {
  constructor() {
    super();

    this.state = {
      product: {},
      description: {},

      loading: true,
    };

    this.getProduct = this.getProduct.bind(this);
  }

  componentDidMount() {
    this.getProduct();
  }

  async getProduct() {
    const { match: { params: { id } } } = this.props;

    const response = await getDetailedProduct(id);
    const responseDescription = await getProductDescription(id);
    this.setState({
      product: response,
      description: responseDescription,
    }, () => {
      this.setState({ loading: false });
    });
  }

  render() {
    const {
      product: { title, price, thumbnail = '', attributes = [] },
      description: { plain_text: description },
      loading,
    } = this.state;
    const image = changeImageSize(thumbnail, 'O');

    const loader = (
      <div className="loader">
        <Loader type="ThreeDots" color="#272727" height={ 40 } width={ 40 } />
      </div>
    );

    const attributesList = (
      attributes.map(({ value_id: id, name, value_name: info }, index) => {
        info = (info !== null && info.includes(',')) ? info.split(',').join(', ') : info;

        return (info === null) ? '' : (
          <li key={ `${id}(${index})` } className="product-specification">
            {`${name}: ${info}`}
          </li>
        );
      })
    );

    const details = (
      <div className="product-details">
        <div className="product-info">
          <div className="product-basic">
            <p
              data-testid="product-detail-name"
              className="product-name"
            >
              {title}
            </p>
            <p className="product-price">
              { `R$ ${price}` }
            </p>
            <img src={ image } alt={ title } />
          </div>
          <div className="product-specifications">
            <p>Especificações: </p>
            <ul>
              {attributes.length !== 0 && attributesList}
            </ul>
          </div>
        </div>
        <div className="product-description">
          <p>{description}</p>
        </div>
      </div>
    );

    return (
      <div className="product-details-page">
        <div>
          <Link to="/">
            <RiReplyLine />
          </Link>
          <Link to="/shopping-cart">
            <RiShoppingCartLine />
          </Link>
        </div>
        {loading ? loader : details}
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
