import { cart, cartQuantity } from "./cart.js";

const cartItemsContainer = document.getElementById('cart-items');

let quantity = cartQuantity();
let total = 0;
// Set the quantity and subtotal text
document.getElementById('subtotal').textContent = quantity;
document.getElementById('final-total').textContent = quantity;

cart.forEach((item, index) => {
  // Calculate the total by adding each item's total price (price * quantity)
  total += Number(item.price) * item.quantity;

  // Create an item element to display
  const itemElement = document.createElement("div");
  itemElement.classList.add("cart-item");   
  itemElement.innerHTML = `
    <div class="cart-item-left">
      <img src="${item.image}" alt="${item.name}" class="product-image" />
      <div class="cart-item-info">
        <span class="product-name">${item.name}</span>
        <span class="product-desc">${item.description}</span>
        <div class="quantity">
          <span>Quantity: ${item.quantity}</span> &nbsp;
          <span class="product-quantity">| Price: ${item.price}</span>
        </div>
      </div>
    </div>
    <div class="cart-item-right">
      <span class="item-total">${total}</span>
      <button class="remove-item" data-index="${index}">Remove</button>
    </div>
  `;
  
  // Append item to the cart container
  cartItemsContainer.appendChild(itemElement);
});

// After the loop, update the total
document.getElementById('final-total').textContent = `$${total}`;

function taxes() {
    return (100 * 18) / 100;
 } 
document.getElementById('taxes').textContent = `$${taxes()}`
