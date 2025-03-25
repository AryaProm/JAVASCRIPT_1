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

/////////////////////////////////////////////////

// Sample cart array (replace this with your actual cart data)

// // Function to update the checkout page with the cart items and order summary
// function updateCheckout() {
//   const cartItemsContainer = document.getElementById('cart-items');
//   const subtotalElement = document.getElementById('subtotal');
//   const taxesElement = document.getElementById('taxes');
//   const shippingElement = document.getElementById('shipping');
//   const finalTotalElement = document.getElementById('final-total');

//   // Clear previous items
//   cartItemsContainer.innerHTML = '';

//   let subtotal = 0;

//   // Loop through the cart and display each item
//   cart.forEach((item, index) => {
//     const itemTotal = item.price * item.quantity;
//     subtotal += itemTotal;

//     // Create an item element to display
//     const itemElement = document.createElement('div');
//     itemElement.classList.add('cart-item');
//     itemElement.innerHTML = `
//       <div class="cart-item-left">
//         <img src="${item.image}" alt="${item.name}" class="product-image" />
//         <div class="cart-item-info">
//           <span class="product-name">${item.name}</span>
//           <span class="product-price">$${item.price.toFixed(2)}</span>
//           <div class="quantity">
//             <span>Quantity:</span>
//             <button class="update-quantity" data-action="decrease" data-index="${index}">-</button>
//             <span class="product-quantity">${item.quantity}</span>
//             <button class="update-quantity" data-action="increase" data-index="${index}">+</button>
//           </div>
//         </div>
//       </div>
//       <div class="cart-item-right">
//         <span class="item-total">$${itemTotal.toFixed(2)}</span>
//         <button class="remove-item" data-index="${index}">Remove</button>
//       </div>
//     `;
//     cartItemsContainer.appendChild(itemElement);
//   });

//   // Calculate taxes and shipping (simple example)
//   const taxes = subtotal * 0.1; // 10% tax
//   const shipping = subtotal > 50 ? 0 : 5.99; // Free shipping for orders above $50

//   // Update the summary
//   subtotalElement.textContent = `$${subtotal.toFixed(2)}`;
//   taxesElement.textContent = `$${taxes.toFixed(2)}`;
//   shippingElement.textContent = `$${shipping.toFixed(2)}`;
//   finalTotalElement.textContent = `$${(subtotal + taxes + shipping).toFixed(2)}`;
// }

// // Event listener for quantity buttons and remove button
// document.addEventListener('click', (event) => {
//   if (event.target.classList.contains('update-quantity')) {
//     const action = event.target.getAttribute('data-action');
//     const index = event.target.getAttribute('data-index');

//     if (action === 'increase') {
//       cart[index].quantity += 1;
//     } else if (action === 'decrease' && cart[index].quantity > 1) {
//       cart[index].quantity -= 1;
//     }

//     updateCheckout();
//   } else if (event.target.classList.contains('remove-item')) {
//     const index = event.target.getAttribute('data-index');
//     cart.splice(index, 1); // Remove the item from the cart array
//     updateCheckout();
//   }
// });

// // Call the updateCheckout function to populate the page
// updateCheckout();
