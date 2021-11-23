import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { AiOutlineStar, AiFillStar } from 'react-icons/ai';

class StarsReview extends Component {
  constructor() {
    super();

    this.state = {
      starsObj: [
        { name: 'star1', filled: false },
        { name: 'star2', filled: false },
        { name: 'star3', filled: false },
        { name: 'star4', filled: false },
        { name: 'star5', filled: false },
      ],
    };

    this.starClick = this.starClick.bind(this);
  }

  starClick({ target: { name } }) {
    const { starsObj } = this.state;
    const index = parseInt(name.split('star').join(''), 10) - 1;
    const newStarsObj = starsObj.map((star, i) => {
      if (i <= index) star.filled = true;
      if (i > index) star.filled = false;
      return star;
    });

    const { handleStars } = this.props;
    handleStars(index + 1);

    this.setState({ starsObj: newStarsObj });
  }

  render() {
    const { starsObj } = this.state;

    return (
      <div>
        {starsObj.map(({ name, filled }) => (
          <span key={ name }>
            <button
              type="button"
              className="star btn-star"
              name={ name }
              onClick={ this.starClick }
            >
              {!filled ? <AiOutlineStar /> : <AiFillStar />}
            </button>
          </span>
        ))}
      </div>
    );
  }
}

StarsReview.propTypes = {
  handleStars: PropTypes.func.isRequired,
};

export default StarsReview;
