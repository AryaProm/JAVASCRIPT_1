import { cart, cartQuantity, New_Cart } from "./cart.js";

const cartItemsContainer = document.getElementById('cart-items');

let quantity = cartQuantity();
let total = 0;

document.getElementById('subtotal').textContent = quantity;
document.getElementById('final-total').textContent = quantity;
document.getElementById('final-total').textContent = `$${(total/100).toFixed(2)}`;

function taxes(subtotal) {
    return (Number(subtotal) * 18) / 100;
 } 
cart.forEach((item, index) => {

    total += Number(item.price) * item.quantity;


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
          <span class="product-quantity">| Price: ${(item.price /100).toFixed(2)}</span>
        </div>
      </div>
    </div>
    <div class="cart-item-right">
      <span class="item-total">${(total/100).toFixed(2)}</span>
      <button class="remove-item" data-index="${index}" >Remove</button>
    </div>
  `;
  
  cartItemsContainer.appendChild(itemElement);
});

let item_total = (total / 100).toFixed(2);  // Total price in dollars
document.getElementById('subtotal').innerHTML = `$${item_total}`; // Update subtotal element

let delivery_charges = ((Number(item_total) / 50) * 5).toFixed(2);  // For example, $5 shipping for every $50 of subtotal
document.getElementById('shipping').innerHTML = `$${delivery_charges}`; // Update shipping element


let final_total = (Number(item_total) + Number(delivery_charges)).toFixed(2);
let item_var  = taxes(final_total)
document.getElementById('taxes').innerHTML = `$${(item_var).toFixed(2)}`
document.getElementById('final-total').innerHTML = `$${(Number(final_total) + Number(item_var)).toFixed(2)}`;  // Update final total element

document.querySelectorAll('.remove-item').forEach((link) => {
    link.addEventListener("click", () =>{
        const id = link.getAttribute('data-index')
        New_Cart(id)
    })      
  })

