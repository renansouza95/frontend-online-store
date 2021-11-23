import React, { Component } from 'react';
import StarsReview from './StarsReview';

class ReviewForm extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      stars: 0,
      comment: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleStars = this.handleStars.bind(this);
    this.evaluateButton = this.evaluateButton.bind(this);
  }

  handleChange({ target: { name, value } }) {
    this.setState({ [name]: value });
  }

  handleStars(stars) {
    this.setState({ stars });
  }

  evaluateButton() {}

  render() {
    const { email, stars, comment } = this.state;

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
              <StarsReview handleStars={ this.handleStars } stars={ stars } />
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
            >
              Avaliar
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default ReviewForm;
