export const cart = [];

export function cartLoop(name, id) {
  let a = -1;
  cart.forEach((item, index) => {
    if (item.productId === id) {
      console.log(index);
      a = index;
    }
  });
  if (a !== -1) {
    cart[a].quantity += 1;
  } else {
    cart.push({ productId: id, productName: name, quantity: 1 });
  }
}

export function cartQuantity() {
  let total = 0;
  cart.forEach((item) => {
    total += item.quantity;
  });
  return total;
}