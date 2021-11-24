import { getFromStorage } from './storageCartItem';

export default function checkAvailability(id) {
  const cartItems = getFromStorage();
  const product = cartItems.find(({ id: productId }) => productId === id);
  if (product) {
    const { amount, availableQuantity: totalQuantity } = product;
    const availableQuantity = totalQuantity - amount;

    return availableQuantity > 0;
  }
  return true;
}
