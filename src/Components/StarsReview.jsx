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
    this.setReviewStars = this.setReviewStars.bind(this);
  }

  componentDidMount() {
    const { clickable } = this.props;
    if (!clickable) this.setReviewStars();
  }

  componentDidUpdate() {
    const { resetStars } = this.props;
    if (resetStars) this.resetStars();
  }

  setReviewStars() {
    const { starsObj } = this.state;
    const { selectedStars } = this.props;
    const newStarsObj = starsObj.map((star, i) => {
      if (i <= selectedStars - 1) star.filled = true;
      if (i > selectedStars - 1) star.filled = false;
      return star;
    });

    this.setState({ starsObj: newStarsObj });
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

  resetStars() {
    const { starsObj } = this.state;
    const newStarsObj = starsObj.map((star) => {
      star.filled = false;
      return star;
    });
    this.setState({ starsObj: newStarsObj });
  }

  render() {
    const { starsObj } = this.state;
    const { clickable } = this.props;

    return (
      <div>
        {starsObj.map(({ name, filled }) => (
          <span key={ name }>
            {clickable ? (
              <button
                type="button"
                className="star btn-star"
                name={ name }
                onClick={ this.starClick }
              >
                {!filled ? <AiOutlineStar /> : <AiFillStar />}
              </button>
            ) : (
              <span>
                {!filled ? <AiOutlineStar /> : <AiFillStar />}
              </span>
            )}
          </span>
        ))}
      </div>
    );
  }
}

StarsReview.propTypes = {
  clickable: PropTypes.bool.isRequired,
  handleStars: PropTypes.func,
  resetStars: PropTypes.bool,
  selectedStars: PropTypes.number,
};

StarsReview.defaultProps = {
  selectedStars: 0,
  handleStars: () => {},
  resetStars: false,
};

export default StarsReview;
