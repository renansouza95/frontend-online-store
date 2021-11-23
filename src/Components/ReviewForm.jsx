import React, { Component } from 'react';
import PropTypes from 'prop-types';
import StarsReview from './StarsReview';
import { addReview } from '../services/storageReviews';

class ReviewForm extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      stars: 0,
      comment: '',

      disableButton: true,
      resetStars: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleStars = this.handleStars.bind(this);
    this.validateFields = this.validateFields.bind(this);
    this.evaluateButton = this.evaluateButton.bind(this);
  }

  handleChange({ target: { name, value } }) {
    this.setState({ [name]: value }, () => {
      this.setState({ disableButton: this.validateFields() });
    });
  }

  handleStars(stars) {
    this.setState({ stars }, () => {
      this.setState({ disableButton: this.validateFields() });
    });
  }

  validateFields() {
    const { email, stars } = this.state;
    const validateEmail = email.match(
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/igm,
    );
    /* Source: https://www.regextester.com/100026 */
    const validations = (
      !validateEmail || stars === 0
    );
    console.log(validations);

    return validations;
  }

  evaluateButton() {
    const { email, stars, comment } = this.state;
    const reviewObj = { email, stars, comment };
    const { setReviews } = this.props;
    addReview(reviewObj);

    this.setState({ email: '', stars: 0, comment: '', resetStars: true }, () => {
      this.setState({ resetStars: false });
      setReviews();
    });
  }

  render() {
    const { email, stars, comment, disableButton, resetStars } = this.state;

    return (
      <div className="review-form">
        <form>
          <div className="form-row">
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={ email }
              onChange={ this.handleChange }
            />
            <div className="stars">
              <StarsReview
                handleStars={ this.handleStars }
                stars={ stars }
                resetStars={ resetStars }
                clickable
              />
            </div>
          </div>
          <div className="form-row">
            <textarea
              data-testid="product-detail-evaluation"
              name="comment"
              placeholder="Mensagem (opcional)"
              cols="30"
              rows="10"
              value={ comment }
              onChange={ this.handleChange }
            />
          </div>
          <div className="form-row">
            <button
              type="button"
              className="btn btn-black"
              onClick={ this.evaluateButton }
              disabled={ disableButton }
            >
              Avaliar
            </button>
          </div>
        </form>
      </div>
    );
  }
}

ReviewForm.propTypes = {
  setReviews: PropTypes.func.isRequired,
};

export default ReviewForm;
