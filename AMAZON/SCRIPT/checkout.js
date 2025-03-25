import { cart, cartQuantity, New_Cart } from "./cart.js";

const cartItemsContainer = document.getElementById("cart-items");

let quantity = cartQuantity();
let total = 0;

// Create a function to format prices
function formatPrice(priceInCents) {
  return (priceInCents / 100).toFixed(2);
}

// Create a function to generate item HTML
function createCartItem(item, index) {
  total += Number(item.price) * item.quantity;

  return `
    <div class="cart-item">
      <div class="cart-item-left">
        <img src="${item.image}" alt="${item.name}" class="product-image" />
        <div class="cart-item-info">
          <span class="product-name">${item.name}</span>
          <span class="product-desc">${item.description}</span>
          <div class="quantity">
            <span>Quantity: ${item.quantity}</span> &nbsp;
            <span class="product-quantity">| Price: ${formatPrice(item.price)}</span>
          </div>
        </div>
      </div>
      <div class="cart-item-right">
        <span class="item-total">${formatPrice(total)}</span>
        <button class="remove-item" data-index="${index}">Remove</button>
      </div>
    </div>
  `;
}

// Build the cart HTML and append it in one go
const cartItemsHTML = cart.map((item, index) => createCartItem(item, index)).join('');
cartItemsContainer.innerHTML = cartItemsHTML;

// Function to calculate taxes
function taxes(subtotal) {
  return (Number(subtotal) * 18) / 100;
}

let item_total = formatPrice(total); // Total price in dollars
document.getElementById("subtotal").innerHTML = `$${item_total}`; // Update subtotal element

let delivery_charges = ((Number(item_total) / 50) * 5).toFixed(2); // Shipping cost based on subtotal
document.getElementById("shipping").innerHTML = `$${delivery_charges}`; // Update shipping element

let final_total = (Number(item_total) + Number(delivery_charges)).toFixed(2);
let item_var = taxes(final_total);
document.getElementById("taxes").innerHTML = `$${item_var.toFixed(2)}`;
document.getElementById("final-total").innerHTML = `$${(
  Number(final_total) + Number(item_var)
).toFixed(2)}`; // Update final total element

// Event listener for removing items
document.querySelectorAll(".remove-item").forEach((link) => {
  link.addEventListener("click", () => {
    const id = link.getAttribute("data-index");
    New_Cart(id); // Remove item from the cart
  });
});
