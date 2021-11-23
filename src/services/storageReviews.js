export function addReview(reviewObj) {
  let reviews = JSON.parse(localStorage.getItem('reviews'));
  reviews = (!reviews) ? [] : reviews;
  const storageObj = {
    email: '',
    stars: 0,
    comment: '',
  };

  Object.assign(storageObj, reviewObj);
  reviews.push(storageObj);

  localStorage.setItem('reviews', JSON.stringify(reviews));
}

export function getReviews() {
  return JSON.parse(localStorage.getItem('reviews'));
}
