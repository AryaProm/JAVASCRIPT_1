import { cart, cartLoop, cartQuantity } from "./cart.js";
import { products } from "./amazon.js";

const productContainer = document.getElementById("product-container");
products.forEach((product) => {
  const productDiv = document.createElement("div");
  productDiv.classList.add("product");

  productDiv.innerHTML = `
        <div class="product-img">
          <img src="${product.image}" alt="${product.name}">
        </div>
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <div class="price">${product.price}</div>
        <div class="rating">Rating: ${product.rating} stars</div>
        <div class="stock">In stock: ${product.stock} items</div>
        <select name="quantity" id="quantity">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
        </select>
        <button class="button" data-product-name = "${product.name}" data-product-id = "${product.id}">Add to Cart</button>
    `;

  productContainer.appendChild(productDiv);
});

document.querySelectorAll(".button").forEach((button) => {
  button.addEventListener("click", () => {
    const name = button.dataset.productName;
    const id = button.dataset.productId;
    cartLoop(name, id);
    const cartButton = document.getElementsByClassName("cart")[0]; // Access the first element with the 'cart' class
    if (cartButton) {
      cartButton.textContent = cartQuantity(); // Update the textContent of the cart button
    }
    console.log(cartQuantity())
  });
});
