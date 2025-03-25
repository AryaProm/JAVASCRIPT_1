// export const cart = []
import { products } from "./products.js";

export let cart = products;
export function cartLoop(name, id) {
  let a = -1;
  cart.forEach((item, index) => {
    if (item.productId === id) {
      a = index;
    }
  });
  if (a !== -1) {
    cart[a].quantity += 1;
  } else {
    cart.push({
      productId: id,
      productName: name,
      quantity: 1,
    });
  }
}

export function cartQuantity() {
  let total = 0;
  cart.forEach((item) => {
    total += item.quantity;
  });
  return total;
}

let newCart = []
export function New_Cart(id){
  cart.forEach((item) => {
    if(item.id !== id){
      newCart.push(item)
      console.log("k")
    }
  })
  cart  = newCart
}
