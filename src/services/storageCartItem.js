export function addToStorage(item) {
  let cartItems = JSON.parse(localStorage.getItem('cartItems'));
  if (cartItems === null) {
    item.amount = 1;
    cartItems = [item];
  } else {
    const sameItem = cartItems.find((it) => it.id === item.id);
    if (sameItem) {
      sameItem.amount += 1;
    } else {
      item.amount = 1;
      cartItems = [...cartItems, item];
    }
  }
  localStorage.setItem('cartItems', JSON.stringify(cartItems));
}

export function getFromStorage() {
  const cartItems = JSON.parse(localStorage.getItem('cartItems'));
  return (!cartItems) ? [] : cartItems;
}

export function addCartToStorage(cartItems) {
  localStorage.setItem('cartItems', JSON.stringify(cartItems));
}
